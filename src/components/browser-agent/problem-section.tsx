"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Copy, FileText, Users, Zap, Lock } from "lucide-react";

const ProblemSection: React.FC = () => {
	const painPoints = [
		{
			icon: MessageCircle,
			title: "Your chatbot keeps talking; you&apos;re still the one opening apps and clicking.",
			description: "AI assistants can only talk – they can&apos;t take action on your computer.",
		},
		{
			icon: Copy,
			title: "You&apos;re copy-pasting between email, Sheets, and CRM, hoping nothing breaks.",
			description: "Manual data transfer is error-prone and wastes valuable time.",
		},
		{
			icon: FileText,
			title: "You get answers, not action projects stall because no one presses the buttons.",
			description: "Traditional AI provides information but doesn&apos;t execute tasks.",
		},
		{
			icon: Users,
			title: "Focus bleeds with tab-hopping and logins; your best hours disappear.",
			description: "Context switching between multiple tools kills productivity.",
		},
		{
			icon: Zap,
			title: "Repetitive tasks: exports, forms, file renames again and again.",
			description: "Automation should handle the boring work, not you.",
		},
		{
			icon: Lock,
			title: "Each app is isolated with no AI agent to manage all your tools.",
			description: "Your tools work in silos instead of as an integrated system.",
		},
	];

	return (
		<section className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
						Does Your Experience with
						<br />
						<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
							AI Feel Useless at Real Work?
						</span>
					</h2>
					<p className="mx-auto mt-6 text-lg text-slate-300">
						You&apos;re not alone. Most AI tools today are just chatbots that can&apos;t actually do work.
					</p>
				</motion.div>

				<div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{painPoints.map((point, index) => {
						const IconComponent = point.icon;
						return (
							<motion.div
								key={index}
								className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.3)" }}>
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
										<IconComponent className="h-6 w-6 text-blue-400" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white">
											{point.title}
										</h3>
										<p className="mt-2 text-sm text-slate-300">
											{point.description}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-slate-900/50 p-8 text-center backdrop-blur-sm"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<h3 className="text-2xl font-bold text-white">
						Sounds familiar?
					</h3>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
						You&apos;re spending more time managing AI tools than getting actual work done.
						It&apos;s time for an AI that can actually use your computer.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default ProblemSection;
