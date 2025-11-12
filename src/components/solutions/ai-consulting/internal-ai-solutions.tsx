"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const solutions = [
	{
		category: "ERP AI Agent",
		title: "Automated ERP Purchase Ledger Processing",
		description:
			"Manual purchase ledger workflows are often slow and prone to error, leading to delayed payments and administrative burdens. Our bespoke AI agents are designed to automate this entire process. By integrating with your existing ERP system, our solution can streamline invoice processing, eliminate manual errors, and significantly accelerate payment cycles.",
		image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
		benefits: [
			"Automate invoice data extraction and validation",
			"Reduce manual processing time by up to 80%",
			"Ensure seamless integration with your existing ERP system",
			"Improve accuracy and strengthen supplier relationships",
		],
		imagePosition: "left" as const,
	},
	{
		category: "Internal AI Advisor",
		title: "ERP Financial Planning & Analysis",
		description:
			"Enhance Financial Planning with AI-Driven Insights - Financial planning often requires sifting through vast datasets manually. Our AI solutions can analyse your ERP data to uncover hidden trends, forecast future performance, and empower your team with the strategic insights needed for data-driven decision-making.",
		image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
		benefits: [
			"Unlock predictive financial forecasting and trend analysis",
			"Identify key performance drivers and potential risks",
			"Automate the generation of insightful management reports",
			"Strengthen strategic planning and decision-making",
		],
		imagePosition: "right" as const,
	},
	{
		category: "HR Task Automation",
		title: "Automate Repetitive HR Tasks and Mitigate Risks",
		description:
			"HR departments are often burdened with repetitive administrative work. We can deploy intelligent automation and risk assessment tools to handle routine processes, from employee onboarding to compliance checks, freeing up your HR professionals to focus on strategic, high-value initiatives.",
		image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
		benefits: [
			"Streamline employee onboarding and offboarding workflows",
			"Utilise AI for proactive risk assessment and compliance",
			"Significantly reduce the administrative workload for HR teams",
			"Improve data accuracy, security, and process consistency",
		],
		imagePosition: "left" as const,
	},
	{
		category: "HR Escalation Management",
		title: "Implement Proactive HR Escalation and Alert Systems",
		description:
			"We built DeVoice, which is a AI based voice agent designed specifically for restaurants and other businesses, integrating state-of-the-art voice recognition and natural language understanding.",
		image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1000&auto=format&fit=crop",
		benefits: [
			"Early detection of potential workplace conflicts or issues",
			"Automated alert routing and escalation workflows",
			"Improved response times for critical HR incidents",
			"Enhanced employee relations and proactive support",
		],
		imagePosition: "right" as const,
	},
];

const InternalAISolutions: React.FC = () => {
	return (
		<section className="py-20 bg-black text-white">
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Our AI-Powered Featured Work
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl mx-auto">
						We build intelligent automation solutions that solve
						real business problems and deliver measurable impact
					</p>
				</motion.div>
				{solutions.map((solution, index) => (
					<motion.div
						key={index}
						className={`grid lg:grid-cols-2 gap-12 items-center mb-32 last:mb-0 ${
							solution.imagePosition === "left"
								? "lg:flex-row-reverse"
								: ""
						}`}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						<div
							className={
								solution.imagePosition === "left"
									? "lg:order-2"
									: ""
							}>
							<div className="text-sm text-blue-400 mb-4 uppercase tracking-wider">
								{solution.category}
							</div>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
								{solution.title}
							</h2>
							<div className="w-20 h-1 bg-linear-to-r from-[#2563EB] to-[#7C3AED] mb-6" />
							<p className="text-lg text-slate-300 mb-6 leading-relaxed">
								{solution.description}
							</p>
							<button className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors mb-8">
								Read more
								<ArrowRight
									size={18}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</button>
							<ul className="space-y-3">
								{solution.benefits.map((benefit, i) => (
									<li
										key={i}
										className="flex items-start gap-3">
										<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
										<span className="text-slate-400">
											{benefit}
										</span>
									</li>
								))}
							</ul>
						</div>

						<div
							className={
								solution.imagePosition === "left"
									? "lg:order-1"
									: ""
							}>
							<div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-700">
								<Image
									src={solution.image}
									alt={solution.title}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-linear-to-tr from-blue-900/20 to-transparent" />
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default InternalAISolutions;
