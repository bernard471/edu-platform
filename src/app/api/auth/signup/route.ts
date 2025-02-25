import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

export async function POST(request: Request) {

    try {
        await connect();

        const { name, email, password } = await request.json();

        // Add validation
        if (!name || !email || !password) {
            return NextResponse.json(
              { message: "All fields are required" },
              { status: 400 }
            );
          }

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if (!name || !email || !password) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
        return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }
    if (password.length < 6) {
        return NextResponse.json({ message: "Password must be at least 6 characters long" }, { status: 400 });
    }

        const existingUser = await User.findOne({ 
            $or: [
                { email },
                { name }
            ]
        });
        
        if (existingUser) {
            return NextResponse.json({ 
                message: existingUser.email === email ? "Email already exists" : "Username already exists" 
            }, { status: 400 });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            coursesPurchased: [],
            labsCompleted: [],
            studyTimes: [],
            courseCompletions: [],
            labCompletions: [],
            isVerified: false,
            isAdmin: false,
            createdAt: new Date(),
            lastLogin: new Date(),
            profileImage: null
        });

        const savedUser = await newUser.save();

        await sendEmail({
            email,
            emailType: "VERIFY",
            userId: savedUser._id ? savedUser._id.toString() : ''        
        });

        return NextResponse.json({
            message: "User created successfully. Please verify your email",
            success: true
        }, { status: 201 });

    } catch (error) {
        console.error("Signup error:", error);
        return NextResponse.json({ 
            message: "Error creating user", 
            success: false 
        }, { status: 500 });
    }
}
