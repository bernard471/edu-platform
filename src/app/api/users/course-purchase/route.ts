import { connect } from "@/dbConfig/dbConfig"
import { getServerSession } from "next-auth/next"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"

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

        return NextResponse.json({
            success: true,
            courseDetails: user.coursesPurchased
        })

    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }
        return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession()
        
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const reqBody = await request.json()
        const { courseId } = reqBody

        const existingPurchase = await User.findOne({
            email: session.user.email,
            'coursesPurchased.courseId': courseId
        })

        if (existingPurchase) {
            return NextResponse.json({ 
                error: "Course already purchased" 
            }, { status: 400 })
        }
        
        const dueDate = new Date()
        dueDate.setDate(dueDate.getDate() + 30)
        
        const updatedUser = await User.findOneAndUpdate(
            { email: session.user.email },
            { 
                $addToSet: {
                    coursesPurchased: {
                        courseId,
                        purchaseDate: new Date(),
                        status: 'active',
                        dueDate: dueDate,
                        progress: 0
                    }
                }
            },
            { new: true }
        )
          
        if (!updatedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 })
        }

        const response = NextResponse.json({
            message: "Course purchased successfully",
            success: true,
            courseDetails: updatedUser.coursesPurchased
        })

        response.cookies.set("coursePurchase", courseId, {
            httpOnly: true,
            maxAge: 86400,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production"
        })

        return response

    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }
        return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 })
    }
}
