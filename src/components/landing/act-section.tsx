import type { FC } from "react";

type Step = {
	label: string;
	title: string;
	short: string;
	details?: string[];
	phases?: {
		title: string;
		points: string[];
	}[];
	footer?: string;
};

const steps: Step[] = [
	{
		label: "step 1 - a: align",
		title: "free 60 minute discovery call",
		short: "We pinpoint where AI automation can create value by solving your business efficiency and growth pain points",
		details: [
			"Understand your main pain points",
			"Spot early low value, repetitive tasks",
			"Check if automation is a good fit",
			"Bottlenecks and growth constraints",
		],
		footer: "No pressure - just a simple starting point",
	},
	{
		label: "step 2 - c: clarify",
		title: "process mapping and solution design",
		short: "Clarify your processes to design for scale and efficiency",
		details: [
			"Process map tasks for AI automation",
			"Translate mapped processes into clear, actionable solution design proposal.",
			"End result: You will know exactly what can be automated to cut costs, remove low value work, and help your business grow faster",
		],
	},
	{
		label: "step 3 - t: transform",
		title: "implementation",
		short: "We design, build and deploy your automations using a simple three stage payment model",
		phases: [
			{
				title: "build and test",
				points: [
					"Build in our secure environment",
					"Early reviews and user feedback",
					"Test and train your team",
				],
			},
			{
				title: "install inside your network",
				points: [
					"Secure setup inside your systems",
					"Go live",
					"30 day hypercare support",
				],
			},
		],
	},
];

const support = {
	label: "optional - s: support",
	title: "ongoing support (A.C.T.S.)",
	short: "Ongoing support to keep your automations sharp, secure and running smoothly.",
	items: [
		"Fixes and improvements.",
		"Performance monitoring.",
		"New automation ideas.",
		"Usage insights and reporting.",
	],
	footer: "We maintain, monitor and improve your automations at a simple, low monthly rate.",
};

const ActSection: FC = () => {
	return (
		<section
			id="pricing"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.24),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center md:px-6">
				<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-emerald-200">
					the A.C.T. method
				</div>

				<h2 className="mt-6 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
					the A.C.T. method
				</h2>

				<p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
					Our structured process to understand your business and help
					make it “future ready
				</p>

				<div className="mt-10 grid w-full gap-6 text-left">
					{steps.map((step) => (
						<div
							key={step.label}
							className="rounded-2xl border border-emerald-400/30 bg-slate-950/80 p-6 shadow-[0_0_0_1px_rgba(16,185,129,0.25)]">
							<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
									{step.label}
								</p>
							</div>
							<p className="mt-2 text-base font-semibold text-emerald-100 sm:text-lg">
								{step.title}
							</p>
							<p className="mt-2 text-sm text-slate-200 sm:text-[0.95rem] md:text-base">
								{step.short}
							</p>

							<details className="mt-4 group rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-emerald-400/40">
								<summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-100 sm:text-base">
									<span>Read more</span>
									<span className="text-xs text-slate-400 group-open:hidden">
										▼
									</span>
									<span className="text-xs text-slate-400 hidden group-open:inline">
										▲
									</span>
								</summary>
								{step.details && (
									<ul className="mt-3 space-y-2 text-sm text-slate-200 sm:text-[0.95rem]">
										{step.details.map((item) => (
											<li
												key={item}
												className="leading-relaxed">
												{item}
											</li>
										))}
									</ul>
								)}
								{step.phases && (
									<div className="mt-3 space-y-4">
										{step.phases.map((phase) => (
											<div key={phase.title}>
												<p className="text-sm font-semibold text-slate-100 sm:text-base">
													{phase.title}
												</p>
												<ul className="mt-2 space-y-1 text-sm text-slate-200 sm:text-[0.95rem]">
													{phase.points.map(
														(point) => (
															<li
																key={point}
																className="leading-relaxed">
																{point}
															</li>
														)
													)}
												</ul>
											</div>
										))}
									</div>
								)}
								{step.footer && (
									<p className="mt-3 text-sm text-slate-300">
										{step.footer}
									</p>
								)}
							</details>
						</div>
					))}
				</div>

				<div className="mt-10 w-full rounded-2xl border border-sky-400/30 bg-slate-950/80 p-6 text-left shadow-[0_0_0_1px_rgba(56,189,248,0.25)]">
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
						{support.label}
					</p>
					<p className="mt-2 text-base font-semibold text-sky-100 sm:text-lg">
						{support.title}
					</p>
					<p className="mt-3 text-sm text-slate-200 sm:text-[0.95rem] md:text-base">
						{support.short}
					</p>
					<details className="mt-4 group rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-400/40">
						<summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-100 sm:text-base">
							<span>Read more</span>
							<span className="text-xs text-slate-400 group-open:hidden">
								▼
							</span>
							<span className="text-xs text-slate-400 hidden group-open:inline">
								▲
							</span>
						</summary>
						<p className="mt-3 text-sm font-semibold text-slate-100 sm:text-base">
							Includes:
						</p>
						<ul className="mt-2 space-y-2 text-sm text-slate-200 sm:text-[0.95rem]">
							{support.items.map((item) => (
								<li key={item} className="leading-relaxed">
									{item}
								</li>
							))}
						</ul>
						<p className="mt-3 text-sm text-slate-300">
							{support.footer}
						</p>
					</details>
				</div>
			</div>
		</section>
	);
};

export default ActSection;
