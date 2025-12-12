"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Workflow, ClipboardCheck, Database, Gauge } from "lucide-react";

const items = [
	{
		icon: ClipboardCheck,
		title: "Admin and back-office processes",
	},
	{
		icon: Workflow,
		title: "Customer operations and service workflows",
	},
	{
		icon: Database,
		title: "Data entry, updates and digital paperwork",
	},
	{
		icon: Gauge,
		title: "Routine decision-making and rule-based tasks",
	},
	{
		icon: Workflow,
		title: "Any repetitive digital work that slows your team down",
	},
];

const WhatWeAutomate: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.12,
		triggerOnce: true,
	});

	return (
		<section
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.16),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-sky-200">
					what we automate
				</motion.div>

				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
					automation built for sme operations
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
					We specialise in automating the routine, repetitive and time-consuming
					tasks inside your SME, including:
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
					{items.map((item, index) => {
						const Icon = item.icon;
						return (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 12 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.5, delay: 0.32 + index * 0.05 }}
								className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 backdrop-blur-sm transition hover:border-sky-500/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-100">
									<Icon className="h-5 w-5" />
								</div>
								<span className="text-left text-sm font-medium text-slate-200 sm:text-base">
									{item.title}
								</span>
							</motion.div>
						);
					})}
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.35 }}
					className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
					If a task is high-volume, predictable or rule-driven, it&apos;s a strong
					candidate for automation.
				</motion.p>
			</div>
		</section>
	);
};

export default WhatWeAutomate;
