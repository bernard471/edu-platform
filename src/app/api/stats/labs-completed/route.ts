import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextResponse } from "next/server"
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

    const completedLabs = user.labsCompleted?.filter(
      (lab: { status: string }) => lab.status === 'completed'
    ).length || 0

    return NextResponse.json({
      count: completedLabs,
      success: true
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Error fetching completed labs count' },
      { status: 500 }
    )
  }
}
