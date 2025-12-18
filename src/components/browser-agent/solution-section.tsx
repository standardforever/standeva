"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Clock, Shield, ArrowRight, CheckCircle } from "lucide-react";

const SolutionSection: React.FC = () => {
	const features = [
		{
			icon: Clock,
			title: "Save Hours Weekly",
			description: "Save 10+ hours every week by letting Standeva handle repetitive computer tasks.",
		},
		{
			icon: Monitor,
			title: "Zero Setup Required",
			description: "No installations, no setup run automation directly in your browser.",
		},
		{
			icon: Shield,
			title: "Always Secure",
			description: "Your AI runs on a private cloud computer that remembers your apps and files between sessions.",
		},
	];

	const aiAgents = [
		{
			name: "AI Researcher",
			description: "Conduct deep research and analysis across multiple sources",
		},
		{
			name: "AI Developer",
			description: "Write, debug, and deploy code automatically",
		},
		{
			name: "AI Accountant",
			description: "Handle financial analysis and reporting tasks",
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
						Introducing Standeva.AI
					</h2>
					<p className="mx-auto mt-6 text-xl text-slate-300">
						The Only AI You Need. AI That Uses the Computer.
					</p>
				</motion.div>

				<motion.div
					className="mt-12 rounded-3xl border border-white/10 bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 p-8 backdrop-blur-sm"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					<div className="text-center">
						<h3 className="text-2xl font-bold text-white">
							Introducing our AI Computer use Agent Automate your
							workflows securely
						</h3>
						<p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
							Automate tasks, browse, code, analyze data, and run
							workflows securely on the cloud.
						</p>
					</div>

					<div className="mt-12 grid gap-8 lg:grid-cols-3">
						{features.map((feature, index) => {
							const IconComponent = feature.icon;
							return (
								<motion.div
									key={index}
									className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm"
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: 0.3 + index * 0.1,
									}}>
									<div className="flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
											<IconComponent className="h-6 w-6 text-blue-400" />
										</div>
										<div>
											<h4 className="text-lg font-semibold text-white">
												{feature.title}
											</h4>
											<p className="mt-2 text-sm text-slate-300">
												{feature.description}
											</p>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>

					<motion.div
						className="mt-12 text-center"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.6 }}>
						<motion.button
							className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							Get Free AI Audit
							<ArrowRight className="h-5 w-5" />
						</motion.button>
					</motion.div>
				</motion.div>

				{/* AI Agents Section */}
				<motion.div
					className="mt-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<div className="text-center">
						<h3 className="text-2xl font-bold text-white">
							Meet Your AI Team
						</h3>
						<p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
							Specialized AI agents ready to handle specific tasks
							for you
						</p>
					</div>

					<div className="mt-12 grid gap-6 md:grid-cols-3">
						{aiAgents.map((agent, index) => (
							<motion.div
								key={index}
								className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								whileHover={{
									y: -5,
									borderColor: "rgba(59, 130, 246, 0.3)",
								}}>
								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-r from-blue-500 to-purple-600">
										<CheckCircle className="h-5 w-5 text-white" />
									</div>
									<h4 className="text-lg font-semibold text-white">
										{agent.name}
									</h4>
								</div>
								<p className="mt-3 text-sm text-slate-300">
									{agent.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Testimonial */}
				<motion.div
					className="mt-16 rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-sm"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<div className="text-center">
						<div className="mx-auto mb-6 h-16 w-16 rounded-full bg-linear-to-r from-blue-500 to-purple-600 p-0.5">
							<div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
								<span className="text-2xl font-bold text-white">
									OS
								</span>
							</div>
						</div>
						<blockquote className="text-xl text-slate-100">
							&ldquo;Process Zero Browser Agent is a game-changer. It
							speeds up prototyping and automation, cutting out
							the endless back-and-forth. I&apos;d definitely miss
							it if it were gone.&rdquo;
						</blockquote>
						<div className="mt-6">
							<p className="font-semibold text-white">
								Omar Saloum
							</p>
							<p className="text-sm text-slate-400">
								Entrepreneur
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default SolutionSection;
