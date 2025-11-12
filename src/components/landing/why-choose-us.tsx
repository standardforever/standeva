"use client";

import React from "react";
import { Clock, DollarSign, Shield, TrendingUp, Check, X } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";

const comparisons = [
	{
		id: "time-to-market",
		icon: Clock,
		title: "Time to Market",
		withStandeva: "Minutes to Hours",
		buildingYourself: "Weeks to Months",
		description:
			"Integrate production-ready APIs instantly instead of spending months on development, testing, and deployment.",
		gradient: "from-[#3B82F6] to-[#2563EB]",
	},
	{
		id: "cost",
		icon: DollarSign,
		title: "Cost Efficiency",
		withStandeva: "Pay per Use",
		buildingYourself: "Full Development Team",
		description:
			"Eliminate hiring, infrastructure, and maintenance costs. Pay only for what you use with transparent, scalable pricing.",
		gradient: "from-[#2563EB] to-[#1D4ED8]",
	},
	{
		id: "reliability",
		icon: Shield,
		title: "Reliability & Support",
		withStandeva: "99.9% Uptime SLA",
		buildingYourself: "Your Responsibility",
		description:
			"Enterprise-grade infrastructure with 24/7 monitoring, dedicated support, and guaranteed uptime. We handle the complexity.",
		gradient: "from-[#1E40AF] to-[#1E3A8A]",
	},
	{
		id: "scalability",
		icon: TrendingUp,
		title: "Instant Scalability",
		withStandeva: "Auto-scales Globally",
		buildingYourself: "Manual Scaling Required",
		description:
			"Handle traffic spikes effortlessly. Our infrastructure scales automatically from 10 to 10 million requests without intervention.",
		gradient: "from-[#1E3A8A] to-[#1E40AF]",
	},
];

const ComparisonCard: React.FC<{
	comparison: (typeof comparisons)[0];
	index: number;
}> = ({ comparison }) => {
	const IconComponent = comparison.icon;

	return (
		<div className="bg-[#111827]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#1E3A8A]/30 hover:border-[#2563EB]/60 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300">
			<div className="flex items-center gap-4 mb-6">
				<div
					className={`w-14 h-14 rounded-xl bg-linear-to-br ${comparison.gradient} flex items-center justify-center shadow-lg`}>
					<IconComponent className="w-7 h-7 text-white" />
				</div>
				<h3 className="text-2xl font-bold text-white">
					{comparison.title}
				</h3>
			</div>

			<p className="text-[#CBD5E1] leading-relaxed mb-6">
				{comparison.description}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div className="bg-[#064E3B]/40 border border-[#10B981]/30 rounded-xl p-4">
					<div className="flex items-center gap-2 mb-2">
						<Check className="w-5 h-5 text-[#34D399]" />
						<span className="text-sm font-semibold text-[#34D399] uppercase tracking-wide">
							With Standeva
						</span>
					</div>
					<p className="text-lg font-bold text-white">
						{comparison.withStandeva}
					</p>
				</div>

				<div className="bg-[#7F1D1D]/30 border border-[#DC2626]/30 rounded-xl p-4">
					<div className="flex items-center gap-2 mb-2">
						<X className="w-5 h-5 text-[#F87171]" />
						<span className="text-sm font-semibold text-[#F87171] uppercase tracking-wide">
							Building Yourself
						</span>
					</div>
					<p className="text-lg font-bold text-white">
						{comparison.buildingYourself}
					</p>
				</div>
			</div>
		</div>
	);
};

const WhyChooseUs: React.FC = () => {
	return (
		<section className="py-20 bg-[linear-gradient(135deg,#0B0F19_0%,#0C2258_50%,#0B0F19_100%)] text-white">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-[#60A5FA] font-semibold mb-4">
						THE STANDEVA ADVANTAGE
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Why Choose Our APIs?
					</h2>
					<p className="text-lg text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">
						Building features from scratch is expensive and
						time-consuming. Our APIs give you production-ready
						solutions that integrate in minutes, not months.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
					{comparisons.map((comparison, index) => (
						<ComparisonCard
							key={comparison.id}
							comparison={comparison}
							index={index}
						/>
					))}
				</div>

				<div className="text-center">
					<div className="p-8 bg-[linear-gradient(135deg,#111827_0%,#1E3A8A_100%)] rounded-2xl max-w-4xl mx-auto border border-[#2563EB]/30 hover:border-[#2563EB]/60 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300">
						<h3 className="text-2xl font-bold mb-4 text-white">
							Stop building what already exists
						</h3>
						<p className="text-base text-[#CBD5E1] mb-6 max-w-2xl mx-auto">
							Focus on your core product while we handle the
							infrastructure. Get started with our APIs in
							minutes.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<PrimaryButton className="text-base px-8 py-4 bg-[#2563EB] hover:bg-[#1E40AF] rounded-xl transition">
								Browse API Catalog
							</PrimaryButton>
							<SecondaryButton className="text-base px-8 py-4 border border-[#2563EB]/40 hover:bg-[#2563EB]/10 rounded-xl transition">
								Talk to Engineering
							</SecondaryButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
