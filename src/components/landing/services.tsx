"use client";

import React from "react";
import {
	ArrowRight,
	Code,
	Zap,
	Wrench,
	Brain,
	Package,
	Shield,
	Clock,
} from "lucide-react";
import { PrimaryButton } from "@/components/ui/buttons";

const solutionsData = [
	{
		id: "ready-apis",
		badge: "Quick Integration",
		title: "Ready-Made APIs",
		description:
			"Pre-built, documented, and ready to integrate. Get up and running in minutes:",
		features: [
			{
				icon: Zap,
				text: "Integrate in minutes with comprehensive documentation",
			},
			{
				icon: Package,
				text: "Pre-built solutions like Sourceora API for product sourcing",
			},
			{
				icon: Brain,
				text: "AI/ML endpoints for intelligent automation",
			},
			{
				icon: Shield,
				text: "Battle-tested, secure, and production-ready APIs",
			},
		],
		buttonText: "Browse APIs",
		buttonColor: "#3B82F6",
		gradient: "from-[#3B82F6] to-[#2563EB]",
	},
	{
		id: "custom-solutions",
		badge: "Tailored for You",
		title: "Custom Development",
		description:
			"Need something specific? Our engineering team builds tailored API solutions:",
		features: [
			{
				icon: Wrench,
				text: "Custom API endpoints designed for your use case",
			},
			{
				icon: Code,
				text: "Dedicated engineering team for your project",
			},
			{
				icon: Clock,
				text: "Ongoing maintenance and support included",
			},
			{
				icon: Shield,
				text: "Scalable infrastructure that grows with you",
			},
		],
		buttonText: "Request Custom Solution",
		buttonColor: "#10B981",
		gradient: "from-[#10B981] to-[#059669]",
	},
];

const Services: React.FC = () => {
	return (
		<section className="py-20 bg-[linear-gradient(135deg,#0B0F19_0%,#0C2258_50%,#0B0F19_100%)] text-white">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-[#60A5FA] font-semibold mb-4">
						YOUR PATH TO SUCCESS
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Choose Your Integration Path
					</h2>
					<p className="text-lg text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">
						Use our ready-made APIs for instant integration, or let
						us build custom solutions tailored to your needs.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{solutionsData.map((service) => (
						<div
							key={service.id}
							className="bg-[#111827]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#1E3A8A]/30 hover:border-[#2563EB]/60 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300">
							<div className="mb-8">
								<div
									className={`inline-block px-4 py-2 bg-linear-to-r ${service.gradient} text-white text-sm font-medium rounded-full mb-4 shadow-md`}>
									{service.badge}
								</div>
								<h3 className="text-2xl font-bold mb-4 text-white">
									{service.title}
								</h3>
								<p className="text-[#CBD5E1] leading-relaxed">
									{service.description}
								</p>
							</div>

							<div className="space-y-4 mb-8">
								{service.features.map(
									(feature, featureIndex) => {
										const IconComponent = feature.icon;
										return (
											<div
												key={featureIndex}
												className="flex items-start gap-3 text-[#E2E8F0]">
												<div
													className={`shrink-0 w-8 h-8 bg-linear-to-br ${service.gradient} rounded-lg flex items-center justify-center`}>
													<IconComponent
														size={16}
														className="text-white"
													/>
												</div>
												<p className="leading-relaxed text-sm sm:text-base">
													{feature.text}
												</p>
											</div>
										);
									}
								)}
							</div>

							<PrimaryButton
								className="w-full flex items-center justify-center gap-2 text-base font-medium rounded-xl py-3 hover:opacity-90 transition"
								style={{
									backgroundColor: service.buttonColor,
								}}>
								{service.buttonText}
								<ArrowRight size={16} />
							</PrimaryButton>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
