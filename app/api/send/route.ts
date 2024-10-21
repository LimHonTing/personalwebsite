import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);
const toEmail = process.env.TO_EMAIL as string;

export async function POST(req: Request) {
  const { email, subject, message }: { email: string; subject: string; message: string } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [toEmail],
        subject: subject,
        react: EmailTemplate({ email, subject, message }),
      });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
