import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, subject, message } = await request.json();

    // Check required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Smija Portfolio <onboarding@resend.dev>",

      // Testing recipient - your Resend account email
      to: ["anakhavijay766@gmail.com"],

      replyTo: email,

      subject: subject || "New Portfolio Enquiry",

      html: `
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${
          subject || "New Portfolio Enquiry"
        }</p>

        <hr />

        <h3>Message:</h3>

        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message || "Failed to send email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}