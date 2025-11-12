"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const footerSections = [
	{
		title: "Company",
		links: [
			{ name: "About us", href: "/company/about" },
			{ name: "Blog", href: "/blog" },
			{ name: "Resources", href: "/resources" },
			{ name: "Careers", href: "/careers" },
			{ name: "Contact us", href: "/contact" },
		],
	},
	{
		title: "AI Development",
		links: [
			{ name: "AI Development Services", href: "/services/ai-development" },
			{ name: "Enterprise AI Development", href: "/services/enterprise-ai" },
			{ name: "AI Consulting Services", href: "/services/ai-consulting" },
			{ name: "Computer Vision Development", href: "/services/computer-vision" },
			{ name: "ML Development", href: "/services/ml-development" },
		],
	},
	{
		title: "Agentic AI",
		links: [
			{ name: "AI Agent Development", href: "/solutions/ai-agents" },
			{ name: "Enterprise AI Chatbot", href: "/solutions/enterprise-chatbot" },
			{ name: "AI Chatbot Development", href: "/solutions/chatbot" },
			{ name: "AI Copilot Development", href: "/solutions/copilot" },
			{ name: "Conversational AI", href: "/solutions/conversational-ai" },
		],
	},
	{
		title: "Industries",
		links: [
			{ name: "Manufacturing", href: "/industries/manufacturing" },
			{ name: "Healthcare", href: "/industries/healthcare" },
			{ name: "Insurance", href: "/industries/insurance" },
			{ name: "Construction", href: "/industries/construction" },
			{ name: "Real Estate", href: "/industries/real-estate" },
		],
	},
	{
		title: "Generative AI",
		links: [
			{ name: "Generative AI Development", href: "/solutions/generative-ai" },
			{ name: "Generative AI Consulting", href: "/services/generative-ai-consulting" },
			{ name: "LLM Development", href: "/solutions/llm-development" },
			{ name: "ChatGPT Developers", href: "/solutions/chatgpt-developers" },
		],
	},
];

const SecondaryFooter: React.FC = () => {
	return (
		<footer className="bg-slate-900 text-white border-t-2 border-gradient-to-r from-blue-500 to-purple-600">
			<div className="container mx-auto px-6 py-12">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
					<div className="col-span-2 md:col-span-3 lg:col-span-1">
						<div className="flex items-center gap-2 mb-4">
							<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-lg">S</span>
							</div>
							<span className="text-xl font-bold">Standeva</span>
						</div>
						<p className="text-slate-400 text-sm leading-relaxed mb-4">
							Building scalable AI solutions that empower enterprises to automate, adapt, and accelerate.
						</p>
						<p className="text-slate-400 text-sm">
							hello@standeva.com
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

				<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-slate-400 text-sm">
						© 2025 Standeva. All rights reserved.
					</p>

					<div className="flex items-center gap-4">
						<Link href="/privacy" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
							Privacy
						</Link>
						<Link href="/terms" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
							Terms
						</Link>
						<a
							href="#"
							className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
							<Linkedin size={16} />
						</a>
						<a
							href="#"
							className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
							<Github size={16} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default SecondaryFooter;
