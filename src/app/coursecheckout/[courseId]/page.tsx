"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CourseCheckoutPage from "@/components/CourseCheckoutPage";
import { courses } from "@/data/courses";
import { useParams, useRouter, } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Shield } from 'lucide-react';
import { useCallback } from 'react';
import toast from "react-hot-toast";


if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("Missing Stripe public key");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function CourseCheckout() {
  const params = useParams();
const router = useRouter();
const [email, setEmail] = useState('');
const [isProcessing, setIsProcessing] = useState(false);
const [clientSecret, setClientSecret] = useState<string | null>(null);

const course = params ? courses.find(c => c.id === params.courseId) : null;

useEffect(() => {
  if (course) {
    const createPaymentIntent = async () => {
      try {
        const response = await axios.post('/api/create-course-payment-intent', {
          courseId: course.id
        });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
      }
    };
    createPaymentIntent();
  }
}, [course]);

const handlePaymentSuccess = useCallback(async () => {
  try {
    if (!course || !email || isProcessing) return;
    
    setIsProcessing(true);
    
    // Process new purchase
    const purchaseResponse = await axios.post('/api/users/course-purchase', {
      email,
      courseId: course.id
    });
    
    if (purchaseResponse.data.success) {
      toast.success("Course purchased successfully");
      
      router.replace(`/payment-success?amount=${course.price}&plan=${course.id}`);
    }
    
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      // Course already purchased - redirect to success page
      router.replace(`/payment-success?amount=${course?.price}&plan=${course?.id}`);
    } else {
      toast.error(axios.isAxiosError(error) ? error.response?.data?.error || "Purchase failed" : "Purchase failed");
    }
  } finally {
    setIsProcessing(false);
  }
}, [course, email, router, isProcessing]);  if (!course) {
    return <div>Course not found</div>;
  }

 

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4">
      <div className="mb-10">
        <Link href="/" className="flex items-center justify-center space-x-2">
        <div className="flex items-center justify-center space-x-2 mb-4">
        <div className="flex justify-center">
          <Shield className="w-10 h-10 text-cyan-500" />
        </div>
        <h1 className="text-2xl text-blue-600 font-bold mt-2 ">DK Cyber</h1>
        </div>
        </Link>
        <h2 className="text-2xl font-bold  text-blue-400 mb-2 text-center">
          {course.title}
          <span className="font-bold font-serif text-green-500"> {course.currency} {course.price}.00</span>
        </h2>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <label className="block text-sm font-medium text-center text-gray-400 mb-2">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-cyan-500"
          placeholder="Enter your email"
          required
        />
      </div>

      {clientSecret ? (
  <Elements 
    stripe={stripePromise} 
    options={{
      clientSecret,
      appearance: {
        theme: 'night'
      }
    }}
  >
    <CourseCheckoutPage
      course={course}
      onPaymentSuccess={handlePaymentSuccess}
      userEmail={email}
    />
  </Elements>
) : (
  <div className="text-center text-white">Loading payment form...</div>
)}

  </main>
  );
}
