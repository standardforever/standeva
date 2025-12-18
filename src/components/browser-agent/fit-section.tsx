"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const fitItems = {
	for: [
		"You run your business inside Chrome, Edge, or Safari all day.",
		"You manage multiple SaaS tools, storefronts, or dashboards.",
		"You need audit-ready evidence for every automated action.",
		"You want automation without rebuilding back-end systems.",
		"You are tired of copy/paste marathons between tabs.",
	],
	against: [
		"You rarely use browser-based tools to run the business.",
		"You’re not ready to document guardrails or approvals.",
		"You prefer to keep every click manual and in-house.",
		"You don’t trust an agent to run curated workflows.",
	],
};

const FitSection: React.FC = () => {
	return (
		<section className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<div className="text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
						Is this for you?
					</p>
					<h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
						Process Zero Browser Agent is a perfect fit if…
					</h2>
				</div>

				<div className="mt-12 grid gap-6 md:grid-cols-2">
					<motion.div
						className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-8"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}>
						<div className="flex items-center gap-3">
							<CheckCircle2 className="h-6 w-6 text-blue-300" />
							<p className="text-xl font-semibold text-white">This is for you if:</p>
						</div>
						<ul className="mt-6 space-y-4 text-slate-100">
							{fitItems.for.map((item) => (
								<li key={item} className="flex items-start gap-3">
									<span className="mt-1 h-2 w-2 rounded-full bg-blue-300" />
									{item}
								</li>
							))}
						</ul>
					</motion.div>

					<motion.div
						className="rounded-3xl border border-white/15 bg-slate-900/60 p-8"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}>
						<div className="flex items-center gap-3">
							<XCircle className="h-6 w-6 text-slate-400" />
							<p className="text-xl font-semibold text-white">This isn’t for you if:</p>
						</div>
						<ul className="mt-6 space-y-4 text-slate-300">
							{fitItems.against.map((item) => (
								<li key={item} className="flex items-start gap-3">
									<span className="mt-1 h-2 w-2 rounded-full bg-slate-500" />
									{item}
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default FitSection;
