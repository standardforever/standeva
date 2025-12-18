"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Zap, ArrowRight } from "lucide-react";

const ConsultingIntro: React.FC = () => {
	return (
		<section className="relative py-32 bg-linear-to-br from-slate-900 via-blue-900/20 to-purple-900/20 text-white overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
				<div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
			</div>

			{/* Grid Pattern Overlay */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMjAgNDAgTSAwIDIwIEwgNDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-6xl mx-auto">
					{/* Top Icons Row */}
					<motion.div 
						className="flex justify-center gap-8 mb-12"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}>
						<motion.div
							className="w-16 h-16 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30 backdrop-blur-sm"
							whileHover={{ scale: 1.1, rotate: 5 }}
							transition={{ duration: 0.2 }}>
							<Brain size={32} className="text-blue-400" />
						</motion.div>
						<motion.div
							className="w-16 h-16 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30 backdrop-blur-sm"
							whileHover={{ scale: 1.1, rotate: -5 }}
							transition={{ duration: 0.2 }}>
							<Cpu size={32} className="text-purple-400" />
						</motion.div>
						<motion.div
							className="w-16 h-16 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30 backdrop-blur-sm"
							whileHover={{ scale: 1.1, rotate: 5 }}
							transition={{ duration: 0.2 }}>
							<Zap size={32} className="text-cyan-400" />
						</motion.div>
					</motion.div>

					{/* Main Content */}
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						<h2 className="text-sm text-blue-400 mb-6 uppercase tracking-wider font-semibold">
							Our Approach
						</h2>
						
						<div className="relative inline-block mb-8">
							<motion.div
								className="absolute -inset-4 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"
								animate={{ 
									rotate: [0, 1, -1, 0],
									scale: [1, 1.02, 1]
								}}
								transition={{ 
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut"
								}}
							/>
							<h3 className="relative text-4xl md:text-6xl font-bold leading-tight">
								From Concept to
								<span className="block bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
									AI Excellence
								</span>
							</h3>
						</div>

						<motion.p 
							className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-12"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.4 }}>
							At Process Zero, we guide our clients through every phase of their AI journey, from initial conceptualisation to full-scale implementation and ongoing enhancement. Our approach ensures AI is not just deployed but strategically embedded to deliver measurable, long-term value.
						</motion.p>

						{/* Stats Pills */}
						<motion.div 
							className="flex flex-wrap justify-center gap-6 mb-12"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.6 }}>
							{[
								{ label: "AI Strategy", value: "100%" },
								{ label: "Implementation", value: "End-to-End" },
								{ label: "ROI Focus", value: "Guaranteed" }
							].map((stat, index) => (
								<motion.div
									key={index}
									className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full"
									whileHover={{ 
										scale: 1.05,
										borderColor: "rgba(59, 130, 246, 0.5)",
										backgroundColor: "rgba(59, 130, 246, 0.1)"
									}}
									transition={{ duration: 0.2 }}>
									<span className="text-blue-400 font-bold">{stat.value}</span>
									<span className="text-slate-400 ml-2">{stat.label}</span>
								</motion.div>
							))}
						</motion.div>

						{/* CTA Button */}
						<motion.button
							className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.8 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							Discover Our Process
							<ArrowRight 
								size={20} 
								className="group-hover:translate-x-1 transition-transform" 
							/>
						</motion.button>
					</motion.div>

					{/* Bottom Decorative Line */}
					<motion.div
						className="max-w-2xl mx-auto"
						initial={{ width: 0 }}
						whileInView={{ width: "100%" }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1 }}>
						<div className="h-px bg-linear-to-r from-transparent via-blue-500 to-transparent" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ConsultingIntro;
