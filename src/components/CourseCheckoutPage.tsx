"use client";

import React, { useEffect, useState, useRef } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { Course } from "@/types/course";
import Image from "next/image";
import { Clock, BookOpen, Award } from 'lucide-react';
import axios from "axios";

export default function CourseCheckoutPage({ 
  course, 
  onPaymentSuccess, 
  userEmail 
}: { 
  course: Course, 
  onPaymentSuccess: () => void, 
  userEmail: string 
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isProcessing, setIsProcessing] = useState(false);
  const processedRef = useRef(false);
  const purchaseRef = useRef(false);

  useEffect(() => {
    let mounted = true;

    if (!clientSecret && !processedRef.current) {
      processedRef.current = true;
      
      fetch("/api/create-course-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId: course.id, price: course.price }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (mounted) {
            if (data.error) throw new Error(data.error);
            setClientSecret(data.clientSecret);
          }
        })
        .catch((err) => mounted && setError(err.message));
    }

    return () => {
      mounted = false;
    };
  }, [course.id, course.price, clientSecret]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (isProcessing || !stripe || !elements || !userEmail) return;
    setIsProcessing(true);

    try {
      if (!purchaseRef.current) {
        purchaseRef.current = true;
        
        const { error: submitError } = await elements.submit();
        if (submitError) throw submitError;

        const { error } = await stripe.confirmPayment({
          elements,
          clientSecret,
          confirmParams: { 
            return_url: `${window.location.origin}/courses/${course.id}/success`,
          },
          redirect: 'if_required', 
        });

        if (error) throw error;

        await axios.post('/api/users/course-purchase', {
          email: userEmail,
          courseId: course.id,
        });
        
        onPaymentSuccess();
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Payment processing failed');
    } finally {
      setIsProcessing(false);
    }
    setLoading(false);
  };

  // Rest of your JSX remains the same
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Course Details Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Image 
            src={course.image} 
            alt={course.title} 
            width={400} 
            height={200} 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{course.title}</h2>
          
          <div className="flex items-center gap-4 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium 
              ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                course.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                'bg-purple-100 text-purple-800'}`}>
              {course.level}
            </span>
            <div className="text-2xl font-bold text-cyan-600">${course.price.toFixed(2)}</div>
          </div>

          <div className="flex items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>{course.chapters.length} Chapters</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Certificate</span>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl text-gray-600 font-semibold">Course Content</h3>
            <div className="space-y-4">
              {course.chapters.map((chapter) => (
                <div 
                  key={chapter.id}
                  className="bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-600">{chapter.title}</h4>
                    <span className="text-sm text-gray-500">{chapter.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600">{chapter.description}</p>
                </div>
              ))}
              </div>
          </div>
        </div>

        {/* Payment Section */}
        
<div className="bg-gray-800 p-6 rounded-xl">
  <h3 className="text-xl font-bold text-white mb-6">Complete Purchase</h3>
  
  {error && (
    <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded mb-4">
      {error}
    </div>
  )}

  <form onSubmit={handleSubmit}>
    <PaymentElement />
    <button
      disabled={loading || !stripe || !userEmail}
      className="w-full mt-6 bg-cyan-500 text-white py-3 px-6 rounded-lg font-semibold
        hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Processing..." : `Pay ${course.price.toFixed(2)} USD`}
    </button>
  </form>
</div>

      </div>
    </div>
  );
}
