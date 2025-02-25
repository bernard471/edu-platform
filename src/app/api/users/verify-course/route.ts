import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.searchParams.get('email');
    const courseId = request.nextUrl.searchParams.get('courseId');

    if (!email || !courseId) {
      return NextResponse.json({ 
        error: "Missing email or courseId",
        exists: false 
      }, { status: 400 });
    }

    const existingPurchase = await User.findOne({
      email,
      'coursesPurchased.courseId': courseId
    });

    if (existingPurchase) {
      return NextResponse.json({ 
        message: "Course already purchased",
        exists: true 
      }, { status: 200 });
    }

    return NextResponse.json({ 
      message: "Course not purchased yet",
      exists: false 
    }, { status: 200 });

  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ 
      error: "Verification failed",
      exists: false 
    }, { status: 500 });
  }
}