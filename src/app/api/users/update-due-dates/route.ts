import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {  NextResponse } from "next/server";

export async function POST() {
  try {
    await connect();
    
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

    // More specific query with array filters
    const result = await User.updateMany(
      {}, 
      {
        $set: {
          "coursesPurchased.$[course].dueDate": thirtyDaysFromNow
        }
      },
      {
        arrayFilters: [{ "course.status": "active" }],
        multi: true
      }
    );

    // Verify the update
    const updatedUsers = await User.find({
      "coursesPurchased.dueDate": thirtyDaysFromNow
    });

    return NextResponse.json({
      success: true,
      message: "Due dates updated successfully",
      updated: result.modifiedCount,
      affectedUsers: updatedUsers.length
    });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Failed to update due dates" }, { status: 500 });
  }
}
