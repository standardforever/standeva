"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TrendingUp, Zap, Lock, Code, Layers } from "lucide-react";

const differentiators = [
	{
		icon: Lock,
		title: "your data stays in your network",
		subtitle: "total control",
		description:
			"No external AI models or third-party platforms. Your data and workflows stay inside your environment with full oversight.",
		highlight: "in-network only",
	},
	{
		icon: Zap,
		title: "you fully own your ai agents",
		subtitle: "open-source by default",
		description:
			"Everything is built with open-source tooling   no vendor lock-in, no hidden licensing, and complete transparency.",
		highlight: "open-source & auditable",
	},
	{
		icon: TrendingUp,
		title: "simple, fair pricing",
		subtitle: "no surprises",
		description:
			"No ongoing platform fees or hidden costs. Solutions are priced for strong, recurring ROI with transparent payment options.",
		highlight: "transparent costs",
	},
	{
		icon: Code,
		title: "real impact for smes",
		subtitle: "outcomes that matter",
		description:
			"Our automations often reduce repetitive workload costs by up to 90%, freeing teams to focus on growth and customers.",
		highlight: "up to 90% reduction",
	},
	{
		icon: Layers,
		title: "end-to-end delivery",
		subtitle: "from strategy to optimisation",
		description:
			"We support you through the entire journey   from strategy and build to deployment and ongoing optimisation.",
		highlight: "strategy → build → optimise",
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
					className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-sky-200">
					our advantage
				</motion.div>

				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
					why processzero is different
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
					Five principles that keep your data safe, your AI transparent, and
					your ROI clear.
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
								<div className="mt-4 text-xs font-semibold tracking-wider text-sky-400">
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
