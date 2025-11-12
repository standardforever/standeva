"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutHero: React.FC = () => {
	return (
		<section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 text-white overflow-hidden pt-16">
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
							Transform Your Operations with{" "}
							<span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
								Tailored AI Solutions
							</span>
						</h1>
						<p className="text-xl text-slate-300 mb-8 leading-relaxed">
							Whether you need strategic AI consulting to revolutionise your business processes or a powerful autonomous agent to automate e-commerce sourcing, we provide enterprise-ready solutions built for impact.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<button className="px-8 py-3 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-medium rounded-lg hover:opacity-90 transition">
								AI Consultancy
							</button>
							<button className="px-8 py-3 border border-blue-500/50 text-white font-medium rounded-lg hover:bg-blue-500/10 transition">
								E-commerce Sourcing
							</button>
						</div>
					</motion.div>

					<motion.div
						className="relative overflow-hidden"
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="relative aspect-square rounded-2xl overflow-hidden border border-blue-500/20">
							<Image
								src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop"
								alt="Abstract AI neural network visualization"
								fill
								className="object-cover"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-purple-900/40" />
						</div>
						<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-2xl blur-3xl opacity-50" />
						<div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] rounded-2xl blur-3xl opacity-50" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutHero;
