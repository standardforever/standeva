"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CTASection: React.FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.35,
		triggerOnce: true,
		rootMargin: "0px 0px -10% 0px",
	});
	return (
		<section
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.16),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center md:px-6">
				<p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-emerald-200">
					processzero ai
				</p>
				<h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.4rem]">
					ready to boost your team&apos;s efficiency?
				</h2>
				<p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
					explore how automation can reduce manual workload and
					elevate your team’s impact
				</p>

				<motion.div
					className="mt-8 flex gap-8"
					initial={{ opacity: 0, y: 12 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 0.3 }}>
					<motion.a
						href="/intro-call"
						className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/40 transition-colors duration-300 ease-out hover:from-slate-800 hover:to-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}>
						15 min intro call
					</motion.a>

					<motion.a
						href="/discovery-day"
						className="inline-flex items-center justify-center rounded-md bg-slate-800/90 px-7 py-3 text-sm font-semibold text-slate-100 shadow-md shadow-slate-900/30 transition-colors duration-300 ease-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}>
						discovery day
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
};

export default CTASection;
