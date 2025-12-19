"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProblemSection from "@/components/landing/problem-section";
import SolutionsSection from "@/components/landing/solutions-section";
import BeforeAfterSection from "@/components/landing/before-after-section";
import PricingSection from "@/components/landing/pricing-section";
import FounderMissionSection from "@/components/landing/founder-mission-section";
import OurProcess from "@/components/landing/our-process";
import WhyChooseUs from "@/components/landing/why-choose-us";
import Faq from "@/components/landing/faq";
import CtaSection from "@/components/landing/cta-section";
import SoftwareConnect from "../landing/software-connect";
import ActSection from "@/components/landing/act-section";

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
			<SoftwareConnect />
			<ProblemSection />
			<SolutionsSection />
			<WhyChooseUs />
			<BeforeAfterSection />
			<ActSection />
			<FounderMissionSection />
			<OurProcess />
			<PricingSection />
			<Faq />
			<CtaSection />
		</>
	);
};

export default TransitionOverlay;
