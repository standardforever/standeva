"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Package, Shield, TrendingUp } from "lucide-react";

const approaches = [
	{
		icon: Zap,
		title: "Rapid Deployment Framework",
		description: "We move from concept to a functional proof of concept with a focus on speed, allowing you to see the potential impact in a short timeframe.",
	},
	{
		icon: Package,
		title: "End-to-End AI Delivery",
		description: "From data prep to deployment to monitoring – we handle it all.",
	},
	{
		icon: Shield,
		title: "Secure & Compliant Solutions",
		description: "We implement AI in a secure and scalable way, ensuring our solutions meet your specific business and security needs from the ground up.",
	},
	{
		icon: TrendingUp,
		title: "Proven ROI",
		description: "Dedicated case studies with measurable, quantifiable results.",
	},
];

const ApproachSection: React.FC = () => {
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
						Our Approach to AI Success
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl mx-auto">
						We blend strategic insight, advanced technology, and a commitment to excellence to drive transformative results for your business.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
					{approaches.map((approach, index) => {
						const Icon = approach.icon;
						return (
							<motion.div
								key={index}
								className="text-center"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}>
								<div className="relative mb-6 inline-block">
									<div className="w-24 h-24 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-2xl flex items-center justify-center mx-auto">
										<Icon size={36} />
									</div>
									<div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-2xl blur-xl opacity-50" />
								</div>
								<h3 className="text-xl font-bold mb-3">{approach.title}</h3>
								<p className="text-slate-400 leading-relaxed">
									{approach.description}
								</p>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					className="mt-16 relative rounded-2xl overflow-hidden border border-slate-700 max-w-4xl mx-auto"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}>
					<div className="relative h-64">
						<Image
							src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop"
							alt="Collaborative AI workflow visualization"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60" />
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ApproachSection;
