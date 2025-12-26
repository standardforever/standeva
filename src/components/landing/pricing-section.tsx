import type { FC } from "react";

type PricingStep = {
	id: number;
	title: string;
	price: string;
	description: string[];
};

const currency = "\u00A3";

const pricingPathway: PricingStep[] = [
	{
		id: 1,
		title: "Discovery call",
		price: "free",
		description: [
			"A 60 minute session to understand your processes, constraints, and where automation can deliver the greatest impact.",
		],
	},
	{
		id: 2,
		title: "Process mapping and solution design",
		price: `${currency}250 to ${currency}500`,
		description: [
			"Structured workshops to map processes, identify edge cases, and design the right automation solution.",
			"Pricing depends on complexity and the number of workshops required.",
		],
	},
	{
		id: 3,
		title: "Implementation, testing and training",
		price: "priced by complexity",
		description: [
			"Build, test, and deploy the agreed automation, including knowledge transfer to your team.",
			"Costs are agreed upfront based on scope and scale.",
		],
	},
	{
		id: 4,
		title: "Ongoing support and updates",
		price: "optional",
		description: [
			"Flexible support and optimisation options available if required.",
		],
	},
];

const PricingSection: FC = () => {
	return (
		<section
			id="pricing"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.24),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-6">
				<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-emerald-200">
					pricing
				</div>

				<h2 className="mt-6 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
					simple, fair pricing
				</h2>

				<div className="mt-4 max-w-3xl space-y-4 text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
					<p>
						Every automation we build is designed to be cost
						effective and deliver a clear return on investment. We
						focus on reducing operational cost and freeing up your
						team&apos;s time so they can concentrate on higher
						value, growth focused work.
					</p>
					<p>
						We do not sell pre-built solutions or force generic
						tools into your processes. Each automation is custom
						designed for your business to maximise operational
						efficiency and ensure the best possible outcome.
					</p>
				</div>

				<div className="mt-12 w-full">
					<h3 className="text-balance text-2xl font-semibold text-slate-100 sm:text-3xl">
						Our Pricing Pathway
					</h3>
					<div className="mt-8 grid w-full gap-6 text-left sm:grid-cols-2">
						{pricingPathway.map((step) => (
							<article
								key={step.id}
								className="flex h-full flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-sky-500/50">
								<div className="flex flex-wrap items-center justify-between gap-4">
									<div className="flex items-center gap-3">
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/90 text-xs font-semibold text-slate-950">
											{step.id}
										</div>
										<h4 className="text-sm font-semibold text-slate-50 sm:text-base">
											{step.title}
										</h4>
									</div>
									<span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-200">
										{step.price}
									</span>
								</div>
								<div className="space-y-2">
									{step.description.map((line) => (
										<p
											key={line}
											className="text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
											{line}
										</p>
									))}
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingSection;
