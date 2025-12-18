import type { FC } from "react";
import Image from "next/image";
import { CheckCircle2, XCircle } from "lucide-react";

const beforePoints = [
	"Increasing headcount and license costs just to keep up.",
	"Teams stuck in time‑consuming, repetitive tasks.",
	"Work piling up whenever people are offline or away.",
	"Supervisors chasing updates instead of seeing them instantly.",
];

const afterPoints = [
	"Up to 90% cheaper than manual processing.",
	"Skilled staff freed up for higher‑value projects.",
	"AI agents working 24/7 so nothing gets left behind.",
	"Seamless integration with your ERP and core tools.",
];

const BeforeAfterSection: FC = () => {
	return (
		<section
			id="before-after"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.24),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-6">
				<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-emerald-200">
					before vs after
				</div>

				<div className="mt-6 space-y-4">
					<h2 className="text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
						manual processes are holding you back
					</h2>
					<p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
						Process Zero handles the repetitive work, freeing your
						team to focus on high value tasks
					</p>
				</div>

				<div className="mt-12 grid w-full gap-8 md:grid-cols-2">
					<article className="flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950/80 shadow-[0_26px_90px_rgba(15,23,42,0.95)]">
						<div className="flex justify-center border-b border-slate-800 bg-rose-950/50 px-6 py-4">
							<span className="rounded-full bg-rose-900/70 px-5 py-1.5 text-xs font-semibold tracking-[0.18em] text-rose-200">
								problem
							</span>
						</div>
						<div className="relative bg-rose-950/40 px-6 pb-4 pt-6">
							<div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-slate-950">
								<Image
									src="/before.png"
									alt="Manual email and spreadsheet workflows"
									fill
									className="object-contain object-center"
									sizes="(min-width: 1024px) 40vw, 100vw"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col gap-3 px-8 pb-8 pt-6 text-left">
							<h3 className="text-base font-semibold text-slate-50 sm:text-lg">
								expensive, slow and error‑prone manual process
							</h3>
							<ul className="mt-2 space-y-2">
								{beforePoints.map((point) => (
									<li
										key={point}
										className="flex gap-3 text-sm text-slate-200">
										<XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-400" />
										<span>{point}</span>
									</li>
								))}
							</ul>
						</div>
					</article>

					<article className="flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950/80 shadow-[0_26px_90px_rgba(15,23,42,0.95)]">
						<div className="flex justify-center border-b border-slate-800 bg-emerald-950/50 px-6 py-4">
							<span className="rounded-full bg-emerald-900/70 px-5 py-1.5 text-xs font-semibold tracking-[0.18em] text-emerald-200">
								solution
							</span>
						</div>
						<div className="relative bg-emerald-950/40 px-6 pb-4 pt-6">
							<div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-slate-950">
								<Image
									src="/after.png"
									alt="Automated Process Zero workspace managing documents"
									fill
									className="object-contain object-center"
									sizes="(min-width: 1024px) 40vw, 100vw"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col gap-3 px-8 pb-8 pt-6 text-left">
							<h3 className="text-base font-semibold text-slate-50 sm:text-lg">
								cheaper, faster and easy to use
							</h3>
							<ul className="mt-2 space-y-2">
								{afterPoints.map((point) => (
									<li
										key={point}
										className="flex gap-3 text-sm text-slate-100">
										<CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
										<span>{point}</span>
									</li>
								))}
							</ul>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default BeforeAfterSection;
