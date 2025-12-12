import React from "react";
import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";
import AboutHero from "@/components/company/about/about-hero";
import CoreSolutions from "@/components/company/about/core-solutions";
import FullStackSection from "@/components/company/about/full-stack-section";
import ApproachSection from "@/components/company/about/approach-section";
import CTASection from "@/components/company/about/cta-section";
import PerspectiveSection from "@/components/company/about/perspective-section";

export const metadata = {
	title: "About Us - ProcessZero | AI Solutions for Enterprise",
	description: "Learn about ProcessZero, a generative AI company driving innovation and efficiency through scalable AI solutions for enterprises.",
};

export default function AboutPage() {
	const navItems = [
		{ label: "overview", href: "#overview" },
		{ label: "core solutions", href: "#core-solutions" },
		{ label: "capabilities", href: "#capabilities" },
		{ label: "approach", href: "#approach" },
		{ label: "insights", href: "#insights" },
		{ label: "blog", href: "/blog" }
	];

	return (
		<main className="min-h-screen bg-black overflow-x-hidden w-full">
			<SecondaryHeader
				navItems={navItems}
				cta={{ label: "plan a call", href: "#contact" }}
			/>
			<div className="w-full pt-16 sm:pt-20">
				<AboutHero />
				<CoreSolutions />
				<FullStackSection />
				<ApproachSection />
				<CTASection />
				<PerspectiveSection />
			</div>
			<SecondaryFooter />
		</main>
	);
}
