"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Services from "@/components/landing/services";
// import FeaturedAPIs from "@/components/landing/featured-apis"; // Commented out as requested
import OurProcess from "@/components/landing/our-process";
import WhyChooseUs from "@/components/landing/why-choose-us";
import UseCases from "@/components/landing/use-cases";
import SuccessStories from "@/components/landing/success-stories";
import Faq from "@/components/landing/faq";
import CtaSection from "@/components/landing/cta-section";
import Footer from "@/components/landing/footer";
// import Process from "@/components/landing/process";
// import TrainingPrograms from "@/components/landing/training-programs";

gsap.registerPlugin(ScrollTrigger);

const TransitionOverlay: React.FC = () => {
	useEffect(() => {
		// Set initial body background
		gsap.set("body", { backgroundColor: "#0f172a" });

		// Smooth bidirectional background color transitions
		ScrollTrigger.create({
			trigger: ".services-section",
			start: "top 70%",
			end: "top 30%",
			onEnter: () => {
				gsap.to("body", {
					backgroundColor: "#ffffff",
					duration: 1.5,
					ease: "power2.out",
				});
			},
			onLeaveBack: () => {
				gsap.to("body", {
					backgroundColor: "#0f172a",
					duration: 1.5,
					ease: "power2.out",
				});
			},
		});

		ScrollTrigger.create({
			trigger: ".success-stories-section",
			start: "top 70%",
			end: "top 30%",
			onEnter: () => {
				gsap.to("body", {
					backgroundColor: "#1e293b",
					duration: 1.5,
					ease: "power2.out",
				});
			},
			onLeaveBack: () => {
				gsap.to("body", {
					backgroundColor: "#ffffff",
					duration: 1.5,
					ease: "power2.out",
				});
			},
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<>
			<Services />
			{/* <FeaturedAPIs /> */}
			<OurProcess />
			{/* <Process /> */}
			<WhyChooseUs />
			<UseCases />
			<SuccessStories />
			{/* <TrainingPrograms /> */}
			<Faq />
			<CtaSection />
			<Footer />
		</>
	);
};

export default TransitionOverlay;
