import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// const resend = new Resend(process.env.RESEND_API_KEY as string);
const user_email = process.env.EMAIL_USER as string;

export async function POST(req: Request) {
  const { email, subject, message }: { email: string; subject: string; message: string } = await req.json();
  console.log(email, subject, message);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.EMAIL_HOST as string,
      port: parseInt(process.env.EMAIL_PORT as string, 10),
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASSWORD as string
      }
    });

    const data = {
      from: user_email,
      to: user_email,
      subject: subject,
      text: `The person contacted you: ${email}\n\nMessage: ${message} `, 
    };

    await transporter.sendMail(data);

    return NextResponse.json({message: "Email Sent Successfully"}, {status: 200});

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}