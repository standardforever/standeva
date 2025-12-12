"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, Eye, Handshake, DollarSign, Settings } from "lucide-react";

const values = [
	{
		icon: Shield,
		title: "security first",
		description:
			"Your data never leaves your environment. All automation runs as a closed-loop, on-prem system, using open-source components you fully own.",
		color: "from-sky-500 to-blue-600",
		borderColor: "border-sky-500/40",
		bgColor: "bg-sky-500/10",
	},
	{
		icon: Eye,
		title: "transparency & trust",
		description:
			"No black boxes. No vague promises. No data sharing with frontier models. Everything we build is visible and auditable.",
		color: "from-emerald-500 to-teal-600",
		borderColor: "border-emerald-500/40",
		bgColor: "bg-emerald-500/10",
	},
	{
		icon: Handshake,
		title: "partnership over projects",
		description:
			"We work as your long-term AI Customer Success Team, not just a delivery vendor. Your success is our success.",
		color: "from-purple-500 to-indigo-600",
		borderColor: "border-purple-500/40",
		bgColor: "bg-purple-500/10",
	},
	{
		icon: DollarSign,
		title: "value before fees",
		description:
			"Our pricing model is based purely on the savings we help you achieve. You only pay when automation delivers measurable results.",
		color: "from-amber-500 to-orange-600",
		borderColor: "border-amber-500/40",
		bgColor: "bg-amber-500/10",
	},
	{
		icon: Settings,
		title: "ethical, controlled ai",
		description:
			"Your systems operate within clear rules, safeguards, and governance frameworks. Full control, full accountability.",
		color: "from-rose-500 to-pink-600",
		borderColor: "border-rose-500/40",
		bgColor: "bg-rose-500/10",
	},
];

const ValuesSection: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<section
			id="values"
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.15),transparent_60%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-purple-200">
					what drives us
				</motion.div>

				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
					our values & principles
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
					These five principles guide every decision we make and every
					solution we build for our clients.
				</motion.p>

				{/* Values grid */}
				<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
					{values.map((value, index) => {
						const Icon = value.icon;
						return (
							<motion.article
								key={value.title}
								initial={{ opacity: 0, y: 30 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{
									duration: 0.6,
									delay: 0.3 + index * 0.1,
								}}
								className={`group flex flex-col overflow-hidden rounded-2xl border ${value.borderColor} bg-slate-900/60 p-8 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]`}>
								{/* Icon */}
								<div
									className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${value.color} shadow-lg`}>
									<Icon className="h-7 w-7 text-white" />
								</div>

								{/* Title */}
								<h3 className="mt-6 text-xl font-semibold text-slate-100 sm:text-2xl">
									{value.title}
								</h3>

								{/* Description */}
								<p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
									{value.description}
								</p>

								{/* Decorative element */}
								<div
									className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${value.color} opacity-60 transition-all duration-300 group-hover:w-24 group-hover:opacity-100`}
								/>
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ValuesSection;
