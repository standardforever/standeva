import type { FC } from "react";
import SectionShell from "./section-shell";

const commercialBullets = [
	"Automating end-to-end workflows, not just simple tasks",
	"Integrating with CRM, finance, operations and internal systems",
	"Reducing rework, delays and manual hand-offs",
	"Supporting growth without adding unnecessary complexity",
];

const CommercialRealitySection: FC = () => {
	return (
		<SectionShell innerClassName="mx-auto max-w-5xl px-4 text-center md:px-6">
			<div className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-sky-400">
				commercial reality
			</div>
			<h2 className="mt-6 text-balance text-2xl font-semibold sm:text-3xl md:text-4xl">
				built for commercial reality
			</h2>
			<p className="mt-4 text-sm text-slate-300 sm:text-base">
				We work with businesses £1m turnover and above
			</p>
			<p className="mt-6 text-sm font-semibold text-slate-100 sm:text-base">
				That means
			</p>
			<ul className="mt-4 grid gap-3 text-left text-sm text-slate-200 sm:grid-cols-2 sm:text-base">
				{commercialBullets.map((item) => (
					<li key={item} className="flex gap-2">
						<span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
						<span>{item}</span>
					</li>
				))}
			</ul>
			<p className="mt-6 text-sm text-slate-200 sm:text-base">
				If a task involves a mouse, keyboard or browser, it can usually
				be automated
			</p>
		</SectionShell>
	);
};

export default CommercialRealitySection;
