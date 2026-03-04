"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {

	const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_7mho5ag";
	const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_6hh31d3";
	const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "oNJjaUKd6PzkKwyiA";

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setStatus('idle');

		const form = e.currentTarget;
		const data = new FormData(form);

		try {
			const response = await fetch("https://formsubmit.co/ajax/luminaconexiones@gmail.com", {
				method: "POST",
				body: data,
				headers: {
					"Accept": "application/json"
				}
			})
			if (response.ok) {
				setStatus('success');
				form.reset();
			}
			else {
				setStatus('error');
			}
			setIsSubmitting(false);
		}
		catch (error) {
			console.error("Error submitting form:", error);
			setStatus('error');
			setIsSubmitting(false);
		}
	};

	return (
		<div className="w-full flex flex-col items-center py-4 px-4 bg-white text-black">
			<h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2" style={{ color: '#181c3a' }}>Contact Us</h2>
			<p className="text-center text-gray-500 mb-6">
				Discover how our clients feel about their stunning interior design transformations.<br />
				Reach out to us to learn more!
			</p>
			<div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl justify-center items-start">
				{/* Left: Contact Info */}
				<div className="flex-1 max-w-md">
					<h3 className="text-2xl font-bold mb-2" style={{ color: '#181c3a' }}>Get in Touch!</h3>
					<p className="text-black mb-6">Questions, comments or suggestions? Simply fill in the form and we will be in touch shortly.</p>
					<div className="flex items-center gap-3 mb-3 text-black">
						<svg width="22" height="22" fill="none" stroke="#181c3a" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8.5M12 3l9 7.5M12 3L3 10.5M12 3v13" /></svg>
						<span>1123 Laraba Daggash Guzape, Abuja Nigeria.</span>
					</div>
					<div className="flex items-center gap-3 mb-3 text-black">
						<svg width="22" height="22" fill="none" stroke="#181c3a" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2A19.72 19.72 0 0 1 3 5a2 2 0 0 1 2-2h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.92-1.92a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" /></svg>
						<span>091 35 91 3167</span>
					</div>
					<div className="flex items-center gap-3 text-black">
						<svg width="22" height="22" fill="none" stroke="#181c3a" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><path d="M22 6l-10 7L2 6" /></svg>
						<span>luminaconexiones@gmail.com</span>
					</div>
				</div>
				{/* Right: Contact Form */}
				<form onSubmit={handleSubmit} className="flex-1 bg-white rounded-2xl p-8 shadow-lg max-w-xl w-full flex flex-col gap-4">
					<div className="flex flex-col md:flex-row gap-4">
						<input name="firstName" type="text" placeholder="First Name" className="flex-1 px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14183B] text-black" required disabled={isSubmitting} />
						<input name="lastName" type="text" placeholder="Last Name" className="flex-1 px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14183B] text-black" required disabled={isSubmitting} />
					</div>
					<input name="email" type="email" placeholder="Email" className="px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14183B] text-black" required disabled={isSubmitting} />
					<input name="phone" type="tel" placeholder="Phone Number" className="px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14183B] text-black" required disabled={isSubmitting} />
					<textarea name="message" placeholder="Messages" rows={5} className="px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14183B] text-black resize-none" required disabled={isSubmitting} />

					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full bg-[#181c3a] text-white py-3 rounded-lg font-medium text-lg hover:bg-[#23275a] transition disabled:opacity-70 disabled:cursor-not-allowed"
					>
						{isSubmitting ? 'Sending...' : 'Send a Message'}
					</button>

					{status === 'success' && (
						<p className="text-green-600 text-center font-medium mt-2">
							Message sent successfully! We'll be in touch soon.
						</p>
					)}
					{status === 'error' && (
						<p className="text-red-600 text-center font-medium mt-2">
							Failed to send message. Please try again or email us directly.
						</p>
					)}
				</form>
			</div>
		</div>
	);
};

export default Contact;
