"use client";

import React from "react";
import { AnimatePresence, Variants } from "framer-motion";
import {
	DropdownOverlay,
	DropdownContainer,
	DropdownContent,
	DropdownSection,
	DropdownLabel,
	DropdownItem,
	FeaturedCard,
	FeaturedCardTitle,
	FeaturedCardDescription,
	FeaturedCardImage,
	ReadMoreLink,
} from "./header.styles";

interface DropdownItemData {
	label: string;
	href: string;
}

interface DropdownSectionType {
	title: string;
	items: DropdownItemData[];
}

interface DropdownGroup {
	sections: DropdownSectionType[];
	featured: {
		title: string;
		description: string;
		image: string;
		link: string;
	};
}

type DropdownContentMap = Record<
	"Platform" | "Solutions" | "Developers",
	DropdownGroup
>;

interface DropdownProps {
	isOpen: boolean;
	activeItem: keyof DropdownContentMap | null;
	onClose: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

const overlayVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.2 } },
	exit: { opacity: 0, transition: { duration: 0.15 } },
};

const dropdownVariants: Variants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3, ease: "easeOut" },
	},
	exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const itemVariants: Variants = {
	hidden: { opacity: 0, x: -10 },
	visible: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: { delay: i * 0.05, duration: 0.2 },
	}),
};

const dropdownContent: DropdownContentMap = {
	Platform: {
		sections: [
			{
				title: "Core Platform",
				items: [
					{ label: "API Gateway", href: "/platform/api-gateway" },
					{ label: "Model Hub", href: "/platform/model-hub" },
					{ label: "Analytics", href: "/platform/analytics" },
					{ label: "Dashboard", href: "/platform/dashboard" },
				],
			},
			{
				title: "APIs",
				items: [
					{ label: "Sourceora API", href: "/apis/sourceora" },
					{ label: "AI/ML API", href: "/apis/ai-ml" },
					{
						label: "Speech-to-Text API",
						href: "/apis/speech-to-text",
					},
					{
						label: "Image Generation API",
						href: "/apis/image-generation",
					},
					{
						label: "Prompt Optimization",
						href: "/apis/prompt-optimization",
					},
				],
			},
			{
				title: "Tools",
				items: [
					{ label: "Playground", href: "/tools/playground" },
					{ label: "Testing Suite", href: "/tools/testing" },
					{ label: "Monitoring", href: "/tools/monitoring" },
				],
			},
		],
		featured: {
			title: "Sourceora API Launch 🚀",
			description:
				"Our powerful sourcing engine is now available via API. Connect, query, and automate product sourcing in real time.",
			image: "📦",
			link: "/apis/sourceora",
		},
	},
	Solutions: {
		sections: [
			{
				title: "Services",
				items: [
					{ label: "AI Consulting", href: "/solutions/ai-consulting" },
					{ label: "ClickBuy", href: "/solutions/clickbuy" },
				],
			},
			{
				title: "By Industry",
				items: [
					{ label: "Healthcare", href: "/solutions/healthcare" },
					{ label: "Finance", href: "/solutions/finance" },
					{ label: "E-commerce", href: "/solutions/ecommerce" },
					{ label: "Education", href: "/solutions/education" },
				],
			},
			{
				title: "By Use Case",
				items: [
					{ label: "Content Generation", href: "/use-cases/content" },
					{ label: "Data Analysis", href: "/use-cases/analysis" },
					{ label: "Automation", href: "/use-cases/automation" },
				],
			},
		],
		featured: {
			title: "Industry Solutions",
			description:
				"Discover how leading companies across industries are transforming with AI-powered solutions.",
			image: "🏢",
			link: "/case-studies",
		},
	},
	Developers: {
		sections: [
			{
				title: "Resources",
				items: [
					{ label: "Documentation", href: "/docs" },
					{ label: "API Reference", href: "/docs/api" },
					{ label: "SDKs", href: "/docs/sdks" },
					{ label: "Tutorials", href: "/docs/tutorials" },
				],
			},
			{
				title: "Community",
				items: [
					{ label: "Discord", href: "https://discord.gg/standeva" },
					{ label: "GitHub", href: "https://github.com/standeva" },
					{
						label: "Stack Overflow",
						href: "https://stackoverflow.com",
					},
				],
			},
		],
		featured: {
			title: "Developer Toolkit",
			description:
				"New SDKs, enhanced documentation, and developer-friendly tools to accelerate your integration.",
			image: "⚡",
			link: "/developer-toolkit",
		},
	},
};

export const Dropdown: React.FC<DropdownProps> = ({
	isOpen,
	activeItem,
	onClose,
	onMouseEnter,
	onMouseLeave,
}) => {
	if (!activeItem) return null;
	const currentContent = dropdownContent[activeItem];

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<DropdownOverlay
						variants={overlayVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						onClick={onClose}
					/>
					<DropdownContainer
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}>
						<DropdownContent>
							{currentContent.sections.map(
								(section, sectionIndex) => (
									<DropdownSection key={section.title}>
										<DropdownLabel>
											{section.title}
										</DropdownLabel>
										{section.items.map(
											(item, itemIndex) => (
												<DropdownItem
													key={item.label}
													href={item.href}
													variants={itemVariants}
													custom={
														sectionIndex *
															section.items
																.length +
														itemIndex
													}
													whileHover={{ x: 4 }}>
													{item.label}
												</DropdownItem>
											)
										)}
									</DropdownSection>
								)
							)}

							<div className="featured-block">
								<DropdownLabel>LATEST</DropdownLabel>
								<FeaturedCard
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}>
									<FeaturedCardImage>
										{currentContent.featured.image}
									</FeaturedCardImage>
									<FeaturedCardTitle>
										{currentContent.featured.title}
									</FeaturedCardTitle>
									<FeaturedCardDescription>
										{currentContent.featured.description}
									</FeaturedCardDescription>
									<ReadMoreLink
										href={currentContent.featured.link}>
										Read more
									</ReadMoreLink>
								</FeaturedCard>
							</div>
						</DropdownContent>
					</DropdownContainer>
				</>
			)}
		</AnimatePresence>
	);
};
