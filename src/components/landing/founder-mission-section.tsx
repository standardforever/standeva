import type { FC } from "react";
import Image from "next/image";
import { Github, MetaAI } from "@lobehub/icons";

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
					<h2 className="mt-6 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
						a founder&apos;s mission to make ai safe and useful
					</h2>
				</div>

				<div className="grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
					<div className="space-y-6 text-left text-sm text-slate-200 sm:text-[0.95rem] md:text-base">
						<p className="text-xs font-semibold tracking-[0.22em] text-slate-400">
							a founder&apos;s mission
						</p>
						<p>
							We work with companies that know AI can help them
							grow but don’t yet have a clear path forward. By
							automating low value, repetitive work, we free your
							team to focus on the higher-value, revenue-driving
							tasks that move the business forward all without
							adding risk.
						</p>
						<p>
							After 25 years in change management, I understand
							what it feels like to be asked to achieve more with
							the same or fewer resources. That pressure is real,
							and AI can finally start to relieve it.
						</p>
						<p>
							Our team is here to help your business grow faster
							through safe, practical AI automation. If you know
							you need to take the first step but aren’t sure
							where to begin, book a free 60 minute call and we’ll
							guide you through your options.
						</p>
						<p>
							I often say: “Once you see it, you can’t unsee it.”
							And that’s exactly what I want for you to clearly
							see the growth potential AI can unlock in your
							business, as well as the cost reductions that can
							make it more profitable, leaner and easier to run.
						</p>
					</div>

					<div className="flex flex-col items-center gap-8 md:items-end">
						<div className="relative h-64 w-64 max-w-full">
							<div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-sky-500 to-indigo-600" />
							<div className="absolute inset-[10%] overflow-hidden rounded-[2.4rem] bg-slate-950">
								<Image
									src="/blog-1-1.png"
									alt="Process Zero founder portrait"
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
									Founders Hub
								</p>
							</div>

							<div>
								<p className="font-semibold tracking-[0.2em] text-slate-400">
									our technology partners
								</p>
								<div className="mt-3 flex flex-wrap justify-end gap-3">
									<span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-[0.7rem] font-medium text-slate-100">
										<MetaAI size={16} />
										<span>Meta AI</span>
									</span>
									<span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-[0.7rem] font-medium text-slate-100">
										<Github size={16} />
										<span>GitHub</span>
									</span>
									<span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-[0.7rem] font-medium text-slate-100">
										<span>Browse AI</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FounderMissionSection;
