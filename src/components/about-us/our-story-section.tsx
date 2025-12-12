"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const OurStorySection: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<section
			id="story"
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center_left,_rgba(56,189,248,0.15),transparent_50%)] opacity-70" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 md:px-6">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-sky-200">
					our journey
				</motion.div>

				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
					our story
				</motion.h2>

				{/* Content grid */}
				<div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
					{/* Text content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="flex flex-col justify-center space-y-6">
						<p className="text-base leading-relaxed text-slate-300 sm:text-lg">
							Process Zero was created after seeing everyday
							businesses overwhelmed by{" "}
							<span className="font-semibold text-slate-200">
								thousands of hours of repetitive, low-value
								processing
							</span>{" "}
							— from data entry to reconciliation, invoice
							management to compliance checks.
						</p>

						<p className="text-base leading-relaxed text-slate-300 sm:text-lg">
							These tasks drain morale, increase costs, slow
							growth, and expose organisations to avoidable
							errors.
						</p>

						<p className="text-base leading-relaxed text-slate-300 sm:text-lg">
							At the same time, businesses were being encouraged
							to use AI systems that{" "}
							<span className="font-semibold text-slate-200">
								compromise data integrity, rely on external
								cloud models, or create long-term vendor lock-in
							</span>
							.
						</p>

						<div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">
							<p className="text-base font-medium leading-relaxed text-emerald-200 sm:text-lg">
								We knew there had to be a safer, smarter
								alternative.
							</p>
							<p className="mt-3 text-sm leading-relaxed text-slate-300">
								So we built Process Zero: a secure, on-premise,
								open-source AI partner that eliminates
								repetitive work without risking privacy,
								compliance, or control.
							</p>
						</div>
					</motion.div>

					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.7, delay: 0.3 }}
						className="relative flex items-center">
						<div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
							<Image
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
								alt="Team collaborating on business challenges"
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-emerald-500/10" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default OurStorySection;
