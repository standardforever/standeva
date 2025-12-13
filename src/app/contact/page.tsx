import SecondaryFooter from "@/components/layout/secondary-footer";
import SecondaryHeader from "@/components/layout/secondary-header";
import ContactFormSection from "@/components/contact/contact-form-section";
import ContactHero from "@/components/contact/contact-hero";

export const metadata = {
	title: "Contact Us - ProcessZero | Strixton Manor Business Centre",
	description:
		"Contact ProcessZero to discuss automation projects, AI agents, and discovery workshops. Visit us at Strixton Manor Business Centre, Northamptonshire.",
};

export default function ContactPage() {
	const cta = {
		label: "15 min intro call",
		href: "/intro-call",
	};

	return (
		<main className="min-h-screen w-full overflow-x-hidden bg-black">
			<SecondaryHeader navItems={[]} cta={cta} />
			<div className="w-full pt-16 sm:pt-20">
				<ContactHero />
				<ContactFormSection />
			</div>
			<SecondaryFooter />
		</main>
	);
}
