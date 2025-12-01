import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";
import ServicesHero from "@/components/services/services-hero";
import ServicesTransitionOverlay from "@/components/services/services-transition-overlay";

export const metadata = {
	title: "Our Services - ProcessZero | AI Automation & Transformation",
	description:
		"ProcessZero's four-part service framework: AI Process Audit, Transformation Partner, Implementation Partner, and Ongoing Maintenance. Results-based pricing with 33% of savings model.",
};

export default function ServicesPage() {
	const navItems = [
		{ label: "Overview", href: "#overview" },
		{ label: "Process Audit", href: "#process-audit" },
		{ label: "Transformation", href: "#transformation" },
		{ label: "Implementation", href: "#implementation" },
		{ label: "Maintenance", href: "#maintenance" },
	];

	const cta = {
		label: "Book Free AI Audit",
		href: "#process-audit",
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
