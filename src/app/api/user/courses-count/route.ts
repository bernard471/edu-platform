import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"

connect()

export async function GET() {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await User.findOne({ email: session.user.email })
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }
    

    // Count unique courseIds from coursesPurchased array
    const uniqueCourseIds = new Set(user.coursesPurchased?.map(course => course.courseId))
    const coursesCount = uniqueCourseIds.size

    return NextResponse.json({ 
      success: true,
      count: coursesCount,
      details: {
        totalPurchased: coursesCount,
        activeCourses: user.coursesPurchased?.filter(course => course.status === 'active').length || 0,
        completedCourses: user.coursesPurchased?.filter(course => course.status === 'completed').length || 0
      }
    })

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 })
  }
}
