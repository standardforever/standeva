"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Shield, Cpu } from "lucide-react";

const whyCards = [
	{
		icon: Award,
		title: "25+ Years Expertise",
		subtitle: "Business Transformation",
		description: "True solutions come from experience, not just technology. With a legacy of over 25 years in change management and overhauling complex financial and ERP systems, we possess a profound understanding of your operational hurdles.",
		highlight: "Strategic AI Deployment"
	},
	{
		icon: TrendingUp,
		title: "ROI-Centric Partnership",
		subtitle: "Invest to Gain Model",
		description: "Our confidence in delivering concrete value is reflected in our unique approach that aligns our success with the quantifiable savings you achieve. We are invested in your positive outcomes.",
		highlight: "Symbiotic Relationship"
	},
	{
		icon: Cpu,
		title: "Advanced Agentic AI",
		subtitle: "Intelligent Automation",
		description: "We are experts in deploying Agentic AI—intelligent, autonomous agents capable of managing complex, multi-step workflows. Our AI agents function as a tireless digital workforce.",
		highlight: "24/7 Operations"
	},
	{
		icon: Shield,
		title: "Seamless Integration",
		subtitle: "Core System Compatibility",
		description: "Our deep-rooted knowledge of ERP and business systems allows us to create AI solutions that integrate flawlessly with your existing financial and HR platforms.",
		highlight: "Enhanced Technology Investments"
	}
];

const processSteps = [
	{
		title: "Idea Generation & Validation",
		description: "We help solidify your AI vision, validate its feasibility, and plot a roadmap."
	},
	{
		title: "Data Strategy",
		description: "We guide you in collecting, cleansing, and organizing the data that will fuel your AI systems."
	},
	{
		title: "Model Development",
		description: "Our team assists in designing and developing machine learning models specific to your needs."
	},
	{
		title: "Implementation",
		description: "We'll support you through the deployment of your intelligent solutions, ensuring seamless integration."
	},
	{
		title: "Ongoing Support",
		description: "Our commitment doesn&apos;t end at launch. We offer continuous support for optimization and scaling."
	}
];

const WhyClickbuy: React.FC = () => {
	return (
		<section
			id="why-clickbuy"
			className="py-20 bg-linear-to-br from-slate-900 via-blue-900/10 to-slate-900 text-white relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
			</div>

			<div className="container mx-auto px-6 relative z-10">
				{/* Header */}
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					{/* Tag */}
					<div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
						<span className="text-sm text-blue-400 font-medium uppercase tracking-wider">
							Why Clickbuy
						</span>
					</div>

					{/* Main Title */}
					<h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
						Deep Expertise in
						<span className="block bg-linear-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
							Business Transformation
						</span>
					</h2>

					<p className="text-xl text-slate-300 max-w-4xl mx-auto">
						With Clickbuy, you get more than a service provider; you get a partner invested in your success. Our agile approach means we adapt to your needs throughout the entire project lifecycle.
					</p>
				</motion.div>

				{/* Why Cards Grid */}
				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
					{whyCards.map((card, index) => {
						const Icon = card.icon;
						return (
							<motion.div
								key={index}
								className="group p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ 
									scale: 1.02,
									transition: { duration: 0.2 }
								}}>
								{/* Hover Glow */}
								<div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								
								{/* Icon */}
								<motion.div 
									className="w-16 h-16 bg-linear-to-r from-[#2563EB] to-[#7C3AED] rounded-2xl flex items-center justify-center mb-6 relative z-10"
									whileHover={{ 
										rotate: 360,
										scale: 1.1,
										transition: { duration: 0.6 }
									}}>
									<Icon size={32} className="text-white" />
								</motion.div>
								
								{/* Content */}
								<div className="relative z-10">
									<h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
										{card.title}
									</h3>
									<p className="text-sm text-blue-400 font-medium mb-4">
										{card.subtitle}
									</p>
									<p className="text-slate-400 leading-relaxed mb-4">
										{card.description}
									</p>
									<div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
										<span className="text-xs text-blue-400 font-medium">
											{card.highlight}
										</span>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Process Steps */}
				<motion.div
					className="max-w-5xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}>
					<h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
						Our AI Implementation Process
					</h3>
					
					<div className="grid md:grid-cols-5 gap-6">
						{processSteps.map((step, index) => (
							<motion.div
								key={index}
								className="text-center relative"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}>
								{/* Step Number */}
								<div className="w-12 h-12 bg-linear-to-r from-[#2563EB] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
									<span className="text-white font-bold">
										{index + 1}
									</span>
								</div>
								
								{/* Connector Line */}
								{index < processSteps.length - 1 && (
									<div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 -z-10" />
								)}
								
								<h4 className="font-semibold mb-3 text-lg">
									{step.title}
								</h4>
								<p className="text-slate-400 text-sm leading-relaxed">
									{step.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default WhyClickbuy;
