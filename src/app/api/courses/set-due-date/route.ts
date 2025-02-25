import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"

export async function POST(req: NextRequest) {
  try {
    await connect()
    const session = await getServerSession()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { courseId, dueDate } = await req.json()

    const updatedUser = await User.findOneAndUpdate(
      { 
        email: session.user.email, 
        "coursesPurchased.courseId": courseId 
      },
      { 
        $set: { 
          "coursesPurchased.$.dueDate": new Date(dueDate)
        } 
      },
      { new: true }
    )

    if (!updatedUser) {
      return NextResponse.json(
        { error: "Course not found or user not authorized" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Due date set successfully"
    })

  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to set due date", message: error },
      { status: 500 }
    )
  }
}
