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

    const { labId } = await req.json()
    
    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      {
        $push: {
          labsCompleted: {
            labId,
            status: 'in_progress',
            startDate: new Date()
          }
        }
      },
      { new: true }
    )

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error starting lab' }, { status: 500 })
  }
}
