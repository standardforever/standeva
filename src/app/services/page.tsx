import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";
import ServicesHero from "@/components/services/services-hero";
import ServicesTransitionOverlay from "@/components/services/services-transition-overlay";

export const metadata = {
	title: "Our Services Process Zero | AI Automation & Transformation",
	description:
		"Process Zero's four-part service framework: AI Process Audit, Transformation Partner, Implementation Partner, and Ongoing Maintenance. Results-based pricing with 33% of savings model.",
};

export default function ServicesPage() {
	const navItems = [
		{ label: "overview", href: "#overview" },
		{ label: "process audit", href: "#process-audit" },
		{ label: "transformation", href: "#transformation" },
		{ label: "implementation", href: "#implementation" },
		{ label: "maintenance", href: "#maintenance" },
	];

	const cta = {
		label: "free 60 min discovery call",
		href: "/intro-call",
	};

	return (
		<main className="min-h-screen w-full overflow-x-hidden bg-black">
			<SecondaryHeader navItems={navItems} cta={cta} />
			<div className="w-full pt-16 sm:pt-20">
				<ServicesHero />
				<ServicesTransitionOverlay />
			</div>
			<SecondaryFooter />
		</main>
	);
}
