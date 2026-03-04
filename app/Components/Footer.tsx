import React from "react";
import Image from "next/image";

const socialLinks = [
	{ href: "https://wa.me/2349135913167", icon: "/whatsapp.svg", alt: "WhatsApp" },
	{ href: "https://instagram.com/Lumina__interiors", icon: "/instagram.svg", alt: "Instagram" },
	{ href: "https://tiktok.com/@luminainteriors", icon: "/tiktok.svg", alt: "TikTok" },
	{ href: "https://x.com/", icon: "/twitter.svg", alt: "X" },
];

const Footer = () => (
	<footer className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-6 gap-4"
		style={{ background: 'linear-gradient(90deg, #8AAFDC 3.1%, #DEDEA2 31.01%, #8AAFDC 58.06%)' }}>
		{/* Logo */}
		<div className="flex items-center">
			<div className="relative w-14 h-12">
				<Image src="/logo.png" fill alt="company logo" style={{ objectFit: 'contain' }} />
			</div>
		</div>
		{/* Copyright */}
		<div className="text-white text-sm md:text-base text-center order-3 md:order-2">
			Copyright © 2025 Lumina conexiones | All Rights Reserved
		</div>
		{/* Social Icons */}
		<div className="flex gap-4 items-center order-2 md:order-3">
			{socialLinks.map((link, idx) => (
				<a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
					<Image src={link.icon} width={24} height={24} alt={link.alt} />
				</a>
			))}
		</div>
	</footer>
);

export default Footer;
