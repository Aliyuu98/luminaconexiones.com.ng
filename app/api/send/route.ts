import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.CINDY_EMAIL_SENDER);

export async function POST(req: Request) {
    try {
        const { firstName, lastName, email, phone, message } = await req.json();

        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['luminaconexiones@gmail.com'],
            subject: 'New Contact Form Submission',
            replyTo: email as string,
            html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
