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
	title: "Affiliate Programme - ProcessZero AI",
	description:
		"Partner with ProcessZero to offer AI automation your clients need while unlocking new, recurring revenue streams for your business.",
};

const AffiliatePage = () => {
	const navItems = [
		{ label: "overview", href: "#affiliate-overview" },
		{ label: "solutions", href: "#affiliate-solutions" },
		{ label: "why processzero", href: "#affiliate-why-ProcessZero" },
		{ label: "before vs after", href: "#affiliate-before-after" },
		{ label: "pricing", href: "#affiliate-pricing" },
	];

	return (
		<main className="min-h-screen bg-black overflow-x-hidden w-full">
			<SecondaryHeader
				navItems={navItems}
				cta={{ label: "become a partner", href: "#affiliate-cta" }}
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
