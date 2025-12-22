"use client";

import React from "react";
import ServiceFrameworkSection from "./service-framework-section";
// import ServicePricingAdvantage from "./service-pricing-advantage";
import ServicesCTA from "./services-cta";
import PricingSection from "../landing/pricing-section";

const ServicesTransitionOverlay: React.FC = () => {
	return (
		<>
			<ServiceFrameworkSection />
			<PricingSection />
			<ServicesCTA />
		</>
	);
};

export default ServicesTransitionOverlay;
