"use client";

import React from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";

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
				title: "core platform",
				items: [
					// All platform pages not implemented yet
					// { label: "API Gateway", href: "/platform/api-gateway" },
					// { label: "Model Hub", href: "/platform/model-hub" },
					// { label: "Analytics", href: "/platform/analytics" },
					// { label: "Dashboard", href: "/platform/dashboard" },
				],
			},
			{
				title: "apis",
				items: [
					// All API pages not implemented yet
					// { label: "Sourceora API", href: "/apis/sourceora" },
					// { label: "AI/ML API", href: "/apis/ai-ml" },
					// {
					// 	label: "Speech-to-Text API",
					// 	href: "/apis/speech-to-text",
					// },
					// {
					// 	label: "Image Generation API",
					// 	href: "/apis/image-generation",
					// },
					// {
					// 	label: "Prompt Optimization",
					// 	href: "/apis/prompt-optimization",
					// },
				],
			},
			{
				title: "tools",
				items: [
					// All tool pages not implemented yet
					// { label: "Playground", href: "/tools/playground" },
					// { label: "Testing Suite", href: "/tools/testing" },
					// { label: "Monitoring", href: "/tools/monitoring" },
				],
			},
		],
		featured: {
			title: "coming soon 🚀",
			description:
				"Our powerful platform features are being built. Stay tuned for updates on our API gateway, model hub, and analytics tools.",
			image: "📦",
			link: "#",
		},
	},
	Solutions: {
		sections: [
			{
				title: "services",
				items: [
					{ label: "ai consulting", href: "/solutions/ai-consulting" },
					// { label: "Process Zero", href: "/solutions/process-zero" }, // Not implemented yet
				],
			},
			{
				title: "by industry",
				items: [
					// Industry pages not implemented yet
					// { label: "Healthcare", href: "/solutions/healthcare" },
					// { label: "Finance", href: "/solutions/finance" },
					// { label: "Sales Plus", href: "/solutions/sales-plus" },
					// { label: "Education", href: "/solutions/education" },
				],
			},
			{
				title: "by use case",
				items: [
					// Use case pages not implemented yet
					// { label: "Content Generation", href: "/use-cases/content" },
					// { label: "Data Analysis", href: "/use-cases/analysis" },
					// { label: "Automation", href: "/use-cases/automation" },
				],
			},
		],
		featured: {
			title: "ai consulting services",
			description:
				"Explore our expert AI consulting services to help your business navigate AI adoption and implementation.",
			image: "🏢",
			link: "/solutions/ai-consulting",
		},
	},
	Developers: {
		sections: [
			{
				title: "resources",
				items: [
					// Documentation pages not implemented yet
					// { label: "Documentation", href: "/docs" },
					// { label: "API Reference", href: "/docs/api" },
					// { label: "SDKs", href: "/docs/sdks" },
					// { label: "Tutorials", href: "/docs/tutorials" },
				],
			},
			{
				title: "community",
				items: [
					// Community links external
					// { label: "Discord", href: "https://discord.gg/standeva" },
					// { label: "GitHub", href: "https://github.com/standeva" },
					// {
					// 	label: "Stack Overflow",
					// 	href: "https://stackoverflow.com",
					// },
				],
			},
		],
		featured: {
			title: "developer resources coming soon",
			description:
				"We're building comprehensive documentation, SDKs, and developer tools. Check back soon for updates.",
			image: "⚡",
			link: "#",
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
					<motion.div
						variants={overlayVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						onClick={onClose}
						className="fixed top-20 left-0 right-0 bottom-0 z-40 bg-black/40 backdrop-blur-sm"
					/>
					<motion.div
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						className="fixed top-20 left-0 right-0 z-50 border-b border-blue-500/20 bg-slate-950/95 shadow-2xl">
						<div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row">
							<div className="grid flex-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
								{currentContent.sections.map((section, sectionIndex) => (
									<div key={section.title} className="flex flex-col gap-3">
										<p className="text-xs font-semibold tracking-[0.3em] text-slate-400">
											{section.title}
										</p>
										{section.items.map((item, itemIndex) => (
											<motion.a
												key={item.label}
												href={item.href}
												variants={itemVariants}
												custom={sectionIndex * section.items.length + itemIndex}
												whileHover={{ x: 4 }}
												className="block rounded-lg border-b border-white/5 px-2 py-2 text-sm font-semibold text-slate-100 transition last:border-b-0 hover:bg-white/5 hover:text-blue-400">
												{item.label}
											</motion.a>
										))}
									</div>
								))}
							</div>

							<div className="flex w-full max-w-sm flex-col gap-3 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 text-white">
								<p className="text-xs font-semibold tracking-[0.3em] text-slate-300">
									latest
								</p>
								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="flex flex-col gap-4">
									<div className="flex h-28 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-3xl">
										{currentContent.featured.image}
									</div>
									<h4 className="text-lg font-semibold">
										{currentContent.featured.title}
									</h4>
									<p className="text-sm text-slate-200">
										{currentContent.featured.description}
									</p>
									<a
										href={currentContent.featured.link}
										className="text-sm font-semibold text-blue-400 transition hover:text-blue-300">
										Read more →
									</a>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};
