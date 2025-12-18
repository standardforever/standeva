"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

interface Testimonial {
	name: string;
	role: string;
	company: string;
	quote: string;
	avatar: string;
	results: string[];
}

const testimonials: Testimonial[] = [
	{
		name: "Maya Thompson",
		role: "Head of Revenue Ops",
		company: "Northwind Cloud",
		quote:
			"Our browser agent now runs the boring Salesforce hygiene jobs at 2am. It captures proof in every tab so compliance never questions it.",
		avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
		results: ["41% faster pipeline updates", "Zero missed follow-ups"],
	},
	{
		name: "Jordan Park",
		role: "Director of CX",
		company: "Loop Labs",
		quote:
			"Escalations went from thirty browser tabs to one Slack summary. Process Zero reads Zendesk, digs into admin consoles, and loops us in only when policy demands it.",
		avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=200&q=80",
		results: ["58% faster resolutions", "CSAT +18 pts"],
	},
];

const TestimonialsSection: React.FC = () => {
	return (
		<section className="px-6 py-24">
			<div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900/80 p-10">
				<div className="mb-12 text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Proof</p>
					<h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
						Teams trust Process Zero Browser Agent to run real work
					</h2>
				</div>

				<div className="grid gap-8 md:grid-cols-2">
					{testimonials.map((testimonial) => (
						<motion.article
							key={testimonial.name}
							className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}>
							<Quote className="h-8 w-8 text-blue-300" />
							<p className="mt-4 text-lg text-slate-100">“{testimonial.quote}”</p>
							<div className="mt-6 flex items-center gap-4">
								<Image
									src={testimonial.avatar}
									alt={testimonial.name}
									width={56}
									height={56}
									className="rounded-full border border-white/10 object-cover"
								/>
								<div>
									<p className="font-semibold text-white">{testimonial.name}</p>
									<p className="text-sm text-slate-400">
										{testimonial.role} · {testimonial.company}
									</p>
								</div>
							</div>
							<ul className="mt-6 space-y-2 text-sm text-blue-200">
								{testimonial.results.map((result) => (
									<li key={result} className="rounded-full border border-blue-500/30 px-3 py-1 inline-flex">
										{result}
									</li>
								))}
							</ul>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
