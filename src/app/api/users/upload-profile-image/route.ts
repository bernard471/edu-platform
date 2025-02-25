import { NextRequest, NextResponse } from "next/server"
import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { getServerSession } from "next-auth/next"

connect()

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const image = formData.get('profileImage')
    
    if (!image || !(image instanceof Blob)) {
      return NextResponse.json({ error: "No valid image provided" }, { status: 400 })
    }

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const imageBase64 = `data:${image.type};base64,${buffer.toString('base64')}`

    // Update user's profile image reference directly
    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      { 
        profileImage: imageBase64,
        hasProfileImage: true 
      },
      { new: true }
    )

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      message: "Profile image updated successfully",
      imageUrl: imageBase64,
      success: true
    })
  } catch (error: unknown) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 })
  }
}
