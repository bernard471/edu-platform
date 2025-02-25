import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const { email, courseId } = await request.json();

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ 
                error: "User not found" 
            }, { status: 404 });
        }

        // Verify if the course exists in user's purchased courses
        const coursePurchase = user.coursesPurchased.find(
            (course: { courseId: string }) => course.courseId === courseId
        );

        if (!coursePurchase) {
            return NextResponse.json({ 
                error: "Course purchase not found" 
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: "Email verified successfully"
        });

    } catch (error) {
        return NextResponse.json({ 
            error: "Email verification failed", message: (error as Error).message 
        }, { status: 500 });
    }
}
