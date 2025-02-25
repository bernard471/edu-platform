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
            labCompletions: user.labCompletions || []
        })
    } catch (error: unknown) {
        console.error("Error fetching lab completions:", error)
        return NextResponse.json({ error: "Failed to fetch lab completions" }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession()
        
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const { labId, labTitle } = await request.json()
        
        const updatedUser = await User.findOneAndUpdate(
            { email: session.user.email },
            {
                $push: {
                    labCompletions: {
                        labId,
                        labTitle,
                        completionDate: new Date()
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
            message: "Lab completion recorded successfully"
        })
    } catch (error: unknown) {
        console.error("Error recording lab completion:", error)
        return NextResponse.json({ error: "Failed to record lab completion" }, { status: 500 })
    }
}
