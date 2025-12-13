import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";
import {
	CheckCircle2,
	FileText,
	Shield,
	Users,
} from "lucide-react";

export const metadata = {
	title: "Discovery Series & AI Audit (£100) | ProcessZero",
	description:
		"Book your £100 Discovery Series. Map processes, shape an AI-first strategy, review security, and receive a clear AI Audit Report with timelines, costs, and ROI.",
};

const included = [
	"Understand what you're trying to achieve",
	"Shape an AI-first strategy to reduce marginal costs and scale faster",
	"Map repetitive processes with your team to identify automation opportunities",
	"Review compliance, security and how we safeguard your data",
	"End-of-day summary, priorities and next steps",
];

const accordionItems = [
	{
		id: 1,
		title: "understanding your goals",
		summary:
			"We start by listening to your objectives shape the entire day.",
		details: [
			"We begin by listening. The first part of the day focuses on understanding:",
			"What outcomes you want from AI automation",
			"Where your team is currently feeling friction or bottlenecks",
			"Any existing initiatives, constraints, risks, or opportunities you’re exploring",
			"This ensures the rest of the session is aligned fully to your objectives.",
		],
	},
	{
		id: 2,
		title: "ai-first strategy session",
		summary:
			"We explore how AI can lower costs and increase scalable capacity.",
		details: [
			"Once we understand your goals, we work with you to explore:",
			"How AI can reduce marginal operating costs",
			"Where automation can unlock scalable, repeatable growth",
			"How to shift staff from low-value tasks to higher-impact work",
			"What an AI-first operating model could look like for your organisation",
			"This section is collaborative, designed to help you shape a forward-looking strategy rather than simply receive a list of tasks to automate.",
		],
	},
	{
		id: 3,
		title: "process mapping & roi analysis",
		summary:
			"Stakeholder interviews, SOP review, time-and-motion understanding.",
		details: [
			"Next, we map your repetitive processes with the support of your internal teams. This often includes:",
			"Speaking with key stakeholders",
			"Reviewing existing SOPs",
			"Understanding workflows, handoffs, systems and exceptions",
			"Measuring activity frequency, cycle time and current labour cost",
			"Identifying tasks that are rule-based, repetitive or error-prone",
			"This gives us the data needed to calculate savings, ROI and automation feasibility.",
		],
	},
	{
		id: 4,
		title: "compliance & security overview",
		summary:
			"How your data stays in your network and how our secure AI agents work.",
		details: [
			"Because every solution we build runs inside your own network, we walk through:",
			"How your data stays fully under your control",
			"How our open-source AI agents operate securely",
			"How we avoid frontier models and external data sharing",
			"How we ensure operational integrity, auditability and governance",
			"This section reassures your team that automation does not compromise privacy, security, or compliance obligations.",
		],
	},
	{
		id: 5,
		title: "end-of-day review",
		summary: "We confirm priorities and prepare your AI Audit Report.",
		details: [
			"At the end of the session, we regroup to:",
			"Review all identified automation opportunities",
			"Discuss any additional areas surfaced by your team",
			"Prioritise opportunities based on impact, effort and strategic value",
			"Agree what success looks like for your business moving forward",
			"This ensures the final report reflects your priorities, not ours.",
		],
	},
];

const afterItems = [
	"Your prioritised automation opportunities",
	"Recommended solution designs",
	"Effort, timeline and implementation roadmap",
	"Estimated savings and ROI",
	"Compliance & security considerations",
	"We then schedule a 1-hour presentation (Teams or in-person) to walk you through the findings in detail and answer any questions.",
	"A physical copy of the audit is also provided for your internal decision-makers.",
	"Once approved, we begin building your automations using secure, open-source AI agents inside your network.",
];

export default function DiscoveryDayPage() {
	const navItems = [
		{ label: "overview", href: "#overview" },
		{ label: "agenda", href: "#agenda" },
		{ label: "afterwards", href: "#after" },
	];

	const cta = {
		label: "start with a free 15-minute intro call.",
		href: "/intro-call",
	};

	return (
		<main className="min-h-screen w-full overflow-x-hidden bg-black">
			<SecondaryHeader navItems={navItems} cta={cta} />
			<div className="w-full pt-16 sm:pt-20">
				<section
					id="overview"
					className="relative overflow-hidden py-16 text-slate-50 sm:py-20 md:py-24">
					<div className="pointer-events-none absolute inset-0">
						<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.25),transparent_55%)] opacity-70 mix-blend-screen" />
					</div>
					<div className="relative mx-auto max-w-5xl px-4 md:px-6">
						<div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-sky-200">
							<FileText className="h-4 w-4" />
							discovery series & ai audit (£100)
						</div>
						<div className="mt-6 space-y-4 text-left">
							<h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
								what’s included in your £100 discovery series
							</h1>
							<p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
								A focused, single-day engagement that maps your
								automation opportunities, clarifies strategy,
								and sets the path to an AI Audit Report.
							</p>
						</div>
					</div>
				</section>

				<section
					id="included"
					className="relative z-10 bg-black pb-12 text-slate-50 sm:pb-16">
					<div className="relative mx-auto max-w-5xl px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
							<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
								<h2 className="text-xl font-semibold text-slate-100 sm:text-2xl">
									what’s included
								</h2>
								<ul className="mt-4 space-y-3">
									{included.map((item) => (
										<li
											key={item}
											className="flex items-start gap-2">
											<CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
											<span className="text-sm text-slate-200">
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>
							<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
								<h2 className="text-xl font-semibold text-slate-100 sm:text-2xl">
									confidence built in
								</h2>
								<ul className="mt-4 space-y-3">
									<li className="flex items-start gap-2">
										<Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-300" />
										<span className="text-sm text-slate-200">
											Data stays in your network; secure
											open-source AI agents only
										</span>
									</li>
									<li className="flex items-start gap-2">
										<Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-300" />
										<span className="text-sm text-slate-200">
											Zero hidden licences or fees;
											simple, transparent pricing
										</span>
									</li>
									<li className="flex items-start gap-2">
										<Users className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-300" />
										<span className="text-sm text-slate-200">
											Collaborative with your team;
											tailored to your operations
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section
					id="agenda"
					className="relative overflow-hidden bg-slate-950/40 py-12 text-slate-50 sm:py-16">
					<div className="pointer-events-none absolute inset-0">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.12),transparent_55%)]" />
					</div>
					<div className="relative mx-auto max-w-5xl px-4 md:px-6">
						<h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
							discovery series agenda (expand for details)
						</h2>
						<div className="mt-6 space-y-4">
							{accordionItems.map((item) => (
								<details
									key={item.id}
									className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm">
									<summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-900">
										<div>
											<p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
												step {item.id}
											</p>
											<p className="mt-1 text-base font-semibold text-slate-100 sm:text-lg">
												{item.title}
											</p>
											<p className="mt-1 text-sm text-slate-300">
												{item.summary}
											</p>
										</div>
										<div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-200">
											<span className="text-lg leading-none group-open:rotate-45 transition-transform duration-200">
												+
											</span>
										</div>
									</summary>
									<div className="border-t border-slate-800 px-6 py-4 text-sm leading-relaxed text-slate-300">
										<ul className="space-y-2">
											{item.details.map((line) => (
												<li
													key={line}
													className="flex items-start gap-2">
													<CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
													<span>{line}</span>
												</li>
											))}
										</ul>
									</div>
								</details>
							))}
						</div>
					</div>
				</section>

				<section
					id="after"
					className="relative overflow-hidden bg-black py-12 text-slate-50 sm:py-16">
					<div className="pointer-events-none absolute inset-0">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.2),transparent_55%)] opacity-60" />
					</div>
					<div className="relative mx-auto max-w-5xl px-4 md:px-6">
						<div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm">
							<h3 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
								what happens after the discovery series
							</h3>
							<ul className="mt-4 space-y-3">
								{afterItems.map((item) => (
									<li
										key={item}
										className="flex items-start gap-2">
										<CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
										<span className="text-sm text-slate-200">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				<section
					id="book"
					className="relative overflow-hidden bg-black pb-16 text-slate-50 sm:pb-20">
					<div className="pointer-events-none absolute inset-0">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),transparent_60%)] opacity-60" />
					</div>
					<div className="relative mx-auto max-w-5xl px-4 md:px-6">
						<div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-sm">
							<h3 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
								ready to lock in your discovery series?
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
								We’ll add a scheduler here. For now, reach out
								and we’ll arrange your £100 session.
							</p>
							<div className="mt-6 flex flex-wrap justify-center gap-4">
								<a
									href="/intro-call"
									className="rounded-lg bg-linear-to-r from-blue-500 to-purple-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition-colors duration-300 ease-out hover:from-slate-800 hover:to-slate-800">
									start free with a 15-min intro call
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
			<SecondaryFooter />
		</main>
	);
}
