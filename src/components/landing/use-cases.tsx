"use client";

import React from "react";
import {
	ShoppingCart,
	Layers,
	Smartphone,
	TrendingUp,
	ArrowRight,
	Check,
} from "lucide-react";
import { TertiaryButton } from "@/components/ui/buttons";

const useCases = [
	{
		id: "ecommerce",
		title: "E-commerce Platforms",
		description:
			"Power your online store with automated product sourcing, AI recommendations, and smart inventory management.",
		icon: ShoppingCart,
		gradient: "from-[#3B82F6] to-[#2563EB]",
		usedAPIs: ["Sourceora API", "AI/ML APIs"],
		benefits: [
			"Automate product sourcing from multiple suppliers",
			"AI-powered product recommendations",
			"Real-time inventory synchronization",
			"Smart pricing optimization",
		],
		stats: { label: "Average Revenue Increase", value: "40%" },
	},
	{
		id: "saas",
		title: "SaaS Applications",
		description:
			"Integrate powerful AI features into your SaaS product without building ML infrastructure.",
		icon: Layers,
		gradient: "from-[#2563EB] to-[#1D4ED8]",
		usedAPIs: ["AI/ML APIs", "Custom Solutions"],
		benefits: [
			"Natural language processing for smart search",
			"Automated content generation",
			"Sentiment analysis for customer feedback",
			"Predictive analytics for user behavior",
		],
		stats: { label: "Integration Time", value: "<1 hour" },
	},
	{
		id: "mobile",
		title: "Mobile Apps",
		description:
			"Build feature-rich mobile applications with backend APIs that scale automatically.",
		icon: Smartphone,
		gradient: "from-[#1E40AF] to-[#1D4ED8]",
		usedAPIs: ["Custom Solutions", "AI/ML APIs"],
		benefits: [
			"RESTful APIs optimized for mobile",
			"Real-time data synchronization",
			"Push notification infrastructure",
			"Offline-first architecture support",
		],
		stats: { label: "API Response Time", value: "<100ms" },
	},
	{
		id: "analytics",
		title: "Analytics & BI Tools",
		description:
			"Enhance your analytics platform with AI-powered insights and data processing capabilities.",
		icon: TrendingUp,
		gradient: "from-[#1E3A8A] to-[#1E40AF]",
		usedAPIs: ["AI/ML APIs", "Custom Solutions"],
		benefits: [
			"Automated data processing pipelines",
			"Predictive modeling and forecasting",
			"Natural language queries",
			"Real-time data aggregation",
		],
		stats: { label: "Data Processing Speed", value: "10x faster" },
	},
];

const UseCases: React.FC = () => {
	return (
		<section className="use-cases-section py-20 bg-[linear-gradient(135deg,#0B0F19_0%,#0C2258_50%,#0B0F19_100%)]">
			<div className="container mx-auto px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-[#60A5FA] font-semibold mb-4">
						USE CASES
					</p>

					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
						Built for Your Industry
					</h2>
					<p className="text-lg text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">
						From e-commerce to SaaS, our APIs power diverse
						applications across industries.
					</p>
				</div>

				{/* Use Case Cards Grid */}
				<div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
					{useCases.map((useCase) => {
						const IconComponent = useCase.icon;
						return (
							<div
								key={useCase.id}
								className="group bg-[#111827]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#1E3A8A]/30 hover:border-[#2563EB]/60 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300">
								{/* Icon & Title */}
								<div className="flex items-start justify-between mb-6">
									<div className="flex items-center gap-4">
										<div
											className={`w-14 h-14 rounded-xl bg-linear-to-br ${useCase.gradient} flex items-center justify-center shadow-lg`}>
											<IconComponent className="w-7 h-7 text-white" />
										</div>
										<div>
											<h3 className="text-2xl font-bold text-white mb-1">
												{useCase.title}
											</h3>
											<div className="flex gap-2 flex-wrap">
												{useCase.usedAPIs.map(
													(api, idx) => (
														<span
															key={idx}
															className="text-xs px-2 py-1 bg-[#2563EB]/10 text-[#60A5FA] rounded-full border border-[#3B82F6]/20">
															{api}
														</span>
													)
												)}
											</div>
										</div>
									</div>
								</div>

								{/* Description */}
								<p className="text-[#CBD5E1] leading-relaxed mb-6">
									{useCase.description}
								</p>

								{/* Benefits */}
								<div className="mb-6">
									<h4 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wide mb-3">
										Key Benefits
									</h4>
									<div className="space-y-2">
										{useCase.benefits.map(
											(benefit, index) => (
												<div
													key={index}
													className="flex items-start gap-2">
													<Check
														size={16}
														className="text-[#34D399] shrink-0 mt-0.5"
													/>
													<span className="text-sm text-[#E2E8F0]">
														{benefit}
													</span>
												</div>
											)
										)}
									</div>
								</div>

								{/* Stats */}
								<div className="pt-4 border-t border-[#1E3A8A]/40">
									<div className="flex items-center justify-between">
										<div>
											<p className="text-xs text-[#94A3B8] mb-1">
												{useCase.stats.label}
											</p>
											<p
												className={`text-2xl font-bold bg-linear-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
												{useCase.stats.value}
											</p>
										</div>
										<TertiaryButton className="flex items-center gap-2 px-4 py-2 hover:bg-[#2563EB]/20 transition">
											<span className="text-sm text-[#E2E8F0]">
												View Details
											</span>
											<ArrowRight size={16} />
										</TertiaryButton>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-16">
					<p className="text-[#CBD5E1] mb-6 max-w-2xl mx-auto">
						Don&apos;t see your use case? We build custom solutions
						for unique requirements.
					</p>
					<TertiaryButton className="px-8 py-4 hover:bg-[#2563EB]/20 transition">
						Discuss Your Project
					</TertiaryButton>
				</div>
			</div>
		</section>
	);
};

export default UseCases;
