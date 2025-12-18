import type { FC } from "react";
import Image from "next/image";

const AffiliateBeforeAfter: FC = () => {
	return (
		<section
			id="affiliate-before-after"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.2),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
				<p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-200">
					Before vs After
				</p>
				<h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.4rem]">
					Manual Processes Are Holding Your Clients Back.
				</h2>
				<p className="mt-4 mx-auto max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
					Let Process Zero handle the repetitive work so your clients&apos; teams can focus on what truly
					matters and you can turn process problems into new revenue streams.
				</p>

				<div className="mt-12 grid gap-8 text-left md:grid-cols-2">
					<article className="flex flex-col overflow-hidden rounded-[2.25rem] border border-slate-800 bg-slate-950/80 shadow-[0_26px_90px_rgba(15,23,42,0.9)]">
						<div className="border-b border-slate-800 bg-rose-950/50 px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-rose-200">
							Before: The problem
						</div>
						<div className="relative bg-slate-950 px-8 pb-6 pt-6">
							<div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-slate-900">
								<Image
									src="/before.png"
									alt="Manual processes"
									fill
									className="object-contain object-center"
									sizes="(min-width: 1024px) 40vw, 100vw"
								/>
							</div>
						</div>
						<div className="px-8 pb-8 pt-4">
							<h3 className="text-sm font-semibold text-slate-50 sm:text-[0.95rem]">
								Expensive, slow and error‑prone manual processes
							</h3>
							<ul className="mt-3 space-y-2 text-xs text-slate-300 sm:text-[0.8rem] md:text-[0.9rem]">
								<li>High staff and licensing costs just to keep up with repetitive work.</li>
								<li>Time‑consuming tasks that drain your clients&apos; teams every day.</li>
								<li>Unfinished tasks whenever people are offline, on leave or overloaded.</li>
							</ul>
						</div>
					</article>

					<article className="flex flex-col overflow-hidden rounded-[2.25rem] border border-slate-800 bg-slate-950/80 shadow-[0_26px_90px_rgba(15,23,42,0.9)]">
						<div className="border-b border-slate-800 bg-emerald-950/50 px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
							After: The solution
						</div>
						<div className="relative bg-slate-950 px-8 pb-6 pt-6">
							<div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-slate-900">
								<Image
									src="/after.png"
									alt="Automated Process Zero workspace"
									fill
									className="object-contain object-center"
									sizes="(min-width: 1024px) 40vw, 100vw"
								/>
							</div>
						</div>
						<div className="px-8 pb-8 pt-4">
							<h3 className="text-sm font-semibold text-slate-50 sm:text-[0.95rem]">
								Cheaper, faster and easy to use
							</h3>
							<ul className="mt-3 space-y-2 text-xs text-slate-300 sm:text-[0.8rem] md:text-[0.9rem]">
								<li>90%+ cheaper than manual processing for the same workload.</li>
								<li>Skilled staff freed up for high‑value advisory and client work.</li>
								<li>AI agents working 24/7 so no tasks are left outstanding.</li>
							</ul>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default AffiliateBeforeAfter;
