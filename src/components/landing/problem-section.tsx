import type { FC } from "react";
import { CreditCard, Users, ShoppingBag } from "lucide-react";

const items = [
	{
		id: "finance",
		icon: CreditCard,
		title: "finance",
		body: "The cost of processing finance tasks is increasing, driven by rising salaries and software licensing fees, as well as growing demands for information.",
	},
	{
		id: "hr",
		icon: Users,
		title: "hr",
		body: "Onboarding, staff changes, and routine requests consume an increasing number of manual hours, driving up your operational costs.",
	},
	{
		id: "sales-plus",
		icon: ShoppingBag,
		title: "sales & marketing",
		body: "Sales and marketing teams are overloaded with manual lead handling and order processing, slowing response times and limiting revenue growth",
	},
];

const ProblemSection: FC = () => {
	return (
		<section
			id="problems"
			className="relative overflow-hidden bg-black py-16 text-slate-50 sm:py-20 md:py-24">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.22),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 text-center md:px-6 md:gap-12">
				<div className="space-y-4">
					<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-emerald-200">
						the problem
					</div>
					<h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
						too much time spent on admin tasks?
					</h2>
					<p className="mx-auto max-w-3xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
						We help your team get more time to do higher value tasks
						that really matter
					</p>
				</div>

				<div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
					{items.map((item) => {
						const Icon = item.icon;
						return (
							<div
								key={item.id}
								className="flex h-full flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
								<div className="flex items-center gap-3">
									<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
										<Icon className="h-5 w-5" />
									</div>
									<h3 className="text-sm font-semibold text-slate-50 sm:text-[0.95rem]">
										{item.title}
									</h3>
								</div>
								<p className="text-xs leading-relaxed text-slate-300 sm:text-[0.8rem] md:text-[0.9rem]">
									{item.body}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProblemSection;
