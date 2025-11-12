"use client";

import React from "react";
import { motion } from "framer-motion";

const TechnologyPartners: React.FC = () => {
	return (
		<section className="py-20 bg-black text-white">
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Our Technology Partners
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl mx-auto">
						ClickBuy helps ambitious companies turn AI into a competitive advantage by making operations faster, smarter, and more resilient. By working with leading frontier model platforms, we ensure you have access to the most powerful and advanced AI capabilities available.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto items-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}>
					{[
						"OpenAI",
						"Anthropic",
						"Google AI",
						"AWS",
						"Azure",
						"Hugging Face",
					].map((partner, index) => (
						<div
							key={index}
							className="flex items-center justify-center p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-24">
							<span className="text-lg font-semibold text-slate-400">
								{partner}
							</span>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default TechnologyPartners;
