"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Target } from "lucide-react";

const MissionSection: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<section
			id="mission"
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center_right,_rgba(16,185,129,0.15),transparent_50%)] opacity-70" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 md:px-6">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
					Our Purpose
				</motion.div>

				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
					OUR MISSION
				</motion.h2>

				{/* Content grid */}
				<div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="relative flex items-center">
						<div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
							<Image
								src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80"
								alt="Modern workplace with AI integration"
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 via-transparent to-sky-500/10" />
						</div>
					</motion.div>

					{/* Text content */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.7, delay: 0.3 }}
						className="flex flex-col justify-center space-y-6">
						<div className="flex items-start gap-4">
							<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 shadow-lg shadow-emerald-500/30">
								<Target className="h-6 w-6 text-white" />
							</div>
							<div>
								<h3 className="text-xl font-semibold text-slate-100 sm:text-2xl">
									Transition to AI-First Operations
								</h3>
								<p className="mt-2 text-base leading-relaxed text-slate-300">
									Our mission is to help organisations
									transition into AI-first businesses, freeing
									human teams from repetitive manual work and
									allowing them to focus on strategy,
									problem-solving, and value creation.
								</p>
							</div>
						</div>

						<div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-6">
							<div className="flex items-baseline gap-2">
								<span className="text-5xl font-bold text-sky-400">
									90%
								</span>
								<span className="text-lg font-semibold text-slate-200">
									Cost Reduction Goal
								</span>
							</div>
							<p className="mt-3 text-sm leading-relaxed text-slate-300">
								We aim to reduce repetitive task costs by up to
								90% for most clients, enabling them to grow
								faster, operate leaner, and scale without the
								burden of rising overheads.
							</p>
						</div>

						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
								<p className="text-sm text-slate-300">
									<span className="font-semibold text-slate-200">
										Free human teams
									</span>{" "}
									from soul-crushing repetitive work
								</p>
							</div>
							<div className="flex items-start gap-3">
								<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-400" />
								<p className="text-sm text-slate-300">
									<span className="font-semibold text-slate-200">
										Enable focus
									</span>{" "}
									on strategy and value creation
								</p>
							</div>
							<div className="flex items-start gap-3">
								<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400" />
								<p className="text-sm text-slate-300">
									<span className="font-semibold text-slate-200">
										Scale operations
									</span>{" "}
									without increasing headcount
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default MissionSection;
