"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ConsultingHero: React.FC = () => {
	return (
		<section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
			<div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-purple-900/10 to-transparent" />
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

			<div className="container mx-auto px-6 relative z-10 pt-24 pb-12">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}>
						{/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
							<Award size={16} className="text-blue-400" />
							<span className="text-sm text-blue-400 font-medium">
								25+ Years of Transformation Expertise
							</span>
						</div> */}

						<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
							AI Consulting
							<span className="block bg-linear-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
								Services
							</span>
						</h1>

						<p className="text-xl text-slate-300 mb-8 leading-relaxed">
							Our team can help you navigate AI&apos;s
							complexities and harness its potential to address
							key business issues such as operational
							inefficiencies, customer experience, and risk
							management.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 mb-8">
							<button className="group px-8 py-4 bg-linear-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center gap-2">
								Schedule a Consultation
								<ArrowRight
									size={20}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</button>
							<button className="px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all">
								View Case Studies
							</button>
						</div>

						<div className="flex flex-wrap gap-6 pt-4 border-t border-slate-800">
							<div className="flex items-center gap-2">
								<CheckCircle2
									size={20}
									className="text-blue-400"
								/>
								<span className="text-sm text-slate-400">
									Proven ROI
								</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2
									size={20}
									className="text-blue-400"
								/>
								<span className="text-sm text-slate-400">
									End-to-End Support
								</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2
									size={20}
									className="text-blue-400"
								/>
								<span className="text-sm text-slate-400">
									Secure & Compliant
								</span>
							</div>
						</div>
					</motion.div>

					<motion.div
						className="relative overflow-hidden"
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="relative h-[600px] rounded-2xl overflow-hidden border border-slate-800">
							<Image
								src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
								alt="Professional AI consulting team strategizing"
								fill
								className="object-cover"
								priority
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

							{/* <div className="absolute bottom-8 left-8 right-8">
								<div className="grid grid-cols-3 gap-4">
									<div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
										<div className="text-3xl font-bold text-blue-400">
											50+
										</div>
										<div className="text-xs text-slate-400 mt-1">
											AI Projects
										</div>
									</div>
									<div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
										<div className="text-3xl font-bold text-purple-400">
											30+
										</div>
										<div className="text-xs text-slate-400 mt-1">
											Consultants
										</div>
									</div>
									<div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
										<div className="text-3xl font-bold text-green-400">
											80%
										</div>
										<div className="text-xs text-slate-400 mt-1">
											Time Saved
										</div>
									</div>
								</div>
							</div> */}
						</div>

						<div className="absolute -top-6 -right-6 w-40 h-40 bg-linear-to-r from-[#2563EB] to-[#7C3AED] rounded-full blur-3xl opacity-30" />
						<div className="absolute -bottom-6 -left-6 w-40 h-40 bg-linear-to-r from-[#7C3AED] to-[#2563EB] rounded-full blur-3xl opacity-30" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ConsultingHero;
