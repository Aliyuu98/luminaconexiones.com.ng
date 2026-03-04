"use client";
import React, { useState } from "react";


const reviews = [
	{
		name: "Abdulmalik Lukman",
		location: "Abuja, Nigeria",
		date: "December 08, 2025",
		tag: "Living Room Redesign",
		desc: "The design exceeded my expectations. The quality, layout and finishings were top-notch.",
	},

	{
		name: "Umar Shafiu",
		location: "Abuja, Nigeria",
		date: "April 12, 2025",
		tag: "House Design",
		desc: "From start to finish, the attention to detail and overall flow are just perfect. We couldn't be happier with the result.",
	},

	{
		name: "Uchefacez Gadgets",
		location: "Abuja, Nigeria",
		date: "July 15, 2025",
		tag: "Shop Design",
		desc: "I love the new look of the shop. The layout is clean and makes finding products easy.",
	},

	{
		name: "CNC Men's Boutique",
		location: "Abuja, Nigeria",
		date: "September 27, 2025",
		tag: "Shop Design",
		desc: "Very impressed with the overall quality and design.",
	},

	{
		name: "Yogurberry",
		location: "Abuja, Nigeria",
		date: "November 10, 2025",
		tag: "Restaurant Design",
		desc: "Super impressed and proud of the result. The renovation gave the restaurant a whole new vibe.",
	},

	{
		name: "Mahmud Aliyu",
		location: "Abuja, Nigeria",
		date: "November 20, 2025",
		tag: "Home office Design",
		desc: "I am happy with your work. The space feels more organized and professional now.",
	},
];

const getInitials = (name: string) => {
	return name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.substring(0, 2)
		.toUpperCase();
};

const Review = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		window.location.href = `mailto:luminaconexiones@gmail.com?subject=Newsletter Subscription&body=Please add ${email} to your newsletter list.`;
	};

	// Star SVG Component
	const Star = ({ filled }: { filled: boolean }) => (
		<svg
			width="18"
			height="18"
			fill={filled ? "#F4C430" : "#E0E0E0"} // Brand Gold
			viewBox="0 0 24 24"
			className="transition-colors duration-300"
		>
			<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
		</svg>
	);

	// Verified Badge Component
	const VerifiedBadge = () => (
		<div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full border border-green-100">
			<svg width="12" height="12" viewBox="0 0 24 24" fill="#16a34a">
				<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
			</svg>
			<span className="text-[10px] font-semibold text-green-700 uppercase tracking-wide">Verified</span>
		</div>
	);

	return (
		<div className="w-full flex flex-col items-center py-8 bg-gray-50/50" id="review-section">
			<div className="text-center mb-10 px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2" style={{ color: '#181c3a' }}>What Our Clients Say</h2>
				<p className="text-center text-gray-500 mb-6">
					Discover how our clients feel about their stunning interior design transformations.<br />
					Reach out to us to learn more!
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-6">
				{reviews.map((review, idx) => (
					<div
						key={idx}
						className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(20,24,59,0.15)] transition-all duration-300 border border-gray-100 flex flex-col relative overflow-hidden group hover:-translate-y-1"
					>
						{/* Decorative Quote Mark */}
						<div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
							<svg width="60" height="60" fill="#14183B" viewBox="0 0 24 24">
								<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91154 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
							</svg>
						</div>

						{/* Header: Avatar, Name, Verified */}
						<div className="flex items-center gap-4 mb-6 z-10">
							<div className="h-12 w-12 rounded-full bg-[#14183B] flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0 border-2 border-[#DEDEA2]">
								{getInitials(review.name)}
							</div>
							<div className="flex flex-col">
								<h3 className="font-bold text-[#14183B] text-lg leading-tight">{review.name}</h3>
								<div className="flex items-center gap-2 mt-1">
									<span className="text-xs text-gray-400 font-medium">{review.location}</span>
									<VerifiedBadge />
								</div>
							</div>
						</div>

						{/* Stars & Tag */}
						<div className="flex items-center justify-between mb-4 z-10">
							<div className="flex gap-1">
								{[1, 2, 3, 4, 5].map((i) => (
									<Star key={i} filled={true} />
								))}
							</div>
							<span className="text-[10px] font-bold px-3 py-1 bg-[#F7F7F1] text-[#14183B] rounded-full border border-[#DEDEA2]/50 uppercase tracking-wider">
								{review.tag}
							</span>
						</div>

						{/* Content */}
						<p className="text-gray-600 text-[15px] leading-7 italic mb-6 z-10 flex-grow">
							"{review.desc}"
						</p>

						{/* Footer: Date */}
						<div className="mt-auto border-t border-gray-100 pt-4 flex justify-between items-center">
							<span className="text-xs font-semibold text-gray-400">{review.date}</span>
						</div>
					</div>
				))}
			</div>

			{/* Newsletter Section */}
			<div className="w-full flex justify-center mt-12 px-4">
				<div className="w-full max-w-5xl bg-[#F8F8F4] rounded-[32px] py-12 px-8 md:px-20 flex flex-col items-center shadow-sm">

					<h3 className="text-3xl md:text-4xl font-bold text-[#14183B] mb-8 text-center tracking-tight">
						Subscribe to our Newsletter!
					</h3>

					<form onSubmit={handleSubmit} className="w-full max-w-lg relative flex items-center">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Your email"
							className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#14183B]/10 shadow-sm pr-36"
							required
						/>
						<button
							type="submit"
							className="absolute right-2 bg-[#14183B] text-white px-8 py-2.5 rounded-lg font-medium hover:bg-[#1a1f4b] transition-colors"
						>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Review;

