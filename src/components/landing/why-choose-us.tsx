"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const otherProviderItems = [
	"AI buzzwords make automation seem complex and difficult.",
	"Run vital tasks on a platform you don't own or control.",
	"Put your private data through public AI systems.",
	"Rely on closed-source tools with opaque licensing.",
	"They charge big upfront fees to plan, build, and maintain automations.",
];

const differentiators = [
	"Use simple language, so automation is easy to understand and integrate.",
	"Own and control every AI agent, prompt and workflow.",
	"Your data never leaves your network when using our custom AI.",
	"We're very cost effective.",
];

const WhyChooseUs: React.FC = () => {
	return (
		<section className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.24),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-6">
				<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-emerald-200">
					why processzero
				</div>

				<div className="mt-6 space-y-4">
					<h2 className="text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
						not all automation is created equal
					</h2>
					<p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
						See how our approach keeps your data secure, preserves
						ownership and delivers long‑term value without locking
						you into someone else&apos;s platform.
					</p>
				</div>

				<div className="mt-10 w-full max-w-5xl">
					<div className="grid overflow-hidden rounded-[2.25rem] border border-slate-800 bg-slate-950/80 shadow-[0_26px_90px_rgba(15,23,42,0.9)] md:grid-cols-2">
						<div className="border-b border-slate-800 bg-rose-950/40 px-8 py-5 text-left md:border-b-0 md:border-r">
							<div className="inline-flex rounded-full bg-rose-900/70 px-5 py-2 text-xs font-semibold tracking-[0.18em] text-rose-200">
								other providers
							</div>
						</div>
						<div className="border-b border-slate-800 bg-emerald-950/40 px-8 py-5 text-left md:border-b-0">
							<div className="inline-flex rounded-full bg-emerald-900/70 px-5 py-2 text-xs font-semibold tracking-[0.18em] text-emerald-200">
								the process zero approach
							</div>
						</div>

						<div className="space-y-4 bg-rose-950/30 px-8 pb-8 pt-6 text-left">
							{otherProviderItems.map((item) => (
								<div key={item} className="flex gap-3">
									<XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-rose-400" />
									<p className="text-sm leading-relaxed text-slate-200">
										{item}
									</p>
								</div>
							))}
						</div>

						<div className="space-y-4 bg-emerald-950/30 px-8 pb-8 pt-6 text-left">
							{differentiators.map((item) => (
								<div key={item} className="flex gap-3">
									<CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-400" />
									<p className="text-sm leading-relaxed text-slate-100">
										{item}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
