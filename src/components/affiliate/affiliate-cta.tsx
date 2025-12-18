"use client";

import type { FC } from "react";
import { TertiaryButton } from "@/components/ui/buttons";

const AffiliateCta: FC = () => {
	return (
		<section
			id="affiliate-cta"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.16),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center md:px-6">
				<p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
					Process Zero AI Partners
				</p>
				<h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.4rem]">
					Ready to unlock new recurring revenue for your agency?
				</h2>
				<p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
					Share a client, we handle the automation. You keep the
					relationship and earn commission on every project we
					deliver.
				</p>

				<div className="mt-8">
					<TertiaryButton className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400">
						Apply to Become a Partner
					</TertiaryButton>
				</div>
			</div>
		</section>
	);
};

export default AffiliateCta;
