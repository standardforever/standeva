import type { FC } from "react";

const otherProvider = [
	"Send client data to public AI models (OpenAI, Google).",
	"Operate on a rented, third‑party platform.",
	"Rely on closed‑source, licensed tools with opaque fees.",
];

const approachPoints = [
	"Client data stays within their own network perimeter.",
	"Clients own and control every AI agent and workflow.",
	"Open, transparent stack with no hidden automation fees.",
];

const AffiliateWhyClickbuy: FC = () => {
	return (
		<section
			id="affiliate-why-process-zero"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
				<p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-200">
					Why Process Zero for your clients
				</p>
				<h2 className="mt-6 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.4rem]">
					Not All Automation is Created Equal.
				</h2>

				<p className="mt-4 mx-auto max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
					Our approach gives your clients greater security, ownership and value so you can recommend us with
					confidence.
				</p>

				<div className="mt-10 grid overflow-hidden rounded-[2.25rem] border border-slate-800 bg-slate-950/80 text-left shadow-[0_22px_80px_rgba(15,23,42,0.9)] md:grid-cols-2">
					<div className="border-b border-slate-800 bg-rose-950/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-rose-200 md:border-b-0 md:border-r">
						Other providers
					</div>
					<div className="border-b border-slate-800 bg-emerald-950/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 md:border-b-0">
						The Process Zero approach
					</div>

					<div className="space-y-3 bg-rose-950/20 px-8 pb-8 pt-6">
						{otherProvider.map((item) => (
							<p key={item} className="text-xs leading-relaxed text-slate-200 sm:text-[0.8rem] md:text-[0.9rem]">
								{item}
							</p>
						))}
					</div>
					<div className="space-y-3 bg-emerald-950/20 px-8 pb-8 pt-6">
						{approachPoints.map((item) => (
							<p key={item} className="text-xs leading-relaxed text-slate-100 sm:text-[0.8rem] md:text-[0.9rem]">
								{item}
							</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AffiliateWhyClickbuy;
