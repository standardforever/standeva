"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
	Users,
	MessageSquare,
	TrendingUp,
	Star,
	Award,
} from "lucide-react";

const benefits = [
	{
		icon: TrendingUp,
		title: "Preferential commercial terms",
		description: "Early adopter pricing and flexible agreements",
	},
	{
		icon: Users,
		title: "Direct access to our engineering team",
		description: "Work directly with the people building your solutions",
	},
	{
		icon: MessageSquare,
		title: "Influence over our roadmap",
		description: "Help shape the future of our platform",
	},
	{
		icon: Star,
		title: "Early case-study opportunities",
		description: "Showcase your success story to the industry",
	},
	{
		icon: Award,
		title: "Savings-linked pricing model",
		description: "Pay only 33% of realized first-year recurring savings",
	},
];

const EarlyPartnersCTA: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<section
			id="partnership"
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-32">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.25),transparent_50%),radial-gradient(ellipse_at_center,_rgba(16,185,129,0.25),transparent_70%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
					Join Us
				</motion.div>

				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
					AN INVITATION TO{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-purple-400">
						EARLY PARTNERS
					</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
					We&apos;re partnering with a select group of
					forward-thinking UK businesses to co-create the next
					generation of secure, on-prem AI automation.
				</motion.p>

				{/* Benefits grid */}
				<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{benefits.map((benefit, index) => {
						const Icon = benefit.icon;
						return (
							<motion.div
								key={benefit.title}
								initial={{ opacity: 0, y: 30 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{
									duration: 0.6,
									delay: 0.3 + index * 0.1,
								}}
								className="group flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-purple-600 shadow-lg shadow-sky-500/30 transition-transform duration-300 group-hover:scale-110">
									<Icon className="h-6 w-6 text-white" />
								</div>
								<h3 className="text-center text-base font-semibold text-slate-100">
									{benefit.title}
								</h3>
								<p className="text-center text-sm text-slate-400">
									{benefit.description}
								</p>
							</motion.div>
						);
					})}
				</div>

				{/* Pricing highlight */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="mx-auto mt-16 max-w-3xl rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-purple-500/10 p-8 shadow-[0_0_60px_rgba(16,185,129,0.2)] backdrop-blur-sm md:p-10">
					<div className="space-y-6">
						<div className="flex flex-col items-center gap-3">
							<div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200">
								Zero Upfront Cost
							</div>
							<h3 className="text-2xl font-bold text-slate-100 sm:text-3xl">
								Results-Based Pricing
							</h3>
						</div>

						<div className="flex items-baseline justify-center gap-2">
							<span className="text-5xl font-bold text-emerald-400 sm:text-6xl">
								33%
							</span>
							<div className="text-left">
								<div className="text-lg font-semibold text-slate-200">
									of first year savings
								</div>
								<div className="text-sm text-slate-400">
									only when automation delivers
								</div>
							</div>
						</div>

						<div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-4">
							<p className="text-sm font-medium text-sky-200">
								<span className="font-bold">
									No savings = no cost.
								</span>{" "}
								A genuine partnership aligned to your success.
							</p>
						</div>
					</div>
				</motion.div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 1 }}
					className="mt-12 flex flex-col items-center gap-6">
					<p className="max-w-2xl text-base text-slate-300 sm:text-lg">
						If you want to transform your operations with{" "}
						<span className="font-semibold text-slate-100">
							minimal risk and maximum impact
						</span>
						, we&apos;d love to work with you.
					</p>

					<motion.a
						href="#"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:opacity-90">
						Book Your Free AI Audit
					</motion.a>

					<p className="text-xs text-slate-400">
						No obligation • Free consultation • UK businesses only
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default EarlyPartnersCTA;
