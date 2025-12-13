import SecondaryHeader from "@/components/layout/secondary-header";
import Hero from "@/components/landing/hero/hero";
import SecondaryFooter from "@/components/layout/secondary-footer";
import TransitionOverlay from "@/components/transition/transition-overlay";

export default function Home() {
	const navItems = [
		{ label: "home", href: "/" },
		{ label: "solutions", href: "#solutions" },
		{ label: "services", href: "/services" },
		{ label: "pricing", href: "#pricing" },
		{ label: "about us", href: "/about-us" },
		{ label: "contact", href: "/contact" },
	];

	const cta = {
		label: "15 min intro call",
		href: "/intro-call",
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
