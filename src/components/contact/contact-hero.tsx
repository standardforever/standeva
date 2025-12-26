import Link from "next/link";
import { MapPin, MessageSquare, Sparkles } from "lucide-react";

const ContactHero = () => {
	return (
		<section className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),transparent_60%),radial-gradient(circle_at_bottom,_rgba(124,58,237,0.28),transparent_60%)] opacity-80 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 md:px-6">
				<div className="flex flex-col gap-4">
					<span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold tracking-[0.24em] text-sky-100">
						contact process zero
					</span>
					<h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
						let&apos;s plan your next automated workflow.
					</h1>
					<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
						Share a few details about your team, the tools you rely
						on, and what a win looks like. We&apos;ll respond with a
						clear next step.
					</p>
					<div className="mt-2 flex flex-wrap gap-3">
						<Link
							href="/intro-call"
							className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/40 transition-colors duration-300 ease-out hover:from-slate-800 hover:to-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
							free 60 min discovery call
						</Link>
						{/* <Link
							href="#contact-form"
							className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
							send a message
						</Link> */}
					</div>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
					<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-sm">
						<div className="flex items-center gap-3">
							<div className="rounded-lg bg-sky-500/10 p-3 text-sky-300">
								<MapPin className="h-5 w-5" />
							</div>
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
								office
							</p>
						</div>
						<h3 className="mt-4 text-xl font-semibold text-white">
							Strixton Manor Business Centre
						</h3>
						<p className="mt-2 text-sm leading-relaxed text-slate-300">
							15-17 Strixton Manor Business Centre,
							<br />
							Strixton, Northamptonshire,
							<br />
							NN29 7PA
						</p>
					</div>

					<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_0_40px_rgba(16,185,129,0.12)] backdrop-blur-sm">
						<div className="flex items-center gap-3">
							<div className="rounded-lg bg-emerald-500/10 p-3 text-emerald-200">
								<MessageSquare className="h-5 w-5" />
							</div>
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
								what to share
							</p>
						</div>
						<h3 className="mt-4 text-xl font-semibold text-white">
							context that helps us move fast
						</h3>
						<ul className="mt-3 space-y-2 text-sm text-slate-300">
							<li className="flex items-start gap-2">
								<span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
								<span>processes slowing the team down</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
								<span>tools and data sources involved</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
								<span>
									deadlines, risks, or compliance needs
								</span>
							</li>
						</ul>
					</div>

					<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_0_40px_rgba(139,92,246,0.18)] backdrop-blur-sm">
						<div className="flex items-center gap-3">
							<div className="rounded-lg bg-purple-500/10 p-3 text-purple-200">
								<Sparkles className="h-5 w-5" />
							</div>
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
								next steps
							</p>
						</div>
						<h3 className="mt-4 text-xl font-semibold text-white">
							expect a practical follow-up
						</h3>
						<p className="mt-2 text-sm leading-relaxed text-slate-300">
							We review each request and suggest the right next
							move whether that&apos;s a quick intro call or a
							deeper discovery workshop.
						</p>
						<div className="mt-4 flex flex-wrap gap-2">
							<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
								intro call
							</span>
							<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
								workflow audit
							</span>
							<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
								pilot build plan
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactHero;
