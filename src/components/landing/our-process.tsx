"use client";

import type { FC } from "react";

const steps = [
	{
		id: 1,
		title: "align",
		subtitle: "book your discovery call",
		body: "Schedule a free 60 minute call so we can understand your goals, challenges and where AI automation could make the biggest difference.",
	},
	{
		id: 2,
		title: "clarify",
		subtitle: "undertake process mapping and solution design",
		body: "Spend a focused session mapping your bottlenecks, low value tasks and growth goals. We identify automation opportunities and create a simple action plan tailored to your business.",
	},
	{
		id: 3,
		title: "transform",
		subtitle: "receive your AI Audit Report",
		body: "Get a clear, practical report outlining priority automations, expected savings, timelines and your recommended next steps to start transforming your workflows.",
	},
];

const OurProcess: FC = () => {
	return (
		<section className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.24),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-6">
				<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-emerald-200">
					our process (A.C.T. method)
				</div>

				<div className="mt-6 space-y-4">
					<h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
						getting started is easy
					</h2>
					<p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
						From first conversation to a clear automation roadmap in
						three simple steps
					</p>
				</div>

				<div className="mt-12 grid w-full gap-10 text-left sm:grid-cols-3 lg:grid-cols-3">
					{steps.map((step) => (
						<div key={step.id} className="flex flex-col gap-4">
							<div className="flex items-center gap-3">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/90 text-xs font-semibold text-slate-950">
									{step.id}
								</div>
								<div>
									<h3 className="text-sm font-semibold leading-snug text-slate-50 sm:text-[0.95rem]">
										{step.title}
									</h3>
									<p className="text-[0.7rem]  tracking-[0.18em] text-emerald-200">
										{step.subtitle}
									</p>
								</div>
							</div>
							<p className="text-xs leading-relaxed text-slate-300 sm:text-[0.8rem] md:text-[0.9rem]">
								{step.body}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurProcess;
