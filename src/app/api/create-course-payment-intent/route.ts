import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

import { courses } from "@/data/courses";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
export async function POST(request: NextRequest) {
  try {
    const { courseId } = await request.json();
    const course = courses.find(c => c.id === courseId);

    if (!course) {
      return NextResponse.json({ error: 'Invalid course' }, { status: 400 });
    }

    const amount = Number(course.price) * 100; // Convert to cents

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: course.currency,
        automatic_payment_methods: { enabled: true },
      metadata: { courseId: course.id },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
    catch (error) {
    console.error("Payment Intent Error:", error);
    return NextResponse.json(
      { error: 'Payment setup failed' },
      { status: 500 }
    );
    }
    }
