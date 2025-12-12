import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const FounderMissionSection: FC = () => {
	return (
		<section
			id="founder-mission"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.24),transparent_55%)] opacity-80 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
				<div className="text-center">
					<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-emerald-200">
						built on experience, backed by leaders
					</div>
					<h2 className="mt-6 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.4rem]">
						a founder&apos;s mission to make ai safe and useful.
					</h2>
				</div>

				<div className="grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
					<div className="space-y-6 text-left text-sm text-slate-200 sm:text-[0.95rem] md:text-base">
						<p className="text-xs font-semibold tracking-[0.22em] text-slate-400">
							a founder&apos;s mission
						</p>
						<p>
							My mission is to help your organisation use AI to
							cut costs, remove repetitive work and improve
							operational quality—without adding unnecessary risk.
							With over 25 years in change management, I know what
							it feels like to be asked to do more with the same
							resources.
						</p>
						<p>
							Agentic AI can now deliver measurable savings,
							higher accuracy and real productivity gains. Our AI
							agents are designed to live inside your network,
							controlled and owned by your team, so your data
							stays private while automations scale.
						</p>
					</div>

					<div className="flex flex-col items-center gap-8 md:items-end">
						<div className="relative h-64 w-64 max-w-full">
							<div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-sky-500 to-indigo-600" />
							<div className="absolute inset-[10%] overflow-hidden rounded-[2.4rem] bg-slate-950">
								<Image
									src="/blog-1-1.png"
									alt="ProcessZero founder portrait"
									fill
									className="object-cover object-center"
									sizes="256px"
								/>
							</div>
							<div className="absolute -right-3 bottom-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg shadow-sky-500/40">
								<span className="text-xl leading-none">“</span>
							</div>
						</div>

						<div className="w-full max-w-sm space-y-6 text-right text-xs text-slate-300 sm:text-[0.8rem]">
							<div>
								<p className="font-semibold tracking-[0.2em] text-slate-400">
									recognised &amp; supported by
								</p>
								<p className="mt-2 text-slate-200">
									Selected for the Microsoft for Startups
									Founders Hub.
								</p>
							</div>

							<div>
								<p className="font-semibold tracking-[0.2em] text-slate-400">
									our technology partners
								</p>
								<div className="mt-3 flex flex-wrap justify-end gap-3">
									{["Meta AI", "GitHub", "Browse AI"].map(
										(partner) => (
											<span
												key={partner}
												className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-[0.7rem] font-medium text-slate-100">
												{partner}
											</span>
										)
									)}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Link to About Us page */}
				<div className="mt-8 flex justify-center">
					<Link
						href="/about-us"
						className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300">
						learn more about our story
						<span className="transition-transform group-hover:translate-x-1">
							→
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default FounderMissionSection;
