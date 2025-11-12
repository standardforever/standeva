"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection: React.FC = () => {
	return (
		<section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

			<div className="container mx-auto px-6 relative z-10">
				<motion.div
					className="text-center max-w-3xl mx-auto"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-4xl md:text-5xl font-bold mb-8">
						Book a Strategy Call to Make Your Workflows AI-Powered.
					</h2>
					<button className="group px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 inline-flex items-center gap-3 text-lg">
						Schedule A Call
						<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default CTASection;
