// pages/api/subscribe.js

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { userId } = await req.json(); // Ensure you pass user ID from client

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000, // Amount in paise (50 rupees)
      currency: "inr",
      metadata: { userId }, // Save user ID in metadata for later use
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
