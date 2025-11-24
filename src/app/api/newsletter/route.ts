import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., "us21"

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
      return NextResponse.json(
        { error: "Configuration Mailchimp manquante" },
        { status: 500 }
      );
    }

    // Mailchimp API endpoint
    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    const data = {
      email_address: email,
      status: "subscribed",
      tags: ["Website Signup"],
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      // Handle specific Mailchimp errors
      if (responseData.title === "Member Exists") {
        return NextResponse.json(
          { error: "Cette adresse email est déjà inscrite à notre newsletter." },
          { status: 400 }
        );
      }

      console.error("Mailchimp error:", responseData);
      return NextResponse.json(
        { error: "Erreur lors de l'inscription. Veuillez réessayer." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Inscription réussie!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}
