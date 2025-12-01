"use client";

import type { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
	"Free initial consultation",
	"No obligation process audit",
	"Clear ROI estimation",
	"Transparent pricing model",
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
					Start with a free AI Process Audit to discover where automation
					can deliver the greatest impact for your organisation.
				</motion.p>

				{/* Benefits grid */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
					{benefits.map((benefit, index) => (
						<div
							key={index}
							className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-6 py-4 backdrop-blur-sm">
							<CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400" />
							<span className="text-sm font-medium text-slate-200">
								{benefit}
							</span>
						</div>
					))}
				</motion.div>

				{/* CTA buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-12 flex flex-col items-center gap-6">
					<motion.a
						href="#"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(56,189,248,0.4)] transition hover:shadow-[0_0_60px_rgba(56,189,248,0.6)]">
						Book Your Free AI Audit
						<Sparkles className="h-5 w-5" />
					</motion.a>

					<div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
						<Link
							href="/about-us"
							className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-slate-100">
							Learn about our company
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
						<Link
							href="/#pricing"
							className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-slate-100">
							View full pricing details
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
					</div>

					<p className="text-xs text-slate-400">
						Free consultation • No credit card required • UK
						businesses only
					</p>
				</motion.div>

				{/* Stats highlight */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
					<div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-8 backdrop-blur-sm">
						<div className="text-4xl font-bold text-sky-400">90%</div>
						<div className="mt-2 text-center text-sm font-medium text-slate-300">
							Reduction in repetitive costs
						</div>
					</div>
					<div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-8 backdrop-blur-sm">
						<div className="text-4xl font-bold text-emerald-400">
							33%
						</div>
						<div className="mt-2 text-center text-sm font-medium text-slate-300">
							Of savings pricing model
						</div>
					</div>
					<div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-8 backdrop-blur-sm">
						<div className="text-4xl font-bold text-purple-400">
							100%
						</div>
						<div className="mt-2 text-center text-sm font-medium text-slate-300">
							Data privacy & control
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ServicesCTA;
