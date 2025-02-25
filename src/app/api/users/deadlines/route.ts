import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { courses } from "@/data/courses"

export async function GET() {
    try {
      await connect()
      const session = await getServerSession()
      
      if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      }

      const user = await User.findOne({ email: session.user.email })
      
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
      }

      interface CoursePurchased {
          courseId: string;
          status: string;
          dueDate: string;
          progress?: number;
      }

      interface Deadline {
          courseId: string;
          courseTitle: string;
          dueDate: string;
          progress: number;
      }

      const deadlines: Deadline[] = (user.coursesPurchased.map(course => ({
          ...course,
          dueDate: course.dueDate.toISOString()
      })) as CoursePurchased[])
          .filter((course: CoursePurchased) => course.status === 'active' && course.dueDate)
          .map((course: CoursePurchased) => {
              const courseDetails = courses.find(c => c.id === course.courseId)
              return {
                  courseId: course.courseId,
                  courseTitle: courseDetails?.title || course.courseId,
                  dueDate: course.dueDate,
                  progress: course.progress || 0
              }
          })
          .sort((a: Deadline, b: Deadline) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    
      return NextResponse.json({ success: true, deadlines })
    } catch (error) {
      console.error(error)
      return NextResponse.json({ error: "Failed to fetch deadlines" }, { status: 500 })
    }
}
