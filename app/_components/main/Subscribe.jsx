// Subscribe.jsx

"use client";
import { useState } from "react";

// Utility function to load Stripe.js
const getStripe = () => {
  return new Promise((resolve) => {
    if (window.Stripe) {
      resolve(window.Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY));
    } else {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/";
      script.onload = () =>
        resolve(window.Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY));
      document.body.appendChild(script);
    }
  });
};

const Subscribe = ({ userId }) => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);

    try {
      // Step 1: Create payment intent
      const res = await fetch("/api/v1/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      const { clientSecret, error } = await res.json();

      if (error) {
        throw new Error("Error creating payment intent: " + error);
      }

      //   // Step 2: Confirm the payment
      //   const stripe = await getStripe();

      //   const { error: confirmError } = await stripe.confirmPayment({
      //     clientSecret,
      //     return_url: window.location.href, // URL to redirect to after payment
      //   });

      //   if (confirmError) {
      //     throw new Error("Payment failed: " + confirmError.message);
      //   }

      // Step 3: Update user subscription status
      const updateRes = await fetch("/api/v1/payment/updateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      const updateData = await updateRes.json();

      if (updateData.error) {
        throw new Error("Error updating subscription: " + updateData.error);
      }

      alert("Subscription successful!");
      // Optionally, redirect or update UI here
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      className={`bg-red-300 p-1 px-2 rounded-md ${
        loading ? "opacity-50" : ""
      }`}
      disabled={loading}
    >
      {loading ? "Processing..." : "Subscribe for ₹50"}
    </button>
  );
};

export default Subscribe;
