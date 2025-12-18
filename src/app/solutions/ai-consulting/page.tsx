import React from "react";
import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";
import ConsultingHero from "@/components/solutions/ai-consulting/consulting-hero";
// import ConsultingIntro from "@/components/solutions/ai-consulting/consulting-intro";
import WhatWeOffer from "@/components/solutions/ai-consulting/what-we-offer";
import InternalAISolutions from "@/components/solutions/ai-consulting/internal-ai-solutions";
import WhyClickbuy from "@/components/solutions/ai-consulting/why-clickbuy";
import TechnologyPartners from "@/components/solutions/ai-consulting/technology-partners";
import FAQSection from "@/components/solutions/ai-consulting/faq-section";
import BlogPreview from "@/components/solutions/ai-consulting/blog-preview";
import FinalCTA from "@/components/solutions/ai-consulting/final-cta";
import { getBlogPostsData } from "@/lib/blog-data";

export const metadata = {
	title: "AI Consulting Services Process Zero | Expert AI Strategy & Implementation",
	description:
		"Navigate AI's complexities with Process Zero's expert consulting services. We help you identify strategic opportunities, optimize performance, and ensure compliance for seamless AI adoption.",
};

export default async function AIConsultingPage() {
	const blogPosts = (await getBlogPostsData()).slice(0, 4);
	const navItems = [
		{ label: "overview", href: "#consulting-overview" },
		{ label: "services", href: "#consulting-services" },
		{ label: "internal ai", href: "#internal-ai" },
		{ label: "why process zero", href: "#why-process-zero" },
		{ label: "partners", href: "#partners" },
		{ label: "faq", href: "#consulting-faq" },
		{ label: "blog", href: "/blog" }
	];

	return (
		<main className="min-h-screen bg-black overflow-x-hidden w-full">
			<SecondaryHeader
				navItems={navItems}
				cta={{ label: "book consultation", href: "#consulting-cta" }}
			/>
			<div className="w-full pt-16 sm:pt-20">
				<ConsultingHero />
				{/* <ConsultingIntro /> */}
				<WhatWeOffer />
				<InternalAISolutions />
				<WhyClickbuy />
				<TechnologyPartners />
				<FAQSection />
				<BlogPreview posts={blogPosts} />
				<FinalCTA />
			</div>
			<SecondaryFooter />
		</main>
	);
}
