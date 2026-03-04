"use client";
import React, { useState } from "react";
import Image from "next/image";

const initialCategories = [
	{
		title: "Full Interior Design and styling",
		desc: "Full make-over with clean, modern styling",
		img: "/category18.jpg",
	},
	{
		title: "Residential Space Planning",
		desc: "Smart planning for a comfortable home.",
		img: "/category2.jpg",
	},
	{
		title: "Commercial and Retail Interior",
		desc: "Stylish interior for modern businesses.",
		img: "/category3.png",
	},
	{
		title: "Boutique and Store layout",
		desc: "Beautiful, functional boutique spaces.",
		img: "/category4.jpeg",
	},
	{
		title: "Restaurant/Café Interior",
		desc: "Design that elevates the Dinning experience.",
		img: "/category5.png",
	},
	{
		title: "Furniture  Selection/customization",
		desc: "Furniture tailored to your style.",
		img: "/category6.jpeg",
	},
];

const Categories = () => {
	const [categories, setCategories] = useState(initialCategories);
	const [hasLoadedMore, setHasLoadedMore] = useState(false);

	const handleExploreMore = () => {
		const newCategories = [
			{
				title: "Luxury Bathroom Design",
				desc: "Elegant and functional bathroom spaces.",
				img: "/category15.jpg",
			},
			{
				title: "Modern Office Spaces",
				desc: "Productive and stylish workspaces.",
				img: "/cateegory16.jpg",
			},
			{
				title: "Custom Wardrobes",
				desc: "Organized and beautiful storage solutions.",
				img: "/category17.jpg",
			},
		];
		setCategories([...categories, ...newCategories]);
		setHasLoadedMore(true);
	};

	return (
		<div className="w-full flex flex-col items-center py-4 px-4 bg-white">
			<h2 className="text-3xl md:text-4xl font-bold text-center text-button-blue mb-2">Our Interior Decoration Categories</h2>
			<p className="text-center text-gray-500 mb-6">Choose the style that matches your taste.</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-6">
				{categories.map((cat, idx) => (
					<div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-200 hover:shadow-2xl transition-shadow duration-300 group">
						<div className="relative w-full aspect-[4/3] overflow-hidden">
							<Image
								src={cat.img}
								alt={cat.title}
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-300"
								style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
							/>
						</div>
						<div className="p-6 flex-1 flex flex-col">
							<h3 className="font-semibold text-lg mb-1 text-button-blue">{cat.title}</h3>
							<p className="text-gray-600 text-sm">{cat.desc}</p>
						</div>
					</div>
				))}
			</div>
			{!hasLoadedMore && (
				<button
					onClick={handleExploreMore}
					className="bg-button-blue text-white px-8 py-2 rounded-lg font-medium hover:bg-[#23275a] transition"
				>
					Explore More
				</button>
			)}
			{/* Video Section */}
			<div className="w-full flex justify-center mt-8 px-4">
				<div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-xl" style={{ boxShadow: '0 4px 24px rgba(20,24,59,0.08)' }}>
					<video controls className="w-full h-auto aspect-video">
						<source src="/video1.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</div>
	);
};

export default Categories;
