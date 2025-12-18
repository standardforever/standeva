"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Cog, Rocket, TrendingUp } from "lucide-react";

const offerings = [
	{
		icon: Lightbulb,
		title: "Conceptualisation",
		description:
			"We begin by understanding your business objectives and identifying areas where AI can drive operational improvements. Through collaborative workshops, we assess your current infrastructure, data readiness, and strategic priorities to define a clear AI roadmap.",
	},
	{
		icon: Cog,
		title: "AI Agent Integration",
		description:
			"We design and deploy intelligent AI agents tailored to your operational needs, whether it's automating customer inquiries, processing unstructured data, or managing complex workflows. Our solutions integrate seamlessly with your existing systems, delivering immediate efficiency gains.",
	},
	{
		icon: Rocket,
		title: "Pilot Programme & Scaling",
		description:
			"Before full deployment, we launch targeted pilot programmes to validate AI effectiveness in real-world conditions. Based on these results, we refine and scale the solution across your organisation, ensuring smooth adoption and sustained impact.",
	},
	{
		icon: TrendingUp,
		title: "Ongoing Enhancement & Optimisation",
		description:
			"AI is not a one-time implementation. We provide continuous monitoring, performance tuning, and iterative improvements to adapt to evolving business needs. Our team ensures your AI remains aligned with your strategic goals, delivering long-term ROI.",
	},
];

const WhatWeOffer: React.FC = () => {
	return (
		<section
			id="consulting-services"
			className="py-20 bg-linear-to-br from-slate-900 via-blue-900/10 to-slate-900 text-white">
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					{/* Tag */}
					<div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
						<span className="text-sm text-blue-400 font-medium uppercase tracking-wider">
							What We Offer
						</span>
					</div>

					{/* Main Title */}
					<h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
						Strategic AI Consulting
						<span className="block bg-linear-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
							for Business Growth
						</span>
					</h2>

					{/* Subtitle Shortened Version */}
					<p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
						Expert guidance to demystify AI and solve your core business challenges   from operational efficiency and customer experience to risk management.
					</p>

					{/* Alternative shorter subtitle if needed */}
					{/* <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
						Leveraging AI to enhance operational efficiency, customer experience, and risk management for measurable business growth.
					</p> */}
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{offerings.map((offering, index) => {
						const Icon = offering.icon;
						return (
							<motion.div
								key={index}
								className="group p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
								whileHover={{ 
									scale: 1.02,
									transition: { duration: 0.2 }
								}}>
								{/* Hover Glow Effect */}
								<div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								
								{/* Icon with enhanced styling */}
								<motion.div 
									className="w-16 h-16 bg-linear-to-r from-[#2563EB] to-[#7C3AED] rounded-2xl flex items-center justify-center mb-6 relative z-10"
									whileHover={{ 
										rotate: 360,
										scale: 1.1,
										transition: { duration: 0.6 }
									}}>
									<Icon size={32} className="text-white" />
								</motion.div>
								
								{/* Number indicator */}
								<div className="absolute top-8 right-8 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
									<span className="text-xs text-blue-400 font-bold">
										{String(index + 1).padStart(2, '0')}
									</span>
								</div>
								
								<h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-blue-400 transition-colors">
									{offering.title}
								</h3>
								
								<p className="text-slate-400 leading-relaxed relative z-10 text-sm">
									{offering.description}
								</p>

								{/* Learn more link */}
								<motion.div 
									className="flex items-center gap-2 mt-6 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
									initial={{ width: 0 }}
									whileHover={{ width: "auto" }}>
									<span className="text-sm font-medium">Learn more</span>
									<motion.div
										initial={{ x: 0 }}
										whileHover={{ x: 4 }}
										transition={{ duration: 0.2 }}>
										→
									</motion.div>
								</motion.div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default WhatWeOffer;
