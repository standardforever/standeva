"use client";

import React from "react";
// import OurStorySection from "./our-story-section";
import MissionSection from "./mission-section";
// import ValuesSection from "./values-section";
import WhatMakesUsDifferent from "./what-makes-us-different";
import HowWeWorkSection from "./how-we-work-section";
// import SuccessMetricsSection from "./success-metrics-section";
import EarlyPartnersCTA from "./early-partners-cta";
import PricingSection from "../landing/act-section";
import WhatWeAutomate from "./what-we-automate";

const AboutTransitionOverlay: React.FC = () => {
	return (
		<>
			<WhatMakesUsDifferent />
			<HowWeWorkSection />
			<WhatWeAutomate />
			<PricingSection />
			<MissionSection />
			<EarlyPartnersCTA />
			{/* <OurStorySection /> */}
			{/* <ValuesSection /> */}
			{/* <SuccessMetricsSection /> */}
		</>
	);
};

export default AboutTransitionOverlay;
