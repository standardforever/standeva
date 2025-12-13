'use client';

import type { FC } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const headingContainerVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 24,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
			staggerChildren: 0.1,
		},
	},
};

const lineRevealVariants: Variants = {
	hidden: {
		y: "100%",
	},
	visible: (index: number) => ({
		y: "0%",
		transition: {
			duration: 0.9,
			delay: index * 0.05,
			ease: [0.33, 1, 0.68, 1],
		},
	}),
};

const imageRevealVariants: Variants = {
	hidden: {
		width: "100%",
	},
	visible: {
		width: "0%",
		transition: {
			duration: 1.2,
			ease: [0.6, 0.05, -0.01, 0.9],
			delay: 0.25,
		},
	},
};

const Hero: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.35,
		triggerOnce: true,
		rootMargin: "0px 0px -10% 0px",
	});

	return (
		<>
			<section
				ref={ref}
				className="relative overflow-hidden bg-black text-slate-50">
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.32),transparent_55%)] opacity-70 mix-blend-screen" />
				</div>

				<motion.div
					className="relative z-10"
					variants={headingContainerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}>
					<div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-24 text-center md:px-6 md:pb-28">
						<div className="flex flex-col items-center gap-2">
							<motion.div
								className="flex items-center gap-1 text-yellow-400"
								initial={{ opacity: 0, y: 10 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}>
								{[0, 1, 2, 3, 4].map((star) => (
									<Star
										key={star}
										className="h-4 w-4 fill-yellow-400"
									/>
								))}
							</motion.div>
							<motion.p
								className="text-xs font-medium tracking-[0.25em] text-slate-400"
								initial={{ opacity: 0, y: 10 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.4, delay: 0.1 }}>
								your trusted ai partner
							</motion.p>
						</div>

						<motion.div className="mt-7 space-y-4">
							<h1 className="text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
								<span className="block overflow-hidden">
									<motion.span
										className="block"
										variants={lineRevealVariants}
										custom={0}>
										free your team
									</motion.span>
								</span>
								<span className="block overflow-hidden text-sky-400">
									<motion.span
										className="block"
										variants={lineRevealVariants}
										custom={1}>
										from repetitive work.
									</motion.span>
								</span>
							</h1>
							<motion.p
								className="mx-auto max-w-2xl text-balance text-sm text-slate-300 sm:text-base md:text-lg"
								initial={{ opacity: 0, y: 12 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.2 }}>
								ProcessZero frees teams from manual work,
								enabling high-impact output and 50–90% lower
								operating costs
							</motion.p>
						</motion.div>

						<motion.div
							className="mt-8 flex gap-8"
							initial={{ opacity: 0, y: 12 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.3 }}>
							<motion.a
								href="/intro-call"
								className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/40 transition-colors duration-300 ease-out hover:from-slate-800 hover:to-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}>
								15 min intro call
							</motion.a>

							<motion.a
								href="/discovery-day"
								className="inline-flex flex-col items-center justify-center rounded-md bg-slate-800/90 px-7 py-3 text-sm font-semibold text-slate-100 shadow-md shadow-slate-900/30 transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}>
								<span className="text-slate-100 leading-none">
									discovery series
								</span>
								<span className="text-[0.72rem] leading-tight font-normal text-slate-300">
									1-day ai audit + strategy session (£100)
								</span>
							</motion.a>
						</motion.div>

						<div className="mt-10 w-full">
							<div className="relative mx-auto w-full overflow-hidden rounded-[2.5rem] border border-sky-500/40 bg-[#0203a3] shadow-[0_0_60px_rgba(59,130,246,0.45)]">
								<motion.div
									className="absolute left-0 top-0 z-10 h-full w-full bg-[#0203a3]"
									style={{ transformOrigin: "left" }}
									variants={imageRevealVariants}
									initial="hidden"
									animate={isInView ? "visible" : "hidden"}
								/>
								<Image
									src="/hero-image-new.png"
									alt="Automation bot with finance, HR, and sales plus tasks"
									width={1360}
									height={700}
									className="h-auto w-full object-cover"
									priority
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default Hero;
