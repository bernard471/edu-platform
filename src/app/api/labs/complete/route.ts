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

    const { labId, labTitle } = await req.json()

    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      {
        $set: {
          'labsCompleted.$[lab].status': 'completed',
          'labsCompleted.$[lab].completionDate': new Date()
        },
        $push: {
          labCompletions: {
            labId,
            labTitle,
            completionDate: new Date()
          }
        }
      },
      {
        arrayFilters: [{ 'lab.labId': labId }],
        new: true
      }
    )

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error completing lab' }, { status: 500 })
  }
}
