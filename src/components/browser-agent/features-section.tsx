"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Mail, FileText, Download, Settings, BarChart3, Code, Users } from "lucide-react";

const FeaturesSection: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState("research");

	const categories = [
		{ id: "research", name: "Research & Lead Generation", icon: Search },
		{ id: "content", name: "Content & Communication", icon: Mail },
		{ id: "data", name: "Data & File Handling", icon: FileText },
		{ id: "automation", name: "App Automation", icon: Settings },
		{ id: "development", name: "App Development", icon: Code },
		{ id: "analytics", name: "Reporting & Analytics", icon: BarChart3 },
	];

	const features = {
		research: [
			"Scrape Google Maps, LinkedIn, or websites for leads",
			"Collect and enrich data into spreadsheets or CRMs",
			"Summarize competitor or market research instantly",
		],
		content: [
			"Send outreach emails, proposals, and reports",
			"Create blog outlines, presentations, and job descriptions",
			"Auto-format text for LinkedIn, websites, or internal docs",
		],
		data: [
			"Clean messy Excel sheets and databases",
			"Remove duplicates, organize files, rename in bulk",
			"Generate charts, dashboards, and reports automatically",
		],
		automation: [
			"Download and install apps automatically",
			"Launch and configure tools like Slack or Notion",
			"Automate browser navigation & form filling",
		],
		development: [
			"Generate boilerplate code and spin up prototypes fast",
			"Connect APIs and build simple internal tools automatically",
			"Test workflows without hiring extra devs",
		],
		analytics: [
			"Pull data from multiple sources into one dashboard",
			"Automate weekly/monthly reporting with charts & insights",
			"Get instant summaries for leadership decisions",
		],
	};

	const currentFeatures = features[activeCategory as keyof typeof features] || [];

	return (
		<section id="features" className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
						What can Process Zero Browser Agent do for you?
					</h2>
					<p className="mx-auto mt-6 text-xl text-slate-300">
						Automate the work you don&apos;t want to do
					</p>
				</motion.div>

				{/* Category Tabs */}
				<motion.div
					className="mt-12 flex flex-wrap justify-center gap-3"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					{categories.map((category) => {
						const IconComponent = category.icon;
						return (
							<motion.button
								key={category.id}
								onClick={() => setActiveCategory(category.id)}
								className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition ${
									activeCategory === category.id
										? "border-blue-500 bg-blue-500/10 text-white"
										: "border-white/10 bg-slate-900/50 text-slate-300 hover:border-blue-500/50"
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								<IconComponent className="h-4 w-4" />
								{category.name}
							</motion.button>
						);
					})}
				</motion.div>

				{/* Features Display */}
				<motion.div
					className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 backdrop-blur-sm"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.4 }}>
					<div className="grid gap-6 lg:grid-cols-2">
						<div>
							<div className="flex items-center gap-3">
								{(() => {
									const IconComponent = categories.find(c => c.id === activeCategory)?.icon || Search;
									return <IconComponent className="h-8 w-8 text-blue-400" />;
								})()}
								<h3 className="text-2xl font-bold text-white">
									{categories.find(c => c.id === activeCategory)?.name}
								</h3>
							</div>
							<p className="mt-4 text-slate-300">
								Let Process Zero handle these tasks automatically while you focus on what matters.
							</p>
						</div>

						<div className="space-y-4">
							{currentFeatures.map((feature, index) => (
								<motion.div
									key={index}
									className="flex items-start gap-3"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}>
									<div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
										<span className="text-xs font-bold text-blue-400">
											{String(index + 1).padStart(2, "0")}
										</span>
									</div>
									<p className="text-slate-200">{feature}</p>
								</motion.div>
							))}
						</div>
					</div>

					{/* Visual representation */}
					<motion.div
						className="mt-8 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.8 }}>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
									<Users className="h-6 w-6 text-white" />
								</div>
								<div>
									<p className="font-semibold text-white">30 day money back guarantee</p>
									<p className="text-sm text-slate-400">Try risk-free for 30 days</p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-600">
									<Download className="h-6 w-6 text-white" />
								</div>
								<div>
									<p className="font-semibold text-white">Start with Standeva.ai today</p>
									<p className="text-sm text-slate-400">No setup required</p>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Benefits Grid */}
				<motion.div
					className="mt-16 grid gap-6 md:grid-cols-3"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}>
					{[
						{
							title: "Beginner Friendly",
							description: "No technical skills required",
							icon: "🎯",
						},
						{
							title: "No setup required",
							description: "Works directly in your browser",
							icon: "⚡",
						},
						{
							title: "Latest generation AI model",
							description: "Powered by cutting-edge technology",
							icon: "🤖",
						},
						{
							title: "Secure Cloud Computer",
							description: "Your data is always protected",
							icon: "🔒",
						},
						{
							title: "Saves 10+ hours a week",
							description: "Per user on average",
							icon: "⏰",
						},
						{
							title: "Persistent across sessions",
							description: "Remembers your apps and files",
							icon: "💾",
						},
					].map((benefit, index) => (
						<motion.div
							key={index}
							className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
							whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.3)" }}>
							<div className="text-3xl mb-4">{benefit.icon}</div>
							<h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
							<p className="mt-2 text-sm text-slate-300">{benefit.description}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default FeaturesSection;
