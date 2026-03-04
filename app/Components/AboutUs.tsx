import React from "react";
import Image from "next/image";

const AboutUs = () => (
	<div className="w-full flex flex-col items-center py-4 px-4 bg-[#fafbfc]">
		<h2 className="text-3xl md:text-4xl font-bold text-center text-[#14183B] mb-2">About Us</h2>
		<p className="text-center text-gray-500 mb-6">Choose the style that matches your taste.</p>
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl mx-auto bg-white p-6 rounded-xl">
			<div className="relative w-full md:w-[400px] h-[350px] rounded-xl overflow-hidden flex-shrink-0">
				<Image src="/category10.png" alt="About Us" fill style={{ objectFit: 'cover' }} className="rounded-xl" />
			</div>
			<div className="flex-1 text-left">
				<h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Lumina Conexiónes -creating signature spaces</h3>
				<ul className="list-disc pl-5 space-y-3 text-gray-600 text-lg">
					<li>Abuja based Interior Design studio</li>
					<li>Specialize in high-end residential and commercial spaces</li>
					<li>Design style combines modern elegance with functional comfort</li>
					<li>Create signature interiors for homes, boutiques, offices, restaurants and premium retail stores</li>
				</ul>
			</div>
		</div>
	</div>
);

export default AboutUs;
