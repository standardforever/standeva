"use client";

import React from "react";
import { ArrowRight, Zap, Wrench, Shield } from "lucide-react";
import { TertiaryButton } from "@/components/ui/buttons";

const CTASection: React.FC = () => {
	return (
		<section className="py-20 bg-[linear-gradient(135deg,#0B0F19_0%,#0C2258_50%,#0B0F19_100%)] text-white">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent leading-tight">
						Ready to Ship Faster?
					</h2>
					<p className="text-xl text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">
						Choose your path: Integrate ready-made APIs in minutes
						or let us build a custom solution for you.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
					<TertiaryButton className="group w-full sm:w-auto px-8 py-4 bg-[#2563EB] hover:bg-[#1E40AF] flex items-center justify-center gap-3 text-base rounded-xl transition">
						<Zap size={20} />
						<span>Browse Ready APIs</span>
						<ArrowRight
							size={16}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</TertiaryButton>

					<TertiaryButton className="group w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-3 text-base rounded-xl border border-[#3B82F6]/30 hover:bg-[#2563EB]/10 transition">
						<Wrench size={20} />
						<span>Request Custom Solution</span>
						<ArrowRight
							size={16}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</TertiaryButton>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					<div className="text-center p-6 bg-[#111827]/70 backdrop-blur-sm rounded-2xl border border-[#1E3A8A]/30 hover:border-[#2563EB]/60 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition">
						<div className="w-16 h-16 bg-linear-to-br from-[#3B82F6] to-[#2563EB] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
							<Zap size={24} className="text-white" />
						</div>
						<h3 className="text-xl font-semibold mb-2">
							Instant Integration
						</h3>
						<p className="text-[#CBD5E1] text-base">
							Production-ready APIs that integrate in minutes
						</p>
					</div>

					<div className="text-center p-6 bg-[#111827]/70 backdrop-blur-sm rounded-2xl border border-[#1E3A8A]/30 hover:border-[#2563EB]/60 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition">
						<div className="w-16 h-16 bg-linear-to-br from-[#2563EB] to-[#1D4ED8] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
							<Wrench size={24} className="text-white" />
						</div>
						<h3 className="text-xl font-semibold mb-2">
							Custom Solutions
						</h3>
						<p className="text-[#CBD5E1] text-base">
							Tailored APIs built by expert engineers
						</p>
					</div>

					<div className="text-center p-6 bg-[#111827]/70 backdrop-blur-sm rounded-2xl border border-[#1E3A8A]/30 hover:border-[#2563EB]/60 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition">
						<div className="w-16 h-16 bg-linear-to-br from-[#1E40AF] to-[#1D4ED8] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
							<Shield size={24} className="text-white" />
						</div>
						<h3 className="text-xl font-semibold mb-2">
							Enterprise Ready
						</h3>
						<p className="text-[#CBD5E1] text-base">
							99.9% uptime SLA and dedicated support
						</p>
					</div>
				</div>

				<div className="text-center mt-16">
					<p className="text-base text-[#CBD5E1] mb-4">
						Have questions? Our team is ready to help you choose the
						right solution.
					</p>
					<TertiaryButton className="px-6 py-3 text-base border border-[#3B82F6]/40 hover:bg-[#2563EB]/20 transition rounded-xl">
						Talk to an Engineer
					</TertiaryButton>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
