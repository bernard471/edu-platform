import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import {  NextResponse } from "next/server"
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

    const completedCourses = user.coursesPurchased
      .filter((course: { status: string }) => course.status === "completed")
      .map((course: { courseId: string; completionDate: Date; status: string }) => {
        const courseDetails = courses.find((c) => c.id === course.courseId)
        return {
          courseId: course.courseId,
          courseTitle: courseDetails?.title || "Unknown Course",
          completionDate: course.completionDate,
          status: course.status,
        }
      })

    console.log("Completed courses fetched:", completedCourses)

    return NextResponse.json({
      success: true,
      completedCourses,
      totalCompleted: completedCourses.length,
    })
  } catch (error) {
    console.error("Error fetching completed courses:", error)
    return NextResponse.json(
      { error: "Failed to fetch completed courses" },
      { status: 500 }
    )
  }
}
