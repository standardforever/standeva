"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Eye, Brain, ArrowRight } from "lucide-react";

const solutions = [
	{
		icon: Bot,
		title: "Agentic AI Development",
		description: "We develop autonomous AI assistants that act as dependable digital teammates, not just tools. By taking on repetitive and routine work, they minimize human error, reduce delays, and free up your teams for higher-level tasks. Whether streamlining scheduling, approvals, or process management, our AI assistants keep operations running smoothly, increasing accuracy, speed, and overall productivity across the organization.",
	},
	{
		icon: Eye,
		title: "Computer Vision Solutions",
		description: "We apply computer vision to your most complex operational challenges, turning images and video into actionable insights. From automated inspections and quality checks to valuations and property assessments, our solutions improve accuracy while saving time and cost. By embedding these capabilities into your workflows, we help you reduce waste, minimize human error, and scale operations with confidence and precision.",
	},
	{
		icon: Brain,
		title: "Machine Learning Solutions",
		description: "We partner with you to design, train, and optimize machine learning models that solve business challenges. From recommendation engines to fraud detection, our ML solutions are tailored to your data and objectives. By combining advanced techniques with rigorous evaluation, we deliver models that are accurate, reliable, and aligned with measurable business outcomes.",
	},
];

const FullStackSection: React.FC = () => {
	return (
		<section
			id="capabilities"
			className="py-20 bg-linear-to-br from-slate-900 via-blue-900/10 to-slate-900 text-white">
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-4xl md:text-5xl font-bold mb-8">
						Full Stack AI Solutions, Built for Impact
					</h2>
					<p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
						We help growing companies design and scale AI solutions
						that deliver measurable impact. From preparing data to
						deploying production-ready systems, we focus on
						accelerating results, protecting operations, and driving
						ROI. Our approach blends strategy, engineering, and
						compliance so your AI evolves with your business, not
						against it.
					</p>
					<button className="px-8 py-3 bg-linear-to-r from-[#2563EB] to-[#7C3AED] text-white font-medium rounded-lg hover:opacity-90 transition inline-flex items-center gap-2">
						Schedule A Call
						<ArrowRight size={18} />
					</button>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
					{solutions.map((solution, index) => {
						const Icon = solution.icon;
						return (
							<motion.div
								key={index}
								className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-300"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.15,
								}}>
								<div className="w-14 h-14 bg-linear-to-r from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
									<Icon size={24} />
								</div>
								<h3 className="text-xl font-bold mb-3 flex items-center gap-2">
									{solution.title}
									<ArrowRight
										size={16}
										className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
									/>
								</h3>
								<p className="text-slate-400 text-sm leading-relaxed">
									{solution.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FullStackSection;
