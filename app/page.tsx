'use client';
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import Categories from "./Components/Categories";
import Link from "next/link";
import AboutUs from "./Components/AboutUs";
import Service from "./Components/Service";
import Review from "./Components/Review";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen  ">
      <section id="top" className="flex flex-col w-full h-screen">
        <Navbar />
        <div className="w-full flex-1 relative">
          <div className="relative w-full h-full">
            <Image src='/bg-drop.jpg' alt="background image" fill className="filter brightness-30" />
          </div>
          <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 bg-black/40 md:bg-transparent">
            <div className="w-[90%] md:w-[65%] text-center flex gap-8 md:gap-12 flex-col z-10">
              <div className="flex flex-col gap-4 md:gap-6">
                <h1 className="text-3xl md:text-5xl font-bold font-mono text-white md:text-white">Transform Your Space with Elegant Interior Designs</h1>
                <p className="text-sm md:text-base font-normal text-white md:text-custom-gray drop-shadow-md md:drop-shadow-none">We bring you modern, timeless, and artistic interior decor to homes and offices.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
                <Button
                  title="Explore Design"
                  background="#F7F7F1"
                  color="#000000"
                  onClick={() => {
                    const target = document.querySelector('#categories-section');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
                <Button
                  title="Request a Quote"
                  background="#14183B"
                  color="#F7F7F1"
                  onClick={() => {
                    const target = document.querySelector('#contact-section');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Categories Section */}
      </section>
      <section id="categories-section">
        <div className="w-full flex justify-center mt-8">
          <Categories />
        </div>
      </section>
      <section id="about-section" className="w-full flex justify-center py-10 bg-[#f7f7f7]">
        <AboutUs />
      </section>
      <section id="service-section" className="w-full flex justify-center py-10 bg-white">
        <Service />
      </section>
      <section id="review-section" className="w-full flex justify-center py-10 bg-white">
        <Review />
      </section>
      <section id="contact-section" className="w-full flex justify-center py-10 bg-white">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}


// import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// const resend = new Resend(process.env.CINDY_EMAIL_SENDER);

// export async function POST(req: Request) {
//     try {
//         const { firstName, lastName, email, phone, message } = await req.json();

//         const data = await resend.emails.send({
//             from: 'Contact Form <onboarding@resend.dev>',
//             to: ['luminaconexiones@gmail.com'],
//             subject: 'New Contact Form Submission',
//             replyTo: email as string,
//             html: `
//         <h1>New Contact Form Submission</h1>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `
//         });

//         return NextResponse.json(data);
//     } catch (error) {
//         return NextResponse.json({ error }, { status: 500 });
//     }
// }
