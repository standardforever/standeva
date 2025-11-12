"use client";

import React from "react";
import { Star, Quote, ArrowRight } from "lucide-react";
import { TertiaryButton } from "@/components/ui/buttons";

const caseStudies = [
	{
		id: 1,
		name: "James Wilson",
		role: "Engineering Lead",
		company: "ShopFlow Commerce",
		avatar: "👨‍💻",
		rating: 5,
		testimonial:
			"Integrating Sourceora API transformed our product sourcing workflow. What used to take our team days now happens in real-time. We integrated in under an hour and scaled to 10,000+ products without any infrastructure headaches.",
		apiUsed: "Sourceora API",
		results: [
			"Integrated in 45 minutes",
			"10K+ products synced",
			"85% time savings",
		],
		industry: "E-commerce",
	},
	{
		id: 2,
		name: "Priya Sharma",
		role: "CTO",
		company: "InsightAI Platform",
		avatar: "👩‍💼",
		rating: 5,
		testimonial:
			"We needed sentiment analysis for customer feedback but building an ML pipeline would have taken months. Standeva's AI/ML APIs got us production-ready features in days. The documentation and support made integration seamless.",
		apiUsed: "AI/ML APIs",
		results: [
			"Live in 3 days",
			"1M+ API calls/month",
			"40% cost vs building",
		],
		industry: "SaaS",
	},
	{
		id: 3,
		name: "Alex Martinez",
		role: "Founder & CEO",
		company: "FitTrack Mobile",
		avatar: "👨‍🚀",
		rating: 5,
		testimonial:
			"Our app needed custom backend APIs with real-time sync. Standeva built exactly what we needed in 6 weeks. The APIs are fast, reliable, and the custom solution fits our unique requirements perfectly.",
		apiUsed: "Custom Solution",
		results: ["Launched in 6 weeks", "99.9% uptime", "50K+ active users"],
		industry: "Mobile App",
	},
];

const stats = [
	{ label: "Active Integrations", value: "2,500+" },
	{ label: "API Calls per Month", value: "50M+" },
	{ label: "Average Uptime", value: "99.9%" },
	{ label: "Countries Served", value: "40+" },
];

const SuccessStories: React.FC = () => {
	return (
		<section className="py-20 bg-[linear-gradient(135deg,#0B0F19_0%,#0C2258_50%,#0B0F19_100%)] text-white">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-[#60A5FA] font-semibold mb-4">
						SUCCESS STORIES
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Real Results from Real Integrations
					</h2>
					<p className="text-lg text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">
						See how companies are shipping faster and scaling
						effortlessly with Standeva&apos;s APIs.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{caseStudies.map((caseStudy) => (
						<div
							key={caseStudy.id}
							className="bg-[#111827]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#1E3A8A]/30 hover:border-[#2563EB]/60 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300">
							<div className="flex items-center justify-between mb-6">
								<span className="px-3 py-1 bg-[#2563EB]/20 text-[#60A5FA] text-xs font-semibold rounded-full border border-[#2563EB]/40">
									{caseStudy.industry}
								</span>
								<Quote size={24} className="text-[#60A5FA]" />
							</div>

							<div className="flex gap-1 mb-4">
								{[...Array(caseStudy.rating)].map((_, i) => (
									<Star
										key={i}
										size={16}
										className="text-yellow-400 fill-current"
									/>
								))}
							</div>

							<p className="text-[#E2E8F0] text-base leading-relaxed mb-6">
								&ldquo;{caseStudy.testimonial}&rdquo;
							</p>

							<div className="mb-6 p-4 bg-[#1E3A8A]/20 rounded-lg border border-[#2563EB]/30">
								<h4 className="text-sm font-semibold text-[#60A5FA] mb-2">
									{caseStudy.apiUsed}
								</h4>
								<div className="space-y-1">
									{caseStudy.results.map((result, index) => (
										<div
											key={index}
											className="flex items-center gap-2 text-sm text-[#CBD5E1]">
											<div className="w-2 h-2 bg-[#34D399] rounded-full" />
											{result}
										</div>
									))}
								</div>
							</div>

							<div className="flex items-center gap-3">
								<div className="w-12 h-12 bg-linear-to-br from-[#3B82F6] to-[#2563EB] rounded-full flex items-center justify-center text-2xl">
									{caseStudy.avatar}
								</div>
								<div>
									<h4 className="font-semibold text-white">
										{caseStudy.name}
									</h4>
									<p className="text-[#94A3B8] text-sm">
										{caseStudy.role}, {caseStudy.company}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="text-center p-6 bg-[#111827]/70 backdrop-blur-sm rounded-xl border border-[#1E3A8A]/30">
							<div className="text-3xl font-bold text-[#60A5FA] mb-2">
								{stat.value}
							</div>
							<p className="text-sm text-[#94A3B8]">
								{stat.label}
							</p>
						</div>
					))}
				</div>

				<div className="text-center">
					<div className="inline-flex flex-col sm:flex-row gap-4">
						<TertiaryButton className="px-8 py-4 flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1E40AF] rounded-xl transition">
							Browse APIs
							<ArrowRight size={16} />
						</TertiaryButton>
						<TertiaryButton className="px-8 py-4 rounded-xl border border-[#2563EB]/40 hover:bg-[#2563EB]/10 transition">
							Read More Case Studies
						</TertiaryButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SuccessStories;
