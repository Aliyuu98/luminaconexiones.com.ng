import React from "react";

const services = [
	{
		icon: (
			<svg width="56" height="56" fill="none" stroke="#14183B" strokeWidth="3" viewBox="0 0 56 56"><path d="M10 46l8-8m20-20l8 8M38 10l8 8-28 28-8-8L38 10z" /></svg>
		),
		title: "Professional Design Team",
		desc: "Description of whatever the information is that will make you choose us now and always",
	},
	{
		icon: (
			<svg width="56" height="56" fill="none" stroke="#14183B" strokeWidth="3" viewBox="0 0 56 56"><circle cx="28" cy="28" r="12" /><path d="M28 16v12l8 4" /></svg>
		),
		title: "Fast Delivery Timeline",
		desc: "Description of whatever the information is that will make you choose us now and always",
	},
	{
		icon: (
			<svg width="56" height="56" fill="none" stroke="#14183B" strokeWidth="3" viewBox="0 0 56 56"><circle cx="28" cy="28" r="12" /><path d="M20 28l6 6 10-10" /></svg>
		),
		title: "High Quality Materials",
		desc: "Description of whatever the information is that will make you choose us now and always",
	},
	{
		icon: (
			<svg width="56" height="56" fill="none" stroke="#14183B" strokeWidth="3" viewBox="0 0 56 56"><ellipse cx="28" cy="44" rx="16" ry="4" /><ellipse cx="28" cy="28" rx="16" ry="16" /><ellipse cx="28" cy="28" rx="8" ry="8" /></svg>
		),
		title: "Affordable Pricing",
		desc: "Description of whatever the information is that will make you choose us now and always",
	},
];

const Service = () => (
	<div className="w-full flex flex-col items-center py-4 px-4 bg-white">
		<h2 className="text-3xl md:text-4xl font-bold text-center text-button-blue mb-2">Why Choose Us?</h2>
		<p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">See what Our Customers have to say about their Interior Design Transformation</p>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8 w-full max-w-5xl">
			{services.map((service, idx) => (
				<div key={idx} className="flex items-start gap-6">
					<div className="shrink-0">{service.icon}</div>
					<div>
						<h3 className="text-xl md:text-2xl font-bold text-black mb-2">{service.title}</h3>
						<p className="text-gray-500 text-base md:text-lg">{service.desc}</p>
					</div>
				</div>
			))}
		</div>
	</div>
);

export default Service;
