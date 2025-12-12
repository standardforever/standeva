"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { PhoneCall, FileText, Rocket, RefreshCw, Map } from "lucide-react";

const steps = [
	{
		number: "01",
		icon: PhoneCall,
		title: "intro call (free, 15 minutes)",
		description:
			"A short conversation to understand your goals and highlight where automation can quickly reduce workload or improve efficiency.",
		color: "from-sky-500 to-emerald-500",
	},
	{
		number: "02",
		icon: Map,
		title: "discovery day & ai audit (£100)",
		description:
			"A one-day deep dive into your business processes. We speak with key staff, review your workflows and identify high-value automation opportunities.",
		color: "from-emerald-500 to-teal-600",
	},
	{
		number: "03",
		icon: FileText,
		title: "ai audit report",
		description:
			"You receive a clear, structured plan outlining recommended automations, expected savings, implementation timelines, and project cost options.",
		color: "from-purple-500 to-indigo-600",
	},
	{
		number: "04",
		icon: Rocket,
		title: "implementation",
		description:
			"We build and deploy your automations using secure, open-source AI agents operating within your network.",
		color: "from-amber-500 to-orange-600",
	},
	{
		number: "05",
		icon: RefreshCw,
		title: "ongoing support & ai transformation",
		description:
			"As your organisation grows, we help refine, extend and scale your automations — guiding you on the journey to becoming an AI-first business.",
		color: "from-rose-500 to-pink-600",
	},
];

const HowWeWorkSection: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<section
			id="how-we-work"
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.15),transparent_50%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.15),transparent_50%)] opacity-70" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-emerald-200">
					our process
				</motion.div>

				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
					our 5-step ai automation framework
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
					Our proven 5-step methodology ensures successful AI automation
					implementation from discovery to scale.
				</motion.p>

				{/* Steps */}
				<div className="mt-16 space-y-8">
					{steps.map((step, index) => {
						const Icon = step.icon;
						const isEven = index % 2 === 0;

						return (
							<motion.div
								key={step.number}
								initial={{
									opacity: 0,
									x: isEven ? -40 : 40,
								}}
								animate={
									isInView ? { opacity: 1, x: 0 } : {}
								}
								transition={{
									duration: 0.6,
									delay: 0.3 + index * 0.1,
								}}
								className="relative">
								<div
									className={`flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] md:flex-row md:items-center ${
										isEven
											? "md:flex-row"
											: "md:flex-row-reverse"
									}`}>
									{/* Number and Icon */}
									<div className="flex items-center gap-6 md:w-1/3">
										<div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-slate-950/80 text-2xl font-bold text-slate-600">
											{step.number}
										</div>
										<div
											className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}>
											<Icon className="h-7 w-7 text-white" />
										</div>
									</div>

									{/* Content */}
									<div
										className={`flex-1 ${
											isEven
												? "md:text-left"
												: "md:text-right"
										} text-left`}>
										<h3 className="text-xl font-semibold text-slate-100 sm:text-2xl">
											{step.title}
										</h3>
										<p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
											{step.description}
										</p>
									</div>
								</div>

								{/* Connector line */}
								{index < steps.length - 1 && (
									<div className="mx-auto my-4 h-12 w-0.5 bg-gradient-to-b from-sky-500/50 to-emerald-500/50" />
								)}
							</motion.div>
						);
					})}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="mt-16 rounded-2xl border border-sky-500/40 bg-sky-500/5 p-8">
					<p className="text-lg font-semibold text-slate-100">
						From discovery to continuous improvement
					</p>
					<p className="mt-2 text-sm text-slate-300">
						Our methodology ensures successful implementation and
						long-term value creation.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default HowWeWorkSection;
