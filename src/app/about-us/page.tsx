import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";
import AboutUsHero from "@/components/about-us/about-hero";
import AboutTransitionOverlay from "@/components/about-us/about-transition-overlay";

export const metadata = {
	title: "About Us Process Zero | Your Trusted AI Automation Partner",
	description:
		"Learn about Process Zero's mission to help organisations eliminate repetitive work through secure, on-premise AI automation with up to 90% cost reduction.",
};

export default function AboutUsPage() {
	const navItems = [
		{ label: "overview", href: "#overview" },
		{ label: "our story", href: "#story" },
		{ label: "mission", href: "#mission" },
		{ label: "values", href: "#values" },
		{ label: "how we work", href: "#how-we-work" },
		{ label: "partnership", href: "#partnership" },
	];

	const cta = {
		label: "free 60 min discovery call",
		href: "/intro-call",
	};

	return (
		<main className="min-h-screen w-full overflow-x-hidden bg-black">
			<SecondaryHeader navItems={navItems} cta={cta} />
			<div className="w-full pt-16 sm:pt-20">
				<AboutUsHero />
				<AboutTransitionOverlay />
			</div>
			<SecondaryFooter />
		</main>
	);
}
