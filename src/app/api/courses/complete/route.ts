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

    // Count completed courses and certificates
    const completedCourses = user.coursesPurchased?.filter(
      course => course.status === 'completed'
    ) || []

    const issuedCertificates = user.coursesPurchased?.filter(
      course => course.certificateStatus === 'issued'
    ) || []

    // Get completion dates and course details
    const completionDetails = completedCourses.map(course => ({
      courseId: course.courseId,
      completionDate: course.completionDate,
      certificateStatus: course.certificateStatus
    }))

    return NextResponse.json({ 
      success: true,
      stats: {
        completedCount: completedCourses.length,
        certificatesIssued: issuedCertificates.length,
        completionRate: user.coursesPurchased?.length 
          ? (completedCourses.length / user.coursesPurchased.length * 100).toFixed(1)
          : 0
      },
      details: {
        completedCourses: completionDetails,
        recentCompletions: completionDetails.slice(-5) // Last 5 completed courses
      }
    })

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 })
  }
}


// New POST endpoint for course completion
export async function POST(request: Request) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { courseId } = await request.json()
    
    if (!courseId) {
      return NextResponse.json({ error: "Course ID is required" }, { status: 400 })
    }

    const user = await User.findOne({ email: session.user.email })
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    interface PurchasedCourse {
      courseId: string;
      status: string;
      completionDate?: Date;
      certificateStatus?: string;
    }

    // Find and update the course status
    const courseIndex = user.coursesPurchased.findIndex(
      (course: PurchasedCourse) => course.courseId === courseId
    )

    if (courseIndex === -1) {
      return NextResponse.json({ error: "Course not found in user's purchases" }, { status: 404 })
    }

    user.coursesPurchased[courseIndex].status = 'completed'
    user.coursesPurchased[courseIndex].completionDate = new Date()
    
    await user.save()

    return NextResponse.json({ 
      success: true,
      message: "Course marked as completed"
    })

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 })
  }
}


