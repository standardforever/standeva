import type { FC } from "react";
import SectionShell from "./section-shell";

const finalCtaBullets = [
	"See where AI can genuinely reduce cost and free capacity",
	"Understand what is limiting growth today",
	"Explore what automation would look like in your business",
	"Receive an indicative view on feasibility and cost",
];

const FinalCtaSection: FC = () => {
	return (
		<SectionShell innerClassName="mx-auto max-w-5xl px-4 text-center md:px-6">
			<div className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-sky-400">
				next step
			</div>
			<h2 className="mt-6 text-balance text-2xl font-semibold sm:text-3xl md:text-4xl">
				start with clarity
			</h2>
			<h3 className="mt-4 text-md text-slate-300 sm:text-md">
				Book a free 60-minute discovery call
			</h3>
			<p className="mt-4 text-sm text-slate-300 sm:text-base">
				A calm, practical conversation to help you
			</p>
			<ul className="mt-6 grid gap-3 text-left text-sm text-slate-200 sm:grid-cols-2 sm:text-base">
				{finalCtaBullets.map((item) => (
					<li key={item} className="flex gap-2">
						<span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
						<span>{item}</span>
					</li>
				))}
			</ul>
			<div className="mt-8 flex flex-col items-center gap-3">
				<a
					href="/intro-call"
					className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/40 transition-colors duration-300 ease-out hover:from-slate-800 hover:to-slate-800">
					book your free 60-minute discovery call
				</a>
				<p className="text-xs text-slate-300">
					No obligation
					<span className="mx-2 text-slate-600">|</span>
					No sales pressure
				</p>
			</div>
		</SectionShell>
	);
};

export default FinalCtaSection;
