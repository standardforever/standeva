import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";
import { CheckCircle2, Clock3, Users } from "lucide-react";

const sessionCoverage = [
	"Your current operating landscape a high-level snapshot of your systems, processes, people, and existing use of AI",
	"Cost and growth constraints identifying bottlenecks, friction points, and constraints across your operations",
	"AI automation opportunities where automation could improve efficiency, reduce friction, and unlock capacity",
	"What, how, and when to automate clear guidance on priority, approach, and timing",
	"Indicative cost ranges early investment guidance, with full accuracy confirmed during detailed process mapping and solution design",
];

const takeaways = [
	"Automation-ready tasks a clear view of low-value, repetitive work suitable for AI automation",
	"Bottlenecks and delays surfaced costly validation checks, hand-offs, and process slowdowns clearly identified",
	"Growth constraints clarified insight into where processes limit scale and how automation could remove those constraints",
	"Cost-reduction opportunities practical ways to lower operating costs while freeing teams for higher-value work",
	"A prioritised automation roadmap focused on business impact, not technical complexity",
	"Timelines and investment clarity indicative delivery timelines and cost ranges for each proposed automation",
	"A written summary report everything discussed captured clearly and shared with you, with no obligation",
];

const afterSession = [
	"A concise written report we package all findings and recommendations and send them to you",
	"No pressure to proceed if and when you choose to move forward, you can come back to us",
	"Commercial, scalable solutions we're confident our AI automations will be of interest, without the need for a hard sell",
];

export default function IntroCallPage() {
	return (
		<main className="min-h-screen w-full overflow-x-hidden bg-black">
			<SecondaryHeader navItems={[]} cta={null} />

			<div className="w-full pt-16 sm:pt-20">
				<section
					id="overview"
					className="relative overflow-hidden py-16 text-slate-50 sm:py-20 md:py-24">
					<div className="pointer-events-none absolute inset-0">
						<div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950 to-black" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.28),transparent_60%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.25),transparent_55%)] opacity-70 mix-blend-screen" />
					</div>

					<div className="relative mx-auto max-w-7xl px-4 md:px-6">
						<div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-sky-200">
							<Clock3 className="h-4 w-4" />
							free 60-minute discovery call
						</div>

						<div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
							<div className="space-y-6 text-left">
								<h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
									A free 60-minute session to identify cost
									savings and growth opportunities using AI
								</h1>
								<p className="text-base leading-relaxed text-slate-300 sm:text-lg">
									This team-led session uncovers where AI can
									remove bottlenecks, reduce operating costs,
									and unlock capacity no hard sell, just clear
									recommendations.
								</p>

								<div className="grid gap-3 sm:grid-cols-2">
									<div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2">
										<Clock3 className="h-5 w-5 text-sky-300" />
										<span className="text-sm text-slate-200">
											60 minutes
										</span>
									</div>
									<div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2">
										<Users className="h-5 w-5 text-sky-300" />
										<span className="text-sm text-slate-200">
											Hosted by the consulting team
										</span>
									</div>
								</div>
							</div>

							<div
								id="booking"
								className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-blue-500/20">
								<iframe
									src="https://zcal.co/i/2QPIJq_0"
									className="h-[500px] w-full lg:h-[600px]"
									frameBorder="0"
									title="Book your 60-minute discovery call"
									allow="camera; microphone; payment"
									loading="eager"
								/>
								<div className="border-t border-slate-800 bg-slate-950/80 px-4 py-3 text-center text-xs text-slate-400">
									Duration: 60 minutes Hosted by the
									Consulting Team Microsoft Teams link
									included.
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="relative z-10 bg-black pb-12 text-slate-50 sm:pb-16">
					<div className="relative mx-auto max-w-5xl px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-2 lg:items-start">
							<div className="h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
								<h2 className="text-xl font-semibold text-slate-100 sm:text-2xl">
									What we&apos;ll cover in the 60-minute
									session
								</h2>
								<ul className="mt-4 space-y-3">
									{sessionCoverage.map((item) => (
										<li
											key={item}
											className="flex items-start gap-2">
											<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
											<span className="text-sm text-slate-200">
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>
							<div className="h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
								<h2 className="text-xl font-semibold text-slate-100 sm:text-2xl">
									What you&apos;ll leave with
								</h2>
								<ul className="mt-4 space-y-3">
									{takeaways.map((item) => (
										<li
											key={item}
											className="flex items-start gap-2">
											<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
											<span className="text-sm text-slate-200">
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
							<h2 className="text-xl font-semibold text-slate-100 sm:text-2xl">
								After the session
							</h2>
							<ul className="mt-4 space-y-3">
								{afterSession.map((item) => (
									<li
										key={item}
										className="flex items-start gap-2">
										<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
										<span className="text-sm text-slate-200">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</div>
			<SecondaryFooter />
		</main>
	);
}
