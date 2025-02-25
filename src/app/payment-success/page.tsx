"use client"

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Shield, Mail } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { useToast } from "@/hooks/use-toast";

function PaymentSuccessContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const amount = searchParams?.get('amount');
    const plan = searchParams?.get('plan');
    const { toast } = useToast();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleContinue = async () => {
      try {
        setLoading(true);
        await axios.post('/api/users/verify-email', {
          email,
          courseId: plan
        });
    
        toast({
          title: "Success",
          description: "Email verified successfully",
          className: "bg-zinc-900 border border-zinc-800 text-zinc-100",
        });
    
        router.push('/login');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast({
            title: "Verification Failed",
            description: error.response?.data?.error || "Please try again",
            variant: "destructive",
            className: "bg-zinc-900 border border-zinc-800 text-zinc-100",
          });
        }
      } finally {
        setLoading(false);
      }
    };
    

    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-800 p-8 rounded-xl shadow-lg text-center">
          <Shield className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-gray-400 mb-6">Your subscription has been activated</p>
          <div className="bg-gray-700 p-4 rounded-lg mb-8">
            <p className="text-lg text-cyan-400">Amount Paid: ${amount}</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">Confirm Your Email</label>
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-10 text-white focus:outline-none focus:border-cyan-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <button 
            onClick={handleContinue}
            disabled={loading || !email}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
          >
            {loading ? "Processing..." : "Continue to Login"}
          </button>
        </div>
      </main>
    );
}

export default function PaymentSuccess() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="text-white">Loading payment details...</div>
            </div>
        }>
            <PaymentSuccessContent />
        </Suspense>
    );
}