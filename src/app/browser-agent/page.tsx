"use client";

import React from "react";
import Header from "@/components/browser-agent/header";
import Hero from "@/components/browser-agent/hero";
import ProblemSection from "@/components/browser-agent/problem-section";
import SolutionSection from "@/components/browser-agent/solution-section";
import FeaturesSection from "@/components/browser-agent/features-section";
import UseCasesSection from "@/components/browser-agent/use-cases-section";
import TestimonialsSection from "@/components/browser-agent/testimonials-section";
import FitSection from "@/components/browser-agent/fit-section";
import FAQSection from "@/components/browser-agent/faq-section";
import FinalCTA from "@/components/browser-agent/final-cta";
import Footer from "@/components/layout/secondary-footer";

const BrowserAgentPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-slate-950 overflow-x-hidden w-full">
			<Header />
			<main className="w-full">
				<Hero />
				<ProblemSection />
				<SolutionSection />
				<FeaturesSection />
				<UseCasesSection />
				<TestimonialsSection />
				<FitSection />
				<FAQSection />
				<FinalCTA />
			</main>
			<Footer />
		</div>
	);
};

export default BrowserAgentPage;
