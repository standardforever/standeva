"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TrendingUp, Zap, Lock, Code, Layers } from "lucide-react";

const differentiators = [
	{
		icon: TrendingUp,
		title: "Results-First Commercial Model",
		subtitle: "A True Win-Win",
		description:
			"Unlike traditional consultancies charging high upfront fees, we operate on a savings-linked pricing model. We only bill 33% of the first year's annual recurring saving achieved. No savings = no cost.",
		highlight: "33% of Year 1 Savings Only",
	},
	{
		icon: Zap,
		title: "Up to 90% Reduction in Costs",
		subtitle: "Dramatic Impact",
		description:
			"Our AI automations are designed to drastically reduce manual workload, processing times, and operational overheads — often delivering up to 90% reduction in repetitive task costs.",
		highlight: "Up to 90% Cost Reduction",
	},
	{
		icon: Lock,
		title: "Secure, Closed-Loop Architecture",
		subtitle: "Complete Privacy",
		description:
			"All your automations are built inside your own network — ensuring full data privacy, GDPR compliance, and zero exposure to external AI platforms.",
		highlight: "100% On-Premise",
	},
	{
		icon: Code,
		title: "Open-Source, Fully Auditable",
		subtitle: "Complete Transparency",
		description:
			"Everything we build is transparent, inspectable, and owned by your organisation. No proprietary black boxes. No vendor lock-in.",
		highlight: "Open-Source & Auditable",
	},
	{
		icon: Layers,
		title: "Enterprise Standards + SME Flexibility",
		subtitle: "Best of Both Worlds",
		description:
			"You get the benefit of enterprise automation expertise without the complexity, cost, or lock-in. Built for mid-market organisations.",
		highlight: "Enterprise Quality, SME Speed",
	},
];

const WhatMakesUsDifferent: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<section
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.12),transparent_50%)] opacity-70" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-sky-200">
					Our Advantage
				</motion.div>

				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
					WHAT MAKES US DIFFERENT
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
					Five key differentiators that set ProcessZero apart from
					traditional automation agencies.
				</motion.p>

				{/* Differentiators grid */}
				<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{differentiators.map((item, index) => {
						const Icon = item.icon;
						return (
							<motion.article
								key={item.title}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={
									isInView ? { opacity: 1, scale: 1 } : {}
								}
								transition={{
									duration: 0.5,
									delay: 0.3 + index * 0.1,
								}}
								className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-8 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]">
								{/* Icon */}
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 transition-transform duration-300 group-hover:scale-110">
									<Icon className="h-6 w-6 text-white" />
								</div>

								{/* Subtitle */}
								<div className="mt-4 text-xs font-semibold uppercase tracking-wider text-sky-400">
									{item.subtitle}
								</div>

								{/* Title */}
								<h3 className="mt-2 text-lg font-semibold leading-tight text-slate-100">
									{item.title}
								</h3>

								{/* Description */}
								<p className="mt-3 text-sm leading-relaxed text-slate-300">
									{item.description}
								</p>

								{/* Highlight badge */}
								<div className="mt-6 inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200">
									{item.highlight}
								</div>

								{/* Decorative corner accent */}
								<div className="absolute right-8 top-8 h-16 w-16 rounded-full bg-gradient-to-br from-sky-500/20 to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default WhatMakesUsDifferent;
