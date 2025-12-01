"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { DollarSign, TrendingUp, Shield, CheckCircle2 } from "lucide-react";

const ServicePricingAdvantage: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<section
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.2),transparent_60%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 md:px-6">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
					<DollarSign className="h-3.5 w-3.5" />
					Pricing Advantage
				</motion.div>

				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
					Implementation Pricing Advantage
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
					Unlike traditional agencies who charge large upfront build fees,
					we operate on a results-based pricing model.
				</motion.p>

				{/* Main pricing card */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.7, delay: 0.3 }}
					className="mt-12 overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-purple-500/10 shadow-[0_0_60px_rgba(16,185,129,0.2)] backdrop-blur-sm">
					<div className="p-8 md:p-12">
						{/* Pricing headline */}
						<div className="flex flex-col items-center text-center">
							<div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200">
								<Shield className="h-3.5 w-3.5" />
								Zero Risk Model
							</div>

							<div className="mt-8 flex items-baseline justify-center gap-3">
								<span className="text-6xl font-bold text-emerald-400 sm:text-7xl md:text-8xl">
									33%
								</span>
								<div className="text-left">
									<div className="text-lg font-semibold text-slate-200 sm:text-xl">
										of first year savings
									</div>
									<div className="text-sm text-slate-400">
										only when delivered
									</div>
								</div>
							</div>

							<p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
								You only pay 33% of the first year&apos;s recurring
								savings created by the automation we implement.
								<span className="block mt-2 font-semibold text-emerald-200">
									A true win-win — you don&apos;t pay for development
									unless it delivers measurable value.
								</span>
							</p>
						</div>

						{/* Comparison grid */}
						<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
							{/* Traditional model */}
							<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400">
										✕
									</div>
									<h3 className="text-lg font-semibold text-slate-200">
										Traditional Agencies
									</h3>
								</div>
								<ul className="mt-6 space-y-3">
									<li className="flex items-start gap-2 text-sm text-slate-400">
										<span className="mt-1">•</span>
										<span>Large upfront project fees</span>
									</li>
									<li className="flex items-start gap-2 text-sm text-slate-400">
										<span className="mt-1">•</span>
										<span>Pay regardless of outcome</span>
									</li>
									<li className="flex items-start gap-2 text-sm text-slate-400">
										<span className="mt-1">•</span>
										<span>High financial risk</span>
									</li>
									<li className="flex items-start gap-2 text-sm text-slate-400">
										<span className="mt-1">•</span>
										<span>Misaligned incentives</span>
									</li>
								</ul>
							</div>

							{/* ProcessZero model */}
							<div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-6">
								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30">
										<TrendingUp className="h-5 w-5" />
									</div>
									<h3 className="text-lg font-semibold text-emerald-200">
										ProcessZero Model
									</h3>
								</div>
								<ul className="mt-6 space-y-3">
									<li className="flex items-start gap-2 text-sm text-slate-300">
										<CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400 mt-0.5" />
										<span>No upfront build costs</span>
									</li>
									<li className="flex items-start gap-2 text-sm text-slate-300">
										<CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400 mt-0.5" />
										<span>
											Pay only from achieved savings
										</span>
									</li>
									<li className="flex items-start gap-2 text-sm text-slate-300">
										<CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400 mt-0.5" />
										<span>Zero financial risk</span>
									</li>
									<li className="flex items-start gap-2 text-sm text-slate-300">
										<CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400 mt-0.5" />
										<span>Perfectly aligned incentives</span>
									</li>
								</ul>
							</div>
						</div>

						{/* Important note */}
						<div className="mt-8 rounded-2xl border border-sky-500/30 bg-sky-500/5 p-6">
							<p className="text-sm font-medium leading-relaxed text-sky-200">
								<span className="font-bold">Important:</span>{" "}
								Strategy, support, audits, and advisory are billed
								separately — only the build phase uses this
								savings-based model. This ensures transparency and
								lets you scale your AI capability sustainably.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ServicePricingAdvantage;
