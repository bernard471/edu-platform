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

    const certificatesCount = user.coursesPurchased?.filter(
      (course: { certificateStatus: string }) => course.certificateStatus === 'issued'
    ).length || 0

    return NextResponse.json({
      count: certificatesCount,
      success: true
    })
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 })
  }
}
