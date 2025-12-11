import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";
import { CheckCircle2, PhoneCall, Rocket, FileText } from "lucide-react";

export const metadata = {
	title: "Book a 15-Minute Intro Call | ProcessZero",
	description:
		"Schedule a free 15-minute intro call to see if AI automation is the right fit. Get clarity on pain points, process, pricing, and next steps toward a £100 Discovery Day.",
};

const whatWeCover = [
	"Your current pain points",
	"How our AI automation process works",
	"Pricing, ROI and commercial clarity",
	"Why ProcessZero is different",
];

const discoveryDayItems = [
	"AI strategy session to identify automation and scaling opportunities",
	"Process mapping of repetitive tasks suitable for automation",
	"AI Audit Report outlining recommended automations, timelines and full costings",
	"This session provides a clear, actionable roadmap to begin your AI automation transformation.",
];

export default function IntroCallPage() {
	const cta = {
		label: "Book discovery series",
		href: "/discovery-day",
	};

	return (
		<main className="min-h-screen w-full overflow-x-hidden bg-black">
			<SecondaryHeader cta={cta} />
			<div className="w-full pt-16 sm:pt-20">
				<section
					id="overview"
					className="relative overflow-hidden py-16 text-slate-50 sm:py-20 md:py-24">
					<div className="pointer-events-none absolute inset-0">
						<div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950 to-black" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.28),transparent_60%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.25),transparent_55%)] opacity-70 mix-blend-screen" />
					</div>

					<div className="relative mx-auto max-w-5xl px-4 md:px-6">
						<div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-sky-200">
							<PhoneCall className="h-4 w-4" />
							Book a 15-Minute Intro Call
						</div>

						<div className="mt-6 space-y-4 text-left">
							<h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
								Busy? Let’s keep it quick and useful.
							</h1>
							<p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
								This short call helps us understand your needs —
								and whether AI automation is the right fit.
							</p>
						</div>
					</div>
				</section>

				<section
					id="cover"
					className="relative z-10 bg-black pb-12 text-slate-50 sm:pb-16">
					<div className="relative mx-auto max-w-5xl px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-2 lg:items-start">
							<div className="h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
								<h2 className="text-xl font-semibold text-slate-100 sm:text-2xl">
									What We’ll Cover
								</h2>
								<ul className="mt-4 space-y-3">
									{whatWeCover.map((item) => (
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
							<div
								id="next"
								className="relative h-full overflow-hidden rounded-2xl border border-sky-500/30 bg-slate-950/60 p-6 shadow-[0_0_40px_rgba(56,189,248,0.15)] backdrop-blur-sm sm:p-8">
								<div className="pointer-events-none absolute inset-0">
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_55%)]" />
								</div>
								<div className="relative flex h-full flex-col">
									<div className="flex items-start gap-3">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/20 text-sky-200 ring-1 ring-sky-400/40">
											<Rocket className="h-5 w-5" />
										</div>
										<div>
											<h3 className="text-xl font-semibold text-slate-100 sm:text-2xl">
												Next Steps: Book Your £100
												Discovery Day
											</h3>
											<p className="mt-2 text-sm leading-relaxed text-slate-300">
												Post 15-min call, the next step
												is a £100 Discovery Day, which
												includes:
											</p>
										</div>
									</div>

									<ul className="mt-4 space-y-3">
										{discoveryDayItems.map((item) => (
											<li
												key={item}
												className="flex items-start gap-2">
												<FileText className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
												<span className="text-sm text-slate-200">
													{item}
												</span>
											</li>
										))}
									</ul>

									<p className="mt-4 text-sm leading-relaxed text-slate-300">
										This session provides a clear,
										actionable roadmap to begin your AI
										automation transformation.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="book"
					className="relative overflow-hidden bg-black py-12 text-slate-50 sm:py-16">
					<div className="pointer-events-none absolute inset-0">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.2),transparent_55%)] opacity-60" />
					</div>
					<div className="relative mx-auto max-w-5xl px-4 md:px-6">
						<div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-sm">
							<h3 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
								Looking forward to speaking with you.
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
								Use the scheduler below to book your free
								15-minute intro call. We’ll add a calendar
								integration here soon.
							</p>
							<div className="mt-6 rounded-2xl border border-dashed border-slate-700 bg-slate-900/80 p-8 text-sm text-slate-400">
								Calendar integration placeholder
							</div>
						</div>
					</div>
				</section>
			</div>
			<SecondaryFooter />
		</main>
	);
}
