"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Sparkles } from "lucide-react";

const ServicesHero: FC = () => {
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
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.32),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-6">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-purple-200">
					<Sparkles className="h-3.5 w-3.5" />
					Our Services
				</motion.div>

				{/* Main heading */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
					Your Trusted{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-emerald-400">
						AI Transformation
					</span>{" "}
					Partner
				</motion.h1>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
					Process Zero helps organisations eliminate repetitive work,
					modernise inefficient processes, and scale their operations
					through intelligent automation.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-slate-400 sm:text-base">
					Our four-part service framework supports you from discovery
					through to delivery and long-term optimisation.
				</motion.p>

				{/* Hero image */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mt-12 w-full max-w-5xl">
					<div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 shadow-[0_0_60px_rgba(124,58,237,0.25)]">
						<Image
							src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop&q=80"
							alt="AI transformation services and automation workflow"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
					</div>
				</motion.div>

				{/* Service highlights */}
				{/* <motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-5">
					<div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-6 backdrop-blur-sm">
						<div className="text-3xl font-bold text-sky-400">
							01
						</div>
						<div className="mt-2 text-center text-sm font-medium text-slate-300">
							AI Process Audit
						</div>
					</div>
					<div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-6 backdrop-blur-sm">
						<div className="text-3xl font-bold text-sky-400">
							01
						</div>
						<div className="mt-2 text-center text-sm font-medium text-slate-300">
							AI Process Audit
						</div>
					</div>
					<div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-6 backdrop-blur-sm">
						<div className="text-3xl font-bold text-purple-400">
							02
						</div>
						<div className="mt-2 text-center text-sm font-medium text-slate-300">
							Transformation Partner
						</div>
					</div>
					<div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-6 backdrop-blur-sm">
						<div className="text-3xl font-bold text-emerald-400">
							03
						</div>
						<div className="mt-2 text-center text-sm font-medium text-slate-300">
							Implementation Partner
						</div>
					</div>
					<div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-6 backdrop-blur-sm">
						<div className="text-3xl font-bold text-amber-400">
							04
						</div>
						<div className="mt-2 text-center text-sm font-medium text-slate-300">
							Ongoing Maintenance
						</div>
					</div>
				</motion.div> */}
			</div>
		</section>
	);
};

export default ServicesHero;
