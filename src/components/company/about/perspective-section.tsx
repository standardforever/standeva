"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const perspectives = [
	{
		title: "Agentic AI for Enterprise",
		image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
		tags: ["AI Agents", "Artificial Intelligence"],
		description: "How autonomous AI agents are transforming enterprise operations and enabling intelligent automation at scale.",
	},
	{
		title: "AI in Commercial Real Estate: 10 Applications Turning Data Into Growth",
		image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
		tags: ["Artificial Intelligence", "Generative AI"],
		description: "Exploring how AI is revolutionizing commercial real estate through data-driven insights and automation.",
	},
	{
		title: "AI Voice Agent Use Cases: Powerful Applications Across Industries",
		image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop",
		tags: ["AI Agents", "Artificial Intelligence"],
		description: "Discovering the transformative potential of AI voice agents across various business sectors.",
	},
];

const PerspectiveSection: React.FC = () => {
	return (
		<section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						The AI Perspective
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl mx-auto">
						Our thought-leadership insights on AI and innovation
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{perspectives.map((article, index) => (
						<motion.div
							key={index}
							className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.15 }}>
							<div className="relative h-48 overflow-hidden">
								<Image
									src={article.image}
									alt={article.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
							</div>

							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{article.tags.map((tag, tagIndex) => (
										<span
											key={tagIndex}
											className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
									{article.title}
								</h3>
								<p className="text-slate-400 text-sm mb-4 leading-relaxed">
									{article.description}
								</p>

								<button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors group">
									Read More
									<ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
								</button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PerspectiveSection;
