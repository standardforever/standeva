"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Monitor, MousePointer, Download, FileText, ArrowRight, Play } from "lucide-react";

const Hero: React.FC = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const heroRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (heroRef.current) {
				const rect = heroRef.current.getBoundingClientRect();
				setMousePosition({
					x: e.clientX - rect.left,
					y: e.clientY - rect.top,
				});
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const titleVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const subtitleVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				delay: 0.3,
				ease: "easeOut",
			},
		},
	};

	const ctaVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				delay: 0.6,
				ease: "easeOut",
			},
		},
	};

	const floatingIcons = [
		{ icon: Monitor, x: 10, y: 20, delay: 0 },
		{ icon: MousePointer, x: 85, y: 15, delay: 0.2 },
		{ icon: Download, x: 15, y: 70, delay: 0.4 },
		{ icon: FileText, x: 80, y: 75, delay: 0.6 },
	];

	return (
		<section
			ref={heroRef}
			className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-24">
			{/* Background effects */}
			<div className="absolute inset-0">
				<div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-500/25 blur-[120px]" />
				<div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-purple-600/25 blur-[140px]" />
				<div
					className="absolute h-2 w-2 rounded-full bg-blue-400/50 blur-sm"
					style={{
						left: `${mousePosition.x}px`,
						top: `${mousePosition.y}px`,
						transform: "translate(-50%, -50%)",
					}}
				/>
			</div>

			<div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
				<div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
					<motion.div
						className="flex flex-col gap-8 text-white"
						initial="hidden"
						animate="visible">
						<motion.h1
							variants={titleVariants}
							className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
							Standeva AI that uses
							<br />
							The computer.
						</motion.h1>

						<motion.p
							variants={subtitleVariants}
							className="text-lg text-slate-300 sm:text-xl">
							Ask me to do any computer task  I will do it on your own virtual PC
						</motion.p>

						<motion.div
							variants={ctaVariants}
							className="flex flex-col gap-4 sm:flex-row">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90">
								<Play className="h-5 w-5" />
								Try Now
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/40 px-6 py-3 font-semibold text-slate-100 transition hover:border-blue-500 hover:bg-blue-500/10">
								<ArrowRight className="h-5 w-5" />
								Watch Demo
							</motion.button>
						</motion.div>

						<motion.div
							variants={ctaVariants}
							className="flex items-center gap-6 text-sm text-slate-400">
							<div className="flex items-center gap-2">
								<div className="h-2 w-2 rounded-full bg-emerald-400" />
								<span>2k+ professionals already using</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="h-2 w-2 rounded-full bg-blue-400" />
								<span>30 day money back guarantee</span>
							</div>
						</motion.div>
					</motion.div>

					{/* Computer visualization */}
					<motion.div
						className="relative h-[500px] w-full"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.5 }}>
						{/* Computer screen mockup */}
						<div className="absolute inset-0 rounded-2xl border-2 border-slate-700 bg-slate-900/50 backdrop-blur-xl">
							<div className="flex h-full flex-col">
								{/* Browser header */}
								<div className="flex items-center gap-2 border-b border-slate-700 p-3">
									<div className="flex gap-2">
										<div className="h-3 w-3 rounded-full bg-red-500" />
										<div className="h-3 w-3 rounded-full bg-yellow-500" />
										<div className="h-3 w-3 rounded-full bg-green-500" />
									</div>
									<div className="flex-1 rounded bg-slate-800 px-3 py-1 text-xs text-slate-400">
										https://standeva.ai/app
									</div>
								</div>

								{/* Screen content */}
								<div className="flex-1 p-6">
									<div className="space-y-4">
										<div className="rounded-lg bg-slate-800 p-4">
											<div className="flex items-center gap-3">
												<div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
												<div className="flex-1">
													<div className="h-2 w-3/4 rounded bg-slate-700" />
													<div className="mt-2 h-2 w-1/2 rounded bg-slate-600" />
												</div>
											</div>
										</div>

										<div className="space-y-2">
											<div className="h-2 w-full rounded bg-slate-700" />
											<div className="h-2 w-5/6 rounded bg-slate-600" />
											<div className="h-2 w-4/5 rounded bg-slate-700" />
										</div>

										<div className="grid grid-cols-2 gap-3">
											<div className="rounded-lg bg-blue-500/20 p-4">
												<div className="h-6 w-6 rounded bg-blue-500/30" />
												<div className="mt-2 h-2 w-3/4 rounded bg-blue-500/20" />
											</div>
											<div className="rounded-lg bg-purple-500/20 p-4">
												<div className="h-6 w-6 rounded bg-purple-500/30" />
												<div className="mt-2 h-2 w-3/4 rounded bg-purple-500/20" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Floating icons */}
						{floatingIcons.map((item, index) => {
							const IconComponent = item.icon;
							return (
								<motion.div
									key={index}
									className="absolute flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
									style={{
										left: `${item.x}%`,
										top: `${item.y}%`,
									}}
									initial={{ opacity: 0, scale: 0 }}
									animate={{
										opacity: 1,
										scale: 1,
										y: [0, -10, 0],
									}}
									transition={{
										delay: item.delay + 1,
										duration: 0.5,
										y: {
											duration: 3,
											repeat: Infinity,
											ease: "easeInOut",
											delay: item.delay + 1.5,
										},
									}}>
									<IconComponent className="h-6 w-6 text-blue-400" />
								</motion.div>
							);
						})}

						{/* AI working indicator */}
						<motion.div
							className="absolute -bottom-4 -right-4 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-600/20 px-4 py-2 backdrop-blur-sm"
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 2 }}>
							<div className="flex items-center gap-2">
								<div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
								<span className="text-sm font-medium text-blue-200">AI Working</span>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
