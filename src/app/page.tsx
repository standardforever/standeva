import SecondaryHeader from "@/components/layout/secondary-header";
import Hero from "@/components/landing/hero/hero";
import SecondaryFooter from "@/components/layout/secondary-footer";
import TransitionOverlay from "@/components/transition/transition-overlay";

export default function Home() {
	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Solutions", href: "#solutions" },
		{ label: "Services", href: "/services" },
		{ label: "Pricing", href: "#pricing" },
		{ label: "About Us", href: "/about-us" },
	];

	const cta = {
		label: "Book Free AI Audit",
		href: "#pricing",
	};

	return (
		<main className="min-h-screen w-full overflow-x-hidden bg-black">
			<SecondaryHeader navItems={navItems} cta={cta} />
			<div className="w-full pt-16 sm:pt-20">
				<Hero />
				<TransitionOverlay />
			</div>
			<SecondaryFooter />
		</main>
	);
}
