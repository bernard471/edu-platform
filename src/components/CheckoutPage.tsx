"use client";

import React, { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { PricingTier } from "@/lib/types/payment";
import axios from "axios";

export default function PricingCheckout({ 
  tier, 
  onPaymentSuccess, 
  userEmail 
}: { 
  tier: PricingTier, 
  onPaymentSuccess: () => void, 
  userEmail: string 
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tierId: tier.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setClientSecret(data.clientSecret);
      })
      .catch((err) => setError(err.message));
  }, [tier.id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements || !userEmail) return;

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setError(submitError.message);
      setLoading(false);
      return;
    }

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: { 
          return_url: `${window.location.origin}/login?subscription=success`,
        },
        redirect: 'if_required', 
      });

      if (error) {
        setError(error.message);
      } else {
        // Update subscription status with email
        await axios.post('/api/users/subscription', {
          email: userEmail,
          subscriptionStatus: tier.id,
        });
        
        onPaymentSuccess();
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError('Payment processing failed. Please try again.');
      } else {
        setError('An unknown error occurred.');
      }
    }

    setLoading(false);
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-4">
        Subscribe to {tier.name}
      </h2>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded mb-4">
          {error}
        </div>
      )}

      {clientSecret && (
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <button
            disabled={loading || !stripe || !userEmail}
            className="w-full mt-4 bg-cyan-500 text-white py-3 px-6 rounded-lg font-semibold
              hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : `Pay ${tier.price} ${tier.currency}`}
          </button>
        </form>
      )}
    </div>
  );
}
