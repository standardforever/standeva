"use client";

import React from "react";
import ServiceFrameworkSection from "./service-framework-section";
import ServicePricingAdvantage from "./service-pricing-advantage";
import ServicesCTA from "./services-cta";

const ServicesTransitionOverlay: React.FC = () => {
	return (
		<>
			<ServiceFrameworkSection />
			<ServicePricingAdvantage />
			<ServicesCTA />
		</>
	);
};

export default ServicesTransitionOverlay;
