import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";
import AboutUsHero from "@/components/about-us/about-hero";
import AboutTransitionOverlay from "@/components/about-us/about-transition-overlay";

export const metadata = {
	title: "About Us - ProcessZero | Your Trusted AI Automation Partner",
	description:
		"Learn about ProcessZero's mission to help organisations eliminate repetitive work through secure, on-premise AI automation with up to 90% cost reduction.",
};

export default function AboutUsPage() {
	const navItems = [
		{ label: "Overview", href: "#overview" },
		{ label: "Our Story", href: "#story" },
		{ label: "Mission", href: "#mission" },
		{ label: "Values", href: "#values" },
		{ label: "How We Work", href: "#how-we-work" },
		{ label: "Partnership", href: "#partnership" },
	];

	const cta = {
		label: "Book Free AI Audit",
		href: "#partnership",
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
