import type { Metadata } from "next";
import SecondaryHeader from "@/components/layout/secondary-header";
import AffiliateHero from "@/components/affiliate/affiliate-hero";
import AffiliateSolutions from "@/components/affiliate/affiliate-solutions";
import AffiliateBeforeAfter from "@/components/affiliate/affiliate-before-after";
import AffiliateWhyClickbuy from "@/components/affiliate/affiliate-why-clickbuy";
import AffiliatePricing from "@/components/affiliate/affiliate-pricing";
import AffiliateCta from "@/components/affiliate/affiliate-cta";
import SecondaryFooter from "@/components/layout/secondary-footer";

export const metadata: Metadata = {
	title: "Affiliate Programme - Clickbuy AI",
	description:
		"Partner with Clickbuy to offer AI automation your clients need while unlocking new, recurring revenue streams for your business.",
};

const AffiliatePage = () => {
	const navItems = [
		{ label: "Overview", href: "#affiliate-overview" },
		{ label: "Solutions", href: "#affiliate-solutions" },
		{ label: "Why Clickbuy", href: "#affiliate-why-clickbuy" },
		{ label: "Before vs After", href: "#affiliate-before-after" },
		{ label: "Pricing", href: "#affiliate-pricing" },
	];

	return (
		<main className="min-h-screen bg-black overflow-x-hidden w-full">
			<SecondaryHeader
				navItems={navItems}
				cta={{ label: "Become a Partner", href: "#affiliate-cta" }}
			/>
			<div className="w-full pt-16 sm:pt-20">
				<AffiliateHero />
				<AffiliateSolutions />
				<AffiliateWhyClickbuy />
				<AffiliateBeforeAfter />
				<AffiliatePricing />
				<AffiliateCta />
			</div>
			<SecondaryFooter />
		</main>
	);
};

export default AffiliatePage;
