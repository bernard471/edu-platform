import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"

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

    return NextResponse.json({
      success: true,
      studyTimes: user.studyTimes || []
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch study times", message: error },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    await connect()
    const session = await getServerSession()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { courseId, duration, date } = await req.json()

    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      {
        $push: {
          studyTimes: {
            courseId,
            duration,
            date: new Date(date)
          }
        }
      },
      { new: true }
    )
   
    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: "Study time recorded successfully"
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to record study time", message: error },
      { status: 500 }
    )
  }
}
