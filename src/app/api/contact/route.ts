import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont requis" },
        { status: 400 }
      );
    }

    // Send email using Resend
    await resend.emails.send({
      from: "Pause Café Soleil <onboarding@resend.dev>", // Resend's test email
      to: ["mckenziealexcina@gmail.com"],
      replyTo: email,
      subject: `Nouveau message de ${name} - Pause Café Soleil`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f3a424; border-bottom: 2px solid #f3a424; padding-bottom: 10px;">
            Nouveau message du site web
          </h2>

          <div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5; border-radius: 8px;">
            <p style="margin: 10px 0;"><strong>Nom:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ""}
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />

          <p style="color: #888; font-size: 12px; text-align: center;">
            Message envoyé depuis pausecafesoleil.com
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Message envoyé avec succès!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
