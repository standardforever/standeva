"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { PhoneCall, Search, Rocket } from "lucide-react";

const actions = [
	{
		icon: PhoneCall,
		title: "book your free intro call",
		description:
			"A 15-minute call to align on goals and confirm automation fit.",
		accent: "from-sky-500/20 to-emerald-500/15",
	},
	{
		icon: Search,
		title: "start your £100 discovery day",
		description:
			"A focused day mapping processes, stakeholders, and automation opportunities.",
		accent: "from-emerald-500/15 to-sky-500/20",
	},
	{
		icon: Rocket,
		title: "unlock your ai audit report",
		description:
			"Receive a tailored automation roadmap with solutions, timelines, and ROI.",
		accent: "from-purple-500/15 to-sky-500/15",
	},
];

const EarlyPartnersCTA: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<section
			id="partnership"
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-32">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.25),transparent_50%),radial-gradient(ellipse_at_center,_rgba(16,185,129,0.25),transparent_70%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-sky-200">
					next steps
				</motion.div>

				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
					ready to reduce manual workload?
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
					Discover how AI automation can streamline your operations and transform
					how your team works.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.25 }}
					className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{actions.map((item, index) => {
						const Icon = item.icon;
						return (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 16 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.5, delay: 0.28 + index * 0.05 }}
								className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]">
								<div
									className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
								/>
								<div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/80 text-slate-100">
									<Icon className="h-5 w-5" />
								</div>
								<h3 className="relative mt-4 text-base font-semibold text-slate-100">
									{item.title}
								</h3>
								<p className="relative mt-2 text-sm text-slate-300">
									{item.description}
								</p>
							</motion.div>
						);
					})}
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.32 }}
					className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
					Let&apos;s build your AI-powered future together.
				</motion.p>

				<motion.div
					className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
					initial={{ opacity: 0, y: 12 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 0.35 }}>
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

export default EarlyPartnersCTA;
