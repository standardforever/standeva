"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShoppingCart } from "lucide-react";

const solutions = [
	{
		title: "Strategic AI Consulting for Business Growth",
		description: "Our expert consultants help you identify opportunities, optimise performance, and ensure compliance for seamless AI adoption, transforming your business processes from the ground up.",
		icon: Sparkles,
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
	},
	{
		title: "Process Zero: Autonomous Product Sourcing",
		description: "An autonomous agent designed to automate product sourcing for sales plus platforms, enhancing efficiency and scalability.",
		icon: ShoppingCart,
		image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop",
	},
];

const CoreSolutions: React.FC = () => {
	return (
		<section id="core-solutions" className="py-20 bg-black text-white">
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Our Core Solutions
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl mx-auto">
						We build and implement intelligent solutions to solve
						your most complex operational challenges.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{solutions.map((solution, index) => {
						const Icon = solution.icon;
						return (
							<motion.div
								key={index}
								className="group relative bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.2,
								}}>
								<div className="relative h-48 overflow-hidden">
									<Image
										src={solution.image}
										alt={solution.title}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent" />
									<div className="absolute bottom-4 left-4 w-12 h-12 bg-linear-to-r from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center">
										<Icon size={24} />
									</div>
								</div>

								<div className="p-8">
									<h3 className="text-2xl font-bold mb-4">
										{solution.title}
									</h3>
									<p className="text-slate-400 mb-6 leading-relaxed">
										{solution.description}
									</p>
									<button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group">
										View Solution
										<ArrowRight
											size={16}
											className="group-hover:translate-x-1 transition-transform"
										/>
									</button>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default CoreSolutions;
