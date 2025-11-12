"use client";

import React from "react";
import { motion } from "framer-motion";

const ConsultingIntro: React.FC = () => {
	return (
		<section className="py-20 bg-black text-white">
			<div className="container mx-auto px-6">
				<motion.div
					className="max-w-5xl mx-auto text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
						At Standeva, we guide our clients through every phase of their AI journey, from initial conceptualisation to full-scale implementation and ongoing enhancement. Our approach ensures AI is not just deployed but strategically embedded to deliver measurable, long-term value.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default ConsultingIntro;
