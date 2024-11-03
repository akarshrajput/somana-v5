// app/api/v1/users/subscribe/route.js

import connectMongoDB from "@/app/_lib/mongodb";
import User from "@/app/_models/userModel";
import { NextResponse } from "next/server";
// import connectMongoDB from "@/app/_lib/mongodb"; // Import MongoDB connection
// import User from "@/app/_models/userModel"; // Import User model

export async function POST(req) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Get userId from request body
    const { userId } = await req.json();

    // Validate userId
    if (!userId) {
      return NextResponse.json(
        { status: "error", message: "userId is required" },
        { status: 400 }
      );
    }

    // Update user subscription status in the database
    const result = await User.updateOne(
      { _id: userId },
      { $set: { subscription: true } }
    );

    // Check if the update was successful
    if (result.modifiedCount > 0) {
      return NextResponse.json(
        { status: "success", message: "Subscription updated successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          status: "error",
          message: "User not found or subscription already active",
        },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error updating subscription:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
