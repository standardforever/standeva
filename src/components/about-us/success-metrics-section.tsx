"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CheckCircle2 } from "lucide-react";

const metrics = [
	{
		title: "up to 90% reduction in repetitive task costs",
		description: "dramatic decrease in manual workload and overhead",
	},
	{
		title: "faster, more consistent, error-free workflows",
		description: "eliminate human error and process variability",
	},
	{
		title: "reduction in operational bottlenecks",
		description: "smooth, uninterrupted process flows",
	},
	{
		title: "higher output without hiring additional staff",
		description: "scale operations without increasing headcount",
	},
	{
		title: "stronger data integrity and compliance",
		description: "automated audit trails and regulatory adherence",
	},
	{
		title: "enhanced employee satisfaction and productivity",
		description: "free teams from soul-crushing repetitive work",
	},
	{
		title: "a more agile, scalable, future-proof organisation",
		description: "built to adapt and grow with your business",
	},
];

const SuccessMetricsSection: FC = () => {
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
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(16,185,129,0.2),transparent_60%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-emerald-200">
					client results
				</motion.div>

				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
					what success looks like
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
					These are the tangible outcomes our clients achieve through AI
					automation with Process Zero.
				</motion.p>

				{/* Metrics grid */}
				<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{metrics.map((metric, index) => (
						<motion.article
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{
								duration: 0.5,
								delay: 0.3 + index * 0.08,
							}}
							className="group flex flex-col items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
							{/* Check icon */}
							<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30 transition-transform duration-300 group-hover:scale-110">
								<CheckCircle2 className="h-5 w-5 text-white" />
							</div>

							{/* Title */}
							<h3 className="text-base font-semibold leading-tight text-slate-100 sm:text-lg">
								{metric.title}
							</h3>

							{/* Description */}
							<p className="text-sm leading-relaxed text-slate-400">
								{metric.description}
							</p>

							{/* Decorative bar */}
							<div className="mt-auto h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-60 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
						</motion.article>
					))}
				</div>

				{/* Bottom highlight */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.9 }}
					className="mt-16 rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-emerald-500/10 p-8">
					<div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
						<div className="text-center md:text-left">
							<p className="text-lg font-semibold text-slate-100">
								ready to transform your operations?
							</p>
							<p className="mt-1 text-sm text-slate-300">
								Join the organisations already achieving these
								results.
							</p>
						</div>
							<a
								href="#partnership"
								className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:opacity-90">
							get started
							</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default SuccessMetricsSection;
