"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
	{
		name: "OpenAI",
		description: "Leading GPT models and API solutions",
		category: "Language Models"
	},
	{
		name: "Anthropic",
		description: "Advanced Claude AI assistants",
		category: "AI Safety"
	},
	{
		name: "Google AI",
		description: "Gemini and machine learning platforms",
		category: "Cloud AI"
	},
	{
		name: "AWS",
		description: "Amazon Web Services AI suite",
		category: "Cloud Infrastructure"
	},
	{
		name: "Azure",
		description: "Microsoft's cloud AI services",
		category: "Enterprise AI"
	},
	{
		name: "Hugging Face",
		description: "Open source models and datasets",
		category: "ML Community"
	}
];

const TechnologyPartners: React.FC = () => {
	return (
		<section
			id="partners"
			className="py-20 bg-black text-white relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAzMCAwIEwgMCA2MCAwIDYwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

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
							Technology Partners
						</span>
					</div>

					{/* Main Title */}
					<h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
						Powered by Leading
						<span className="block bg-linear-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
							AI Platforms
						</span>
					</h2>

					{/* Subtitle */}
					<p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
						Process Zero helps ambitious companies turn AI into a competitive advantage by making operations faster, smarter, and more resilient. By working with leading frontier model platforms, we ensure you have access to the most powerful and advanced AI capabilities available.
					</p>
				</motion.div>

				{/* Partners Grid */}
				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}>
					{partners.map((partner, index) => (
						<motion.div
							key={index}
							className="group p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ 
								scale: 1.05,
								y: -5,
								transition: { duration: 0.3 }
							}}>
							{/* Hover Glow */}
							<div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							
							{/* Partner Logo Area */}
							<div className="flex items-center justify-center h-20 mb-6 relative z-10">
								<motion.div 
									className="w-20 h-20 bg-linear-to-r from-slate-700 to-slate-600 rounded-xl flex items-center justify-center border border-slate-600 group-hover:border-blue-500/50 transition-all duration-300"
									whileHover={{ 
										rotate: 360,
										transition: { duration: 0.6 }
									}}>
									<span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
										{partner.name.charAt(0)}
									</span>
								</motion.div>
							</div>
							
							{/* Content */}
							<div className="text-center relative z-10">
								<h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
									{partner.name}
								</h3>
								<p className="text-sm text-blue-400 font-medium mb-3">
									{partner.category}
								</p>
								<p className="text-slate-400 text-sm leading-relaxed">
									{partner.description}
								</p>
							</div>

							{/* Top Right Badge */}
							<div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
								<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom CTA */}
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}>
					<motion.button
						className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						Learn About Our Integration
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
							<path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default TechnologyPartners;
