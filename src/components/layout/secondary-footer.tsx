"use client";

import React from "react";
import Link from "next/link";
import Logo from "./logo";

const footerSections = [
	{
		title: "company",
		links: [
			{ name: "about us", href: "/about-us" },
			{ name: "blog", href: "/blog" },
			{ name: "contact us", href: "/contact" },
			// { name: "Resources", href: "/resources" }, // Not implemented yet
			// { name: "Careers", href: "/careers" }, // Not implemented yet
		],
	},
	// {
	// 	title: "ai development",
	// 	links: [
	// 		// All AI development service pages not implemented yet
	// 		// { name: "AI Development Services", href: "/services/ai-development" },
	// 		// { name: "Enterprise AI Development", href: "/services/enterprise-ai" },
	// 		{
	// 			name: "ai consulting services",
	// 			href: "/solutions/ai-consulting",
	// 		}, // Implemented
	// 		// { name: "Computer Vision Development", href: "/services/computer-vision" },
	// 		// { name: "ML Development", href: "/services/ml-development" },
	// 	],
	// },
	{
		title: "legal",
		links: [
			{ name: "gdpr & privacy", href: "/legal/gdpr" },
			// { name: "Privacy Policy", href: "/legal/privacy" }, // Not implemented yet
			// { name: "Terms of Service", href: "/legal/terms" }, // Not implemented yet
			// { name: "Cookie Policy", href: "/legal/cookies" }, // Not implemented yet
		],
	},
	// {
	// 	title: "Agentic AI",
	// 	links: [
	// 		// All agentic AI pages not implemented yet
	// 		// { name: "AI Agent Development", href: "/solutions/ai-agents" },
	// 		// { name: "Enterprise AI Chatbot", href: "/solutions/enterprise-chatbot" },
	// 		// { name: "AI Chatbot Development", href: "/solutions/chatbot" },
	// 		// { name: "AI Copilot Development", href: "/solutions/copilot" },
	// 		// { name: "Conversational AI", href: "/solutions/conversational-ai" },
	// 	],
	// },
	// {
	// 	title: "Industries",
	// 	links: [
	// 		// All industry pages not implemented yet
	// 		// { name: "Manufacturing", href: "/industries/manufacturing" },
	// 		// { name: "Healthcare", href: "/industries/healthcare" },
	// 		// { name: "Insurance", href: "/industries/insurance" },
	// 		// { name: "Construction", href: "/industries/construction" },
	// 		// { name: "Real Estate", href: "/industries/real-estate" },
	// 	],
	// },
	// {
	// 	title: "Generative AI",
	// 	links: [
	// 		// All generative AI pages not implemented yet
	// 		// { name: "Generative AI Development", href: "/solutions/generative-ai" },
	// 		// { name: "Generative AI Consulting", href: "/services/generative-ai-consulting" },
	// 		// { name: "LLM Development", href: "/solutions/llm-development" },
	// 		// { name: "ChatGPT Developers", href: "/solutions/chatgpt-developers" },
	// 	],
	// },
];

const SecondaryFooter: React.FC = () => {
	return (
		<footer className="bg-slate-900 text-white border-t-2 border-gradient-to-r from-blue-500 to-purple-600">
			<div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12">
					<div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
						<div className="mb-4">
							<Logo size="md" wordmarkClassName="text-white" />
						</div>
						<p className="text-slate-400 text-sm leading-relaxed mb-4">
							Building scalable AI solutions that empower
							enterprises to automate, adapt, and accelerate.
						</p>
						<p className="text-slate-400 text-xs leading-relaxed">
							15-17 Strixton Manor Business Centre,
							<br />
							Strixton, Northamptonshire, NN29 7PA
						</p>
					</div>

					{footerSections.map((section, index) => (
						<div key={index}>
							<h3 className="font-semibold text-white mb-4 text-sm">
								{section.title}
							</h3>
							<ul className="space-y-2">
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<Link
											href={link.href}
											className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-slate-400 text-sm">
						© 2025 Process Zero. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default SecondaryFooter;
