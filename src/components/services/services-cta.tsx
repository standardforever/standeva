"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Sparkles, CheckCircle2 } from "lucide-react";

const startSteps = [
	"Free 15-Min Introductory Call",
	"£100 Discovery Day & AI Audit",
];

const actsReasons = [
	"Aligned strategy before anything is built",
	"Clear and validated processes",
	"Securely built and deployed agents",
	"Continuous support and improvement",
];

const ServicesCTA: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<section
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-32">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.25),transparent_50%),radial-gradient(ellipse_at_center,_rgba(16,185,129,0.25),transparent_70%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-sky-200">
					<Sparkles className="h-3.5 w-3.5" />
					Get Started
				</motion.div>

				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
					Ready to Transform{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-purple-400">
						Your Operations?
					</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
					It gives you clarity, structure, and a predictable pathway from
					first conversation to fully automated operations.
				</motion.p>

				{/* Start steps */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
					{startSteps.map((step, index) => (
						<div
							key={index}
							className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-6 py-4 backdrop-blur-sm">
							<CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400" />
							<span className="text-sm font-semibold text-slate-100">
								{step}
							</span>
						</div>
					))}
				</motion.div>

				{/* Why ACTS Works */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.35 }}
					className="mx-auto mt-12">
					<h3 className="text-xl font-semibold text-slate-100 sm:text-2xl">
						Why ACTS Works
					</h3>
					<p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
						ACTS keeps you safe from hype, misalignment and wasted investment by ensuring:
					</p>
					<div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
						{actsReasons.map((reason, index) => (
							<div
								key={index}
								className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-6 py-4 backdrop-blur-sm">
								<CheckCircle2 className="h-5 w-5 flex-shrink-0 text-sky-400" />
								<span className="text-sm font-medium text-slate-200">
									{reason}
								</span>
							</div>
						))}
					</div>
				</motion.div>

				{/* CTA buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-12 flex flex-col items-center gap-6">
					<div className="text-center">
						<h4 className="text-lg font-semibold text-slate-100 sm:text-xl">
							Ready to Begin?
						</h4>
						<p className="mt-2 text-sm text-slate-400 sm:text-base">
							Start with <span className="font-semibold text-sky-400">A – Align</span>
						</p>
						<p className="mt-1 text-xs text-slate-500 sm:text-sm">
							Book your 15-Minute Introductory Call to begin the alignment stage.
						</p>
					</div>
					<motion.a
						href="/intro-call"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-colors duration-300 ease-out hover:from-slate-800 hover:to-slate-800 hover:shadow-[0_0_60px_rgba(56,189,248,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
						Book Intro Call
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
};

export default ServicesCTA;
