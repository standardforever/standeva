"use client";

import React from "react";
import OurStorySection from "./our-story-section";
import MissionSection from "./mission-section";
import ValuesSection from "./values-section";
import WhatMakesUsDifferent from "./what-makes-us-different";
import HowWeWorkSection from "./how-we-work-section";
import SuccessMetricsSection from "./success-metrics-section";
import EarlyPartnersCTA from "./early-partners-cta";

const AboutTransitionOverlay: React.FC = () => {
	return (
		<>
			<OurStorySection />
			<MissionSection />
			<ValuesSection />
			<WhatMakesUsDifferent />
			<HowWeWorkSection />
			<SuccessMetricsSection />
			<EarlyPartnersCTA />
		</>
	);
};

export default AboutTransitionOverlay;
