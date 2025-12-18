"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, ShieldCheck, Clock3 } from "lucide-react";

interface UseCase {
	id: string;
	title: string;
	department: string;
	description: string;
	benefits: string[];
}

const useCases: UseCase[] = [
	{
		id: "research",
		title: "Research & Lead Generation",
		department: "Revenue & Growth",
		description:
			"Fan out across tabs, capture data from search results, and push verified leads straight to your CRM.",
		benefits: [
			"Scrape listings and directories without plugins",
			"Enrich records using in-browser tools",
			"Leave annotated trails for handoffs",
		],
	},
	{
		id: "commerce",
		title: "Storefront & Catalog Updates",
		department: "Sales Plus Ops",
		description:
			"Keep Shopify, Amazon, and marketplace portals perfectly in sync including pricing, inventory, and merchandising copy.",
		benefits: [
			"Login-aware agent keeps sessions fresh",
			"Bulk upload assets and descriptions",
			"Validates every change with screenshots",
		],
	},
	{
		id: "support",
		title: "Escalation & Support Routines",
		department: "CX & Success",
		description:
			"Read tickets, open admin consoles, cross-check logs, and post updates back to your help desk without dragging humans into every step.",
		benefits: [
			"Pull data from multiple browser tabs",
			"Uses saved snippets + macros",
			"Escalates only when guardrails trigger",
		],
	},
	{
		id: "finance",
		title: "Reporting & Compliance Sweeps",
		department: "Finance & Ops",
		description:
			"Run monthly closes, download statements, and reconcile entries directly in the browser with a full audit trail.",
		benefits: [
			"Automates repetitive downloads",
			"Formats CSVs and dashboards",
			"Stores evidence for auditors",
		],
	},
];

const UseCasesSection: React.FC = () => {
	const [activeId, setActiveId] = useState(useCases[0]?.id ?? "");
	const activeUseCase = useCases.find((entry) => entry.id === activeId) ?? useCases[0];

	return (
		<section id="use-cases" className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<div className="mb-12 text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
						Browser-native automation
					</p>
					<h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
						Automate the work you don&apos;t want to do in the browser you already use.
					</h2>
					<p className="mt-4 text-lg text-slate-300">
						Pick a workflow and Process Zero Browser Agent takes over tabs, clicks, and copy-paste with your guardrails.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-4">
						{useCases.map((useCase) => (
							<motion.button
								key={useCase.id}
								onClick={() => setActiveId(useCase.id)}
								className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
									activeId === useCase.id
										? "border-blue-400 bg-blue-500/10"
										: "border-white/10 bg-slate-900/40 hover:border-blue-500/40"
								}`}>
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
											{useCase.department}
										</p>
										<p className="text-lg font-semibold text-white">{useCase.title}</p>
									</div>
									<ChevronDown
										className={`h-5 w-5 text-slate-400 transition-transform ${
											activeId === useCase.id ? "rotate-180 text-blue-200" : ""
										}`}
									/>
								</div>
								<AnimatePresence initial={false}>
									{activeId === useCase.id && (
										<motion.p
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											className="mt-3 text-sm text-slate-300">
											{useCase.description}
										</motion.p>
									)}
								</AnimatePresence>
							</motion.button>
						))}
					</div>

					<motion.div
						className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-900 p-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}>
						<div className="flex items-center gap-3">
							<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
								<Sparkles className="h-6 w-6" />
							</div>
							<div>
								<p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
									Process Zero console
								</p>
								<p className="text-xl font-semibold text-white">{activeUseCase?.title}</p>
							</div>
						</div>

						<p className="mt-4 text-slate-300">
							{activeUseCase?.description}
						</p>

						<div className="mt-6 space-y-3">
							{activeUseCase?.benefits.map((benefit) => (
								<div
									key={benefit}
									className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
									<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
										<ShieldCheck className="h-4 w-4" />
									</div>
									<p className="text-sm text-slate-200">{benefit}</p>
								</div>
							))}
						</div>

						<div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200">
									<Clock3 className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-white">Starts in under 2 minutes</p>
									<p className="text-xs text-slate-400">
										Browser Agent keeps sessions alive and resumes mid-task.
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default UseCasesSection;
