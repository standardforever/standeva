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
		<section className="py-20 bg-linear-to-br from-slate-900 via-blue-900/10 to-slate-900 text-white">
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						What We Offer
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl mx-auto">
						Comprehensive AI consulting services to transform your
						business operations
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{offerings.map((offering, index) => {
						const Icon = offering.icon;
						return (
							<motion.div
								key={index}
								className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}>
								<div className="w-14 h-14 bg-linear-to-r from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center mb-6">
									<Icon size={28} />
								</div>
								<h3 className="text-2xl font-bold mb-4">
									{offering.title}
								</h3>
								<p className="text-slate-400 leading-relaxed">
									{offering.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default WhatWeOffer;
