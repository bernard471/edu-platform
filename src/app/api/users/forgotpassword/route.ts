import { NextResponse } from "next/server"
import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { sendEmail } from "@/helpers/mailer"

connect()

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
  
    const user = await User.findOne({ email }) as { _id: string }
  
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      )
    }

    // Generate reset token and save to user
    await sendEmail({ 
      email, 
      emailType: "RESET", 
      userId: user._id 
    })

    return NextResponse.json({
      message: "Password reset email sent successfully",
      success: true
    })

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 })
  }
}
