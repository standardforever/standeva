"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA: React.FC = () => {
	return (
		<section className="py-24 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-slate-900 text-white relative overflow-hidden">
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

			<div className="container mx-auto px-6 relative z-10">
				<motion.div
					className="text-center max-w-4xl mx-auto"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight">
						Reach out to our AI consultants to learn how we can help your business.
					</h2>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="group px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold rounded-lg hover:opacity-90 transition inline-flex items-center justify-center gap-2">
							Contact Us
							<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
						</button>
						<button className="px-8 py-4 border-2 border-blue-500 text-white font-semibold rounded-lg hover:bg-blue-500/10 transition inline-flex items-center justify-center gap-2">
							View Our Work
							<ArrowRight size={20} />
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default FinalCTA;
