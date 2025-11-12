"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { BookOpen, Code, Rocket, MessageSquare, Wrench } from "lucide-react";

type Track = "ready-apis" | "custom-dev";

const integrationTracks = {
	"ready-apis": {
		id: "ready-apis",
		title: "Ready-Made APIs",
		subtitle: "Get started in minutes",
		badge: "Quick Start",
		color: "from-[#3B82F6] to-[#2563EB]",
		steps: [
			{
				id: 1,
				title: "Browse & Select",
				description:
					"Explore our API catalog and choose the solution that fits your needs.",
				icon: BookOpen,
				features: [
					"Browse comprehensive API documentation",
					"Try interactive API playground",
					"Review pricing and rate limits",
					"Check integration examples",
				],
			},
			{
				id: 2,
				title: "Integrate",
				description:
					"Add our SDK to your project and start making API calls in minutes.",
				icon: Code,
				features: [
					"Install SDK via npm/pip/composer",
					"Copy your API key from dashboard",
					"Follow step-by-step guides",
					"Use code snippets for your stack",
				],
			},
			{
				id: 3,
				title: "Deploy & Scale",
				description:
					"Ship to production with confidence. We handle scaling automatically.",
				icon: Rocket,
				features: [
					"Production-ready from day one",
					"Auto-scaling infrastructure",
					"Real-time monitoring dashboard",
					"24/7 support and SLA guarantees",
				],
			},
		],
	},
	"custom-dev": {
		id: "custom-dev",
		title: "Custom Development",
		subtitle: "Tailored solutions for unique needs",
		badge: "Custom Build",
		color: "from-[#2563EB] to-[#1E40AF]",
		steps: [
			{
				id: 1,
				title: "Discovery Call",
				description:
					"We discuss your requirements and architect the perfect solution.",
				icon: MessageSquare,
				features: [
					"Free 30-minute consultation",
					"Technical requirements gathering",
					"Architecture recommendations",
					"Timeline and cost estimation",
				],
			},
			{
				id: 2,
				title: "Build & Iterate",
				description:
					"Our engineering team builds your custom API with regular check-ins.",
				icon: Wrench,
				features: [
					"Dedicated engineering team",
					"Bi-weekly progress reviews",
					"Agile development approach",
					"Continuous feedback integration",
				],
			},
			{
				id: 3,
				title: "Launch & Support",
				description:
					"We deploy, monitor, and maintain your custom solution.",
				icon: Rocket,
				features: [
					"Production deployment & migration",
					"Complete documentation",
					"Team training sessions",
					"Ongoing maintenance & updates",
				],
			},
		],
	},
};

const OurProcess: React.FC = () => {
	const [activeTrack, setActiveTrack] = useState<Track>("ready-apis");
	const { ref: headerRef, isInView: headerInView } = useScrollAnimation({
		threshold: 0.3,
		triggerOnce: false,
	});
	const { ref: stepsRef } = useScrollAnimation({
		threshold: 0.2,
		triggerOnce: false,
	});

	const headerVariants: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
		},
	};

	const currentTrack = integrationTracks[activeTrack];

	return (
		<section className="py-20 bg-[linear-gradient(135deg,#0B0F19_0%,#0C2258_50%,#0B0F19_100%)] text-white overflow-x-hidden">
			<div className="container mx-auto px-6">
				<motion.div
					ref={headerRef}
					initial="hidden"
					animate={headerInView ? "visible" : "hidden"}
					variants={headerVariants}
					className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-[#60A5FA] font-semibold mb-4">
						HOW IT WORKS
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Two Ways to Integrate
					</h2>
					<p className="text-lg text-[#CBD5E1] max-w-3xl mx-auto">
						Choose the path that fits your needs: instant API
						integration or custom-built solutions
					</p>
				</motion.div>

				<div className="flex justify-center mb-12">
					<div className="inline-flex bg-[#111827]/70 p-2 rounded-xl border border-[#1E3A8A]/40 shadow-md">
						{Object.values(integrationTracks).map((track) => (
							<button
								key={track.id}
								onClick={() =>
									setActiveTrack(track.id as Track)
								}
								className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
									activeTrack === track.id
										? `bg-linear-to-r ${track.color} text-white shadow-lg`
										: "text-[#CBD5E1] hover:text-white"
								}`}>
								<div className="flex items-center gap-2">
									<span>{track.title}</span>
									<span className="text-xs px-2 py-1 rounded-full bg-white/20">
										{track.badge}
									</span>
								</div>
							</button>
						))}
					</div>
				</div>

				<div
					ref={stepsRef}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
					{currentTrack.steps.map((step, index) => {
						const IconComponent = step.icon;
						return (
							<div
								key={step.id}
								className="relative bg-[#111827]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#1E3A8A]/30 hover:border-[#2563EB]/60 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300 group">
								<div
									className={`absolute -top-4 -left-4 w-10 h-10 bg-linear-to-r ${currentTrack.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
									{step.id}
								</div>

								<div
									className={`w-16 h-16 rounded-xl bg-linear-to-r ${currentTrack.color} flex items-center justify-center mb-6 shadow-lg`}>
									<IconComponent className="w-8 h-8 text-white" />
								</div>

								<h3 className="text-xl font-bold mb-4 text-white">
									{step.title}
								</h3>
								<p className="text-base text-[#CBD5E1] leading-relaxed mb-6">
									{step.description}
								</p>

								<ul className="space-y-2">
									{step.features.map((feature, idx) => (
										<li
											key={idx}
											className="flex items-start text-sm text-[#E2E8F0]">
											<span className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 mr-3 shrink-0"></span>
											{feature}
										</li>
									))}
								</ul>

								{index < currentTrack.steps.length - 1 && (
									<div className="hidden md:block absolute top-1/2 -right-4 text-[#1E3A8A] transform -translate-y-1/2">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none">
											<path
												d="M8 16H24M24 16L18 10M24 16L18 22"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								)}
							</div>
						);
					})}
				</div>

				<div className="text-center max-w-2xl mx-auto">
					<p className="text-[#94A3B8] text-sm">
						{activeTrack === "ready-apis"
							? "Most developers are integrated and making production calls within 30 minutes."
							: "Custom projects typically launch in 4–8 weeks depending on complexity."}
					</p>
				</div>
			</div>
		</section>
	);
};

export default OurProcess;
