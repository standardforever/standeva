"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutUsHero: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<section
			id="overview"
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.32),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-6">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-emerald-200">
					about processzero
				</motion.div>

				{/* Main heading */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
					automating repetitive work. helping teams focus on growth.
				</motion.h1>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
					Process Zero helps SMEs eliminate repetitive digital tasks so
					teams can focus on customers, growth, and higher-value work
					  not admin. Our automations reduce bottlenecks, speed up
					workflows, and cut operating costs.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-4 max-w-3xl text-balance text-sm leading-relaxed text-slate-400 sm:text-base">
					Using secure, open-source AI that runs inside your network,
					we transform manual processes into fast, reliable workflows.
					From back-office admin to customer operations, we automate
					work the way your business already works.
				</motion.p>

				{/* Hero image */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mt-12 w-full max-w-5xl">
					<div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 shadow-[0_0_60px_rgba(59,130,246,0.25)]">
						<Image
							src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=675&fit=crop&q=80"
							alt="AI automation and secure network infrastructure"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
					</div>
				</motion.div>

				{/* Key stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
					<div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-8 backdrop-blur-sm">
						<div className="text-4xl font-bold text-sky-400">
							30+
						</div>
						<div className="mt-2 text-center text-sm font-medium text-slate-300">
							years combined experience
						</div>
					</div>
					<div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-8 backdrop-blur-sm">
						<div className="text-4xl font-bold text-emerald-400">
							90%
						</div>
						<div className="mt-2 text-center text-sm font-medium text-slate-300">
							up to reduction in task costs
						</div>
					</div>
					<div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-8 backdrop-blur-sm">
						<div className="text-4xl font-bold text-purple-400">
							100%
						</div>
						<div className="mt-2 text-center text-sm font-medium text-slate-300">
							data privacy & control
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutUsHero;
