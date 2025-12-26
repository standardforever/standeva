"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Send, ShieldCheck } from "lucide-react";

const inputClasses =
	"w-full rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40";

const ContactFormSection = () => {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSubmitted(true);
	};

	useEffect(() => {
		if (!submitted) return;

		const timer = setTimeout(() => setSubmitted(false), 4000);
		return () => clearTimeout(timer);
	}, [submitted]);

	return (
		<section
			id="contact-form"
			className="relative overflow-hidden bg-slate-950 py-16 text-slate-50 sm:py-20">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.18),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.18),transparent_40%)] opacity-70" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 md:px-6">
				<div className="grid items-start gap-8 lg:grid-cols-2">
					<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-blue-500/10 sm:p-8 backdrop-blur">
						<div className="flex items-start gap-3">
							<div className="rounded-lg bg-sky-500/10 p-3 text-sky-300">
								<Send className="h-5 w-5" />
							</div>
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
									get in touch
								</p>
								<h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
									tell us about your project
								</h2>
								<p className="mt-2 text-sm text-slate-300">
									We respond with a clear next step and a plan
									to keep momentum.
								</p>
							</div>
						</div>

						{submitted && (
							<div className="mt-4 flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
								<ShieldCheck className="h-4 w-4" />
								<span>
									Thanks for reaching out. We&apos;ll reply
									with next steps shortly.
								</span>
							</div>
						)}

						<form
							onSubmit={handleSubmit}
							className="mt-6 space-y-4">
							<div className="grid gap-4 sm:grid-cols-2">
								<label className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
									full name
									<input
										type="text"
										name="name"
										required
										placeholder="alex taylor"
										className={inputClasses}
									/>
								</label>
								<label className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
									work email
									<input
										type="email"
										name="email"
										required
										placeholder="you@company.com"
										className={inputClasses}
									/>
								</label>
							</div>

							<div className="grid gap-4 sm:grid-cols-2">
								<label className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
									company
									<input
										type="text"
										name="company"
										placeholder="process zero"
										className={inputClasses}
									/>
								</label>
								<label className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
									phone (optional)
									<input
										type="tel"
										name="phone"
										placeholder="+44 0000 000000"
										className={inputClasses}
									/>
								</label>
							</div>

							<label className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
								project focus
								<select
									name="topic"
									className={inputClasses}
									defaultValue="resolve-growth-constraints">
									<option value="resolve-growth-constraints">
										resolve growth constraints
									</option>
									<option value="reduce-operating-costs">
										reduce operating costs
									</option>
									<option value="build-ai-strategy">
										build an AI strategy for your business
									</option>
								</select>
							</label>

							<label className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
								how can we help?
								<textarea
									name="message"
									required
									rows={4}
									className={`${inputClasses} min-h-[140px] resize-none`}
								/>
							</label>

							<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
								<button
									type="submit"
									className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/30 transition-colors duration-300 ease-out hover:from-slate-800 hover:to-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto">
									send message
								</button>
								<p className="text-xs text-slate-400">
									No spam. We only use these details to follow
									up with you.
								</p>
							</div>
						</form>
					</div>

					<div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_0_40px_rgba(59,130,246,0.15)] sm:p-8">
						<div className="pointer-events-none absolute inset-0 opacity-60">
							<div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-blue-500/15 blur-2xl" />
							<div className="absolute right-0 -bottom-8 h-28 w-28 rounded-full bg-purple-500/15 blur-2xl" />
						</div>

						<div className="relative space-y-6">
							<div className="flex items-start gap-3">
								<div className="rounded-lg bg-blue-500/10 p-3 text-blue-200">
									<MapPin className="h-5 w-5" />
								</div>
								<div>
									<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
										our office
									</p>
									<p className="mt-2 text-base font-semibold text-white">
										Strixton Manor Business Centre
									</p>
									<p className="mt-1 text-sm leading-relaxed text-slate-200">
										15-17 Strixton Manor Business Centre,
										<br />
										Strixton, Northamptonshire,
										<br />
										NN29 7PA
									</p>
								</div>
							</div>

							<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
								<p className="text-sm font-semibold text-white">
									company details
								</p>
								<div className="mt-2 text-sm text-slate-300">
									<p className="text-slate-100">
										EACH GROUP LIMITED
									</p>
									<p className="mt-1">
										Company Number: 14108972
									</p>
									<p className="mt-1">
										Trading as Process Zero
									</p>
									<a
										href="https://find-and-update.company-information.service.gov.uk/company/14108972"
										className="mt-2 inline-flex text-xs text-blue-200 underline decoration-blue-300/60 underline-offset-4 transition-colors hover:text-blue-100">
										https://find-and-update.company-information.service.gov.uk/company/14108972
									</a>
								</div>
							</div>

							<div className="rounded-xl border border-slate-800/80 bg-slate-900/80 p-4">
								<p className="text-sm font-semibold text-white">
									what happens next
								</p>
								<p className="mt-2 text-sm leading-relaxed text-slate-300">
									We review your note and share the most
									useful next step whether that&apos;s a quick
									intro call or a working session to map the
									workflow.
								</p>
							</div>

							<div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4">
								<p className="text-sm font-semibold text-blue-100">
									prefer to talk it through?
								</p>
								<p className="mt-2 text-sm text-blue-50/90">
									Book a 60 minute free discovery call to
									cover your goals live with our team.
								</p>
								<Link
									href="/intro-call"
									className="mt-3 inline-flex w-fit items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/30 transition-colors duration-300 ease-out hover:from-slate-800 hover:to-slate-800">
									book intro call
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactFormSection;
