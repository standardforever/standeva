import Header from "@/components/landing/header/header";
import Hero from "@/components/landing/hero/hero";
import SecondaryFooter from "@/components/layout/secondary-footer";
import TransitionOverlay from "@/components/transition/transition-overlay";

export default function Home() {
	return (
		<div className="min-h-screen overflow-x-hidden">
			<Header />
			<main className="w-full">
				<Hero />
				<TransitionOverlay />
			</main>
			<SecondaryFooter />
		</div>
	);
}
