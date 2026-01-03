import type { FC } from "react";
// import Image from "next/image";
// import { Aws, MetaAI, Microsoft } from "@lobehub/icons";

const FounderMissionSection: FC = () => {
	return (
		<section
			id="founder-mission"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.24),transparent_55%)] opacity-80 mix-blend-screen" />
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
							mission statement
						</p>
						<p>
							ProcessZero exists to drive operating inefficiency
							and unnecessary cost towards zero.
						</p>
						<p>
							We help businesses eliminate waste, simplify
							everyday processes, and reduce operating costs using
							safe, practical AI that fits seamlessly into how
							they already work. Your data never leaves your
							network.
						</p>
						<p>
							Our aim is simple: to help organisations run leaner,
							operate more cost effectively, and grow faster,
							enabling teams to focus on high-value work without
							adding risk or complexity.
						</p>
					</div>
					{/*
					<div className="flex flex-col items-center gap-8 md:items-end">
						<div className="w-full max-w-sm space-y-6 text-right text-xs text-slate-300 sm:text-[0.8rem]">
							<div>
								<p className="font-semibold tracking-[0.2em] text-slate-400">
									recognised &amp; supported by
								</p>
								<p className="mt-2 text-slate-200">
									Selected for the Microsoft for Startups
									Founders Hub
								</p>
								<div className="mt-4">
									<div className="relative ml-auto w-full max-w-[12rem] h-32 overflow-hidden rounded-2xl border border-violet-400/40 bg-gradient-to-br from-violet-700 via-purple-600 to-indigo-700 p-3 text-left shadow-[0_24px_60px_rgba(88,28,135,0.45)]">
										<div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
										<div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
										<div className="relative space-y-4">
											<div className="flex items-center gap-2 text-[0.7rem] font-semibold text-white/90">
												<Microsoft.Color size={18} />
												<span>Microsoft</span>
											</div>
											<div className="space-y-1 text-white">
												<p className="text-xs font-medium sm:text-sm">
													Microsoft for Startups
												</p>
												<p className="text-lg font-semibold leading-tight sm:text-xl">
													Founders Hub
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div>
								<p className="font-semibold tracking-[0.2em] text-slate-400">
									our technology partners
								</p>
								<div className="mt-3 flex flex-wrap justify-end gap-3">
									<span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-[0.7rem] font-medium text-slate-100">
										<MetaAI.Color size={16} />
										<span>Meta AI</span>
									</span>
									<span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-[0.7rem] font-medium text-slate-100">
										<Aws.Color size={16} />
										<span>AWS</span>
									</span>
									<span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-[0.7rem] font-medium text-slate-100">
										<Image
											src="/browse-ai.png"
											alt="Browse AI"
											width={16}
											height={16}
											className="h-4 w-4 brightness-110"
										/>
										<span>Browse AI</span>
									</span>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default FounderMissionSection;
