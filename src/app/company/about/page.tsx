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
	title: "About Us - Clickbuy | AI Solutions for Enterprise",
	description: "Learn about Clickbuy, a generative AI company driving innovation and efficiency through scalable AI solutions for enterprises.",
};

export default function AboutPage() {
	const navItems = [
		{ label: "Overview", href: "#overview" },
		{ label: "Core Solutions", href: "#core-solutions" },
		{ label: "Capabilities", href: "#capabilities" },
		{ label: "Approach", href: "#approach" },
		{ label: "Insights", href: "#insights" },
		{ label: "Blog", href: "/blog" }
	];

	return (
		<main className="min-h-screen bg-black overflow-x-hidden w-full">
			<SecondaryHeader
				navItems={navItems}
				cta={{ label: "Plan a Call", href: "#contact" }}
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
