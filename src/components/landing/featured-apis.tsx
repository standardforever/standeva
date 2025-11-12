"use client";

import React from "react";
import {
	Package,
	Brain,
	// Lock,
	// Database,
	// Zap,
	ArrowRight,
	CheckCircle,
	ExternalLink,
} from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";

const featuredAPIs = [
	{
		id: "sourceora",
		name: "Sourceora API",
		tagline: "Product Sourcing Made Simple",
		description:
			"Automate product discovery and sourcing from multiple marketplaces with a single API call.",
		icon: Package,
		color: "from-blue-500 to-blue-600",
		features: [
			"Search across multiple suppliers",
			"Real-time pricing & availability",
			"Automated product matching",
			"Bulk import capabilities",
		],
		useCases: [
			"E-commerce platforms",
			"Dropshipping businesses",
			"Inventory management",
		],
		status: "Available",
		docsLink: "#",
		tryLink: "#",
	},
	{
		id: "ai-ml",
		name: "AI/ML APIs",
		tagline: "Intelligent Automation",
		description:
			"Access powerful AI models for text generation, image processing, and predictive analytics.",
		icon: Brain,
		color: "from-blue-600 to-blue-700",
		features: [
			"Natural language processing",
			"Image recognition & generation",
			"Sentiment analysis",
			"Predictive modeling",
		],
		useCases: ["SaaS applications", "Content platforms", "Analytics tools"],
		status: "Available",
		docsLink: "#",
		tryLink: "#",
	},
];

const FeaturedAPIs: React.FC = () => {
	return (
		<section className="featured-apis-section py-20 bg-linear-to-br from-white via-slate-50 to-blue-50">
			<div className="container mx-auto px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-4">
						FEATURED APIS
					</p>

					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
						Production-Ready APIs
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
						Battle-tested APIs trusted by developers. Integrate
						powerful features into your applications in minutes.
					</p>
				</div>

				{/* API Cards Grid */}
				<div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
					{featuredAPIs.map((api) => {
						const IconComponent = api.icon;

						return (
							<div
								key={api.id}
								className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200">
								{/* API Header */}
								<div className="flex items-start justify-between mb-6">
									<div className="flex items-center gap-4">
										<div
											className={`w-14 h-14 rounded-xl bg-linear-to-br ${api.color} flex items-center justify-center shadow-lg`}>
											<IconComponent className="w-7 h-7 text-white" />
										</div>
										<div>
											<h3 className="text-2xl font-bold text-slate-900 mb-1">
												{api.name}
											</h3>
											<p className="text-blue-600 text-sm font-medium">
												{api.tagline}
											</p>
										</div>
									</div>
									<span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full border border-green-200">
										{api.status}
									</span>
								</div>

								{/* Description */}
								<p className="text-slate-600 leading-relaxed mb-6">
									{api.description}
								</p>

								{/* Features */}
								<div className="mb-6">
									<h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
										Key Features
									</h4>
									<div className="grid grid-cols-2 gap-2">
										{api.features.map((feature, index) => (
											<div
												key={index}
												className="flex items-start gap-2">
												<CheckCircle
													size={16}
													className="text-green-600 shrink-0 mt-0.5"
												/>
												<span className="text-sm text-slate-600">
													{feature}
												</span>
											</div>
										))}
									</div>
								</div>

								{/* Use Cases */}
								<div className="mb-6">
									<h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
										Use Cases
									</h4>
									<div className="flex flex-wrap gap-2">
										{api.useCases.map((useCase, index) => (
											<span
												key={index}
												className="px-3 py-1 bg-blue-50 text-slate-700 text-xs rounded-full border border-blue-200">
												{useCase}
											</span>
										))}
									</div>
								</div>

								{/* Action Buttons */}
								<div className="flex gap-3 pt-4 border-t border-slate-200">
									<PrimaryButton className="flex-1 flex items-center justify-center gap-2 px-4 py-3">
										<span>View Docs</span>
										<ExternalLink size={16} />
									</PrimaryButton>
									<SecondaryButton className="flex-1 flex items-center justify-center gap-2 px-4 py-3">
										<span>Try Now</span>
										<ArrowRight size={16} />
									</SecondaryButton>
								</div>
							</div>
						);
					})}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-16">
					<p className="text-slate-600 mb-6 max-w-2xl mx-auto">
						Explore our complete API catalog or request a custom
						solution tailored to your needs
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<PrimaryButton>
							<span>Explore More APIs</span>
							<ArrowRight size={20} />
						</PrimaryButton>
						<SecondaryButton>
							Request Custom API Development
						</SecondaryButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedAPIs;
