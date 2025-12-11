"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Clock, Zap, Award, Sparkles } from "lucide-react";

const ConsultingHero: React.FC = () => {
	const [mounted, setMounted] = useState(false);
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 1000], [0, -200]);

	// Animated counters
	const [counters, setCounters] = useState({
		solutions: 0,
		process: 0,
		partners: 0,
		response: 0
	});

	useEffect(() => {
		setMounted(true);
		const timer = setTimeout(() => {
			setCounters({
				solutions: 4,
				process: 5,
				partners: 10,
				response: 24
			});
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	const stats = [
		{
			icon: <Zap className="w-5 h-5" />,
			value: counters.solutions,
			target: 4,
			label: "Core AI Solutions",
			color: "text-blue-400"
		},
		{
			icon: <TrendingUp className="w-5 h-5" />,
			value: counters.process,
			target: 5,
			label: "Step Process",
			color: "text-purple-400"
		},
		{
			icon: <Users className="w-5 h-5" />,
			value: counters.partners,
			target: 10,
			label: "Technology Partners",
			color: "text-green-400"
		},
		{
			icon: <Clock className="w-5 h-5" />,
			value: counters.response,
			target: 24,
			label: "Hour Response",
			color: "text-orange-400"
		}
	];

	// Floating particles
	const particles = Array.from({ length: 6 }, (_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100,
		size: Math.random() * 4 + 2,
		duration: Math.random() * 20 + 10
	}));

	return (
		<section
			id="consulting-overview"
			className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
			{/* Animated gradient background */}
			<motion.div className="absolute inset-0" style={{ y }}>
				<div className="absolute inset-0 bg-linear-to-br from-blue-900/30 via-purple-900/20 to-transparent" />
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAzMCAwIEwgMCA2MCAwIDYwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

				{/* Floating particles */}
				{particles.map((particle) => (
					<motion.div
						key={particle.id}
						className="absolute rounded-full bg-blue-500/20"
						style={{
							left: `${particle.x}%`,
							top: `${particle.y}%`,
							width: particle.size,
							height: particle.size,
						}}
						animate={{
							y: [0, -30, 0],
							x: [0, 20, 0],
							opacity: [0.2, 0.8, 0.2],
						}}
						transition={{
							duration: particle.duration,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				))}
			</motion.div>

			<div className="container mx-auto px-6 relative z-10 pt-24 pb-12">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}>
						{/* Tag header */}
						<motion.div
							className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}>
							<Award className="w-4 h-4 text-blue-400" />
							<span className="text-sm text-blue-400 font-medium uppercase tracking-wider">
								Industry-Leading AI Expertise
							</span>
						</motion.div>

						{/* Main title */}
						<motion.h1
							className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}>
							Transform Your
							<span className="block bg-linear-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
								Business with AI
							</span>
						</motion.h1>

						{/* Subtitle */}
						<motion.p
							className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}>
							Our expert consultants help you navigate AI&apos;s
							complexities and harness its potential to solve
							critical business challenges—from operational
							inefficiencies to customer experience
							transformation.
						</motion.p>

						{/* CTA buttons */}
						<motion.div
							className="flex flex-col sm:flex-row gap-4 mb-12"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}>
							<motion.button
								className="group px-8 py-4 bg-linear-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center gap-3"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								<ScheduleIcon className="w-5 h-5" />
								Schedule Consultation
								<ArrowRight
									size={20}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</motion.button>
						</motion.div>

						{/* Stats grid */}
						<motion.div
							className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}>
							{stats.map((stat, index) => (
								<motion.div
									key={index}
									className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 0.6,
										delay: 0.7 + index * 0.1,
									}}
									whileHover={{
										scale: 1.05,
										borderColor: "rgba(59, 130, 246, 0.5)",
									}}>
									<div
										className={`flex justify-center mb-2 ${stat.color}`}>
										{stat.icon}
									</div>
									<div
										className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
										{mounted ? stat.value : 0}
										{stat.label.includes("Partners") && "+"}
										{stat.label.includes("Response") &&
											"hr"}
									</div>
									<div className="text-xs text-slate-400">
										{stat.label}
									</div>
								</motion.div>
							))}
						</motion.div>

						{/* Trust indicators */}
						<motion.div
							className="flex flex-wrap gap-6 pt-6 border-t border-slate-800"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.8 }}>
							{[
								{
									icon: CheckCircle2,
									text: "Proven ROI Results",
								},
								{
									icon: CheckCircle2,
									text: "End-to-End Support",
								},
								{
									icon: CheckCircle2,
									text: "Secure & Compliant",
								},
							].map((item, index) => (
								<motion.div
									key={index}
									className="flex items-center gap-2"
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.6,
										delay: 0.9 + index * 0.1,
									}}>
									<item.icon
										size={20}
										className="text-blue-400"
									/>
									<span className="text-sm text-slate-400">
										{item.text}
									</span>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* Image section with enhanced stats overlay */}
					<motion.div
						className="relative overflow-hidden"
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<motion.div
							className="relative h-[600px] rounded-2xl overflow-hidden border border-slate-800"
							whileHover={{
								rotateY: 5,
								rotateX: -5,
								scale: 1.02,
								transition: { duration: 0.3 },
							}}
							style={{ transformStyle: "preserve-3d" }}>
							<Image
								src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
								alt="Professional AI consulting team strategizing"
								fill
								className="object-cover"
								priority
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

							{/* Enhanced stats overlay */}
							<motion.div
								className="absolute bottom-8 left-8 right-8"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 1 }}>
								<div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
									<div className="flex items-center justify-between mb-4">
										<span className="text-sm text-blue-400 font-medium uppercase tracking-wider">
											Real Results
										</span>
										<Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
									</div>
									<div className="grid grid-cols-3 gap-4">
										<div className="text-center">
											<div className="text-2xl font-bold text-blue-400">
												{mounted ? "85%" : "0%"}
											</div>
											<div className="text-xs text-slate-400 mt-1">
												Client Satisfaction
											</div>
										</div>
										<div className="text-center">
											<div className="text-2xl font-bold text-purple-400">
												{mounted ? "3x" : "0x"}
											</div>
											<div className="text-xs text-slate-400 mt-1">
												ROI Average
											</div>
										</div>
										<div className="text-center">
											<div className="text-2xl font-bold text-green-400">
												{mounted ? "60%" : "0%"}
											</div>
											<div className="text-xs text-slate-400 mt-1">
												Cost Reduction
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>

						{/* Enhanced floating orbs */}
						<motion.div
							className="absolute -top-6 -right-6 w-40 h-40 bg-linear-to-r from-[#2563EB] to-[#7C3AED] rounded-full blur-3xl opacity-30"
							animate={{
								x: [0, 20, 0],
								y: [0, -20, 0],
							}}
							transition={{
								duration: 8,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<motion.div
							className="absolute -bottom-6 -left-6 w-40 h-40 bg-linear-to-r from-[#7C3AED] to-[#2563EB] rounded-full blur-3xl opacity-30"
							animate={{
								x: [0, -20, 0],
								y: [0, 20, 0],
							}}
							transition={{
								duration: 10,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

// Icon components for CTAs
const ScheduleIcon = ({ className }: { className?: string }) => (
	<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
	</svg>
);

const ViewIcon = ({ className }: { className?: string }) => (
	<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
	</svg>
);

export default ConsultingHero;
