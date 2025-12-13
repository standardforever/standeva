"use client";

import type { FC } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
	Search,
	Lightbulb,
	Rocket,
	RefreshCw,
	PhoneCall,
	CheckCircle2,
	ArrowRight,
	ChevronDown,
	ChevronUp,
	Target,
} from "lucide-react";

interface ACTSPhase {
	id: string;
	letter: string;
	letterBgColor: string;
	icon: typeof PhoneCall;
	title: string;
	subtitle: string;
	briefDescription: string;
	expandedContent: {
		intro?: string;
		includes?: {
			heading: string;
			items: Array<{ title: string; description: string }>;
		};
		outcomes?: {
			heading: string;
			items: string[];
		};
		deliverables?: {
			heading: string;
			items: string[];
		};
		closing: string;
	};
	color: string;
	borderColor: string;
	bgColor: string;
	image: string;
	cta?: {
		text: string;
		href: string;
	};
}

const actsPhases: ACTSPhase[] = [
	{
		id: "align",
		letter: "A",
		letterBgColor: "bg-sky-400",
		icon: Target,
		title: "Align - Build shared understanding & direction",
		subtitle:
			"The Align phase is where we establish clarity about your goals, challenges, systems, and constraints. It ensures we're fully aligned before moving into deeper analysis or automation design.",
		briefDescription:
			"Establish clarity about your goals, challenges, systems, and constraints before moving into deeper analysis.",
		expandedContent: {
			includes: {
				heading: "This phase includes:",
				items: [
					{
						title: "15-Minute Introductory Call",
						description:
							"A quick conversation to understand where you are, what's happening inside the business, and whether AI automation can meaningfully help.",
					},
					{
						title: "Discovery Series: Alignment Session(s)",
						description:
							"We begin gathering context, identifying pain points, understanding your team, and mapping your strategic objectives.",
					},
				],
			},
			outcomes: {
				heading: "By the end of this stage, we're aligned on:",
				items: [
					"What outcomes you want",
					"What problems we're solving",
					"What processes or departments are in scope",
					"The transformation direction",
					"Any constraints (technical, operational, cultural)",
				],
			},
			closing:
				"This is where we align with you and begin shaping your AI strategy.",
		},
		color: "from-sky-500 to-blue-600",
		borderColor: "border-sky-500/40",
		bgColor: "bg-sky-500/10",
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
		cta: {
			text: "Book Intro Call",
			href: "/intro-call",
		},
	},
	{
		id: "clarify",
		letter: "C",
		letterBgColor: "bg-indigo-400",
		icon: Search,
		title: "Clarify - Map your processes, diagnose bottlenecks & build your AI strategy",
		subtitle:
			"In the Clarify phase, we turn assumptions into evidence. We deeply analyse your processes, data flows, systems and bottlenecks to determine where automation will have the greatest impact.",
		briefDescription:
			"Turn assumptions into evidence through deep analysis of your processes, systems, and bottlenecks.",
		expandedContent: {
			intro: "We deeply analyse your processes, data flows, systems and bottlenecks to determine where automation will have the greatest impact.",
			includes: {
				heading: "This includes:",
				items: [
					{
						title: "Process mapping sessions",
						description:
							"We review your real workflows, not theoretical ones.",
					},
					{
						title: "Bottleneck identification",
						description:
							"Understanding resource drain, complexity, handoffs, and delays.",
					},
					{
						title: "AI readiness assessment",
						description:
							"Systems, data quality, access, documentation and feasibility.",
					},
					{
						title: "Automation opportunities & ROI modelling",
						description:
							"Identifying high-impact automation areas with clear return on investment.",
					},
					{
						title: "Full AI Audit Report & Automation Roadmap",
						description:
							"Comprehensive documentation delivered at the end of the Discovery Series.",
					},
				],
			},
			deliverables: {
				heading:
					"This is delivered at the end of the Discovery Series and includes:",
				items: [
					"Your AI Strategy Plan",
					"Recommended automation opportunities",
					"Expected savings and ROI",
					"Process diagrams and workflow clarifications",
					"Timeline & technical requirements",
				],
			},
			closing:
				"The Clarify phase ensures we're solving the right problems in the right order — with complete transparency.",
		},
		color: "from-indigo-500 to-violet-600",
		borderColor: "border-indigo-500/40",
		bgColor: "bg-indigo-500/10",
		image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80",
		cta: {
			text: "Book Your Discovery Series",
			href: "/discovery-day",
		},
	},
	{
		id: "transform",
		letter: "T",
		letterBgColor: "bg-emerald-400",
		icon: Rocket,
		title: "Transform - AI Implementation Partner — build & deploy your automation agents",
		subtitle:
			"Now we move from strategy to action. In the Transform phase, Process Zero becomes your AI implementation partner, building private automation agents, workflows, and LLM powered systems that run securely inside your environment.",
		briefDescription:
			"Build and deploy private automation agents, workflows, and LLM systems that run securely inside your environment.",
		expandedContent: {
			intro: "Process Zero becomes your AI implementation partner.",
			includes: {
				heading: "This includes:",
				items: [
					{
						title: "Designing and configuring your automation agents",
						description:
							"Custom-built AI agents tailored to your specific workflows.",
					},
					{
						title: "Integrating with your existing systems",
						description:
							"Seamless connection to your current technology stack.",
					},
					{
						title: "Testing workflows end-to-end",
						description:
							"Comprehensive validation of all automation processes.",
					},
					{
						title: "Validating logic, rules, decisions, and outputs",
						description:
							"Ensuring accuracy and reliability of AI decisions.",
					},
					{
						title: "Deploying automations securely",
						description:
							"Safe, controlled rollout within your infrastructure.",
					},
					{
						title: "Training your team on how the agents operate",
						description:
							"Empowering your staff to work effectively with AI agents.",
					},
					{
						title: "Establishing monitoring and governance",
						description:
							"Setting up oversight and control mechanisms.",
					},
				],
			},
			deliverables: {
				heading: "We deliver:",
				items: [
					"Private open-source LLM models (on-prem, VPC or your environment)",
					"Closed-loop automation agents",
					"Document understanding systems",
					"Process workflows & integrations",
					"Operational dashboards & controls",
				],
			},
			closing:
				"This phase is where you begin to see 50–90% reductions in repetitive digital workload across targeted processes.",
		},
		color: "from-emerald-500 to-teal-600",
		borderColor: "border-emerald-500/40",
		bgColor: "bg-emerald-500/10",
		image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&q=80",
	},
	{
		id: "support",
		letter: "S",
		letterBgColor: "bg-amber-400",
		icon: RefreshCw,
		title: "Support - Ongoing optimisation, monitoring & long-term transformation advisory",
		subtitle:
			"AI is not a one-off project — it's a continuous transformation. The Support phase ensures your automations grow stronger over time. We provide both operational support and strategic transformation partnership.",
		briefDescription:
			"Ensure your automations grow stronger over time with operational support and strategic transformation partnership.",
		expandedContent: {
			intro: "The Support phase ensures your automations grow stronger over time.",
			includes: {
				heading: "This includes:",
				items: [
					{
						title: "Monitoring your agents",
						description:
							"Continuous oversight of automation performance.",
					},
					{
						title: "Updating automations as processes evolve",
						description: "Adapting to changing business needs.",
					},
					{
						title: "Introducing new workflows as your business grows",
						description:
							"Scaling automation capabilities with your organization.",
					},
					{
						title: "Improving performance, accuracy, and stability",
						description: "Ongoing optimization of AI systems.",
					},
					{
						title: "Adding new agent capabilities and integrations",
						description: "Expanding functionality over time.",
					},
					{
						title: "Regular reviews on savings, ROI, and opportunities",
						description:
							"Tracking value and identifying new possibilities.",
					},
					{
						title: "Advisory on wider AI transformation across the organisation",
						description:
							"Strategic guidance for organization-wide AI adoption.",
					},
				],
			},
			deliverables: {
				heading: "Support is both:",
				items: [
					"AI Support & Maintenance - keeping your automation running smoothly",
					"AI Transformation Partnership - acting as your long-term consultant and solution provider",
				],
			},
			closing:
				"The S in ACTS is where you scale from individual automations to a truly AI-enabled organisation.",
		},
		color: "from-amber-500 to-orange-600",
		borderColor: "border-amber-500/40",
		bgColor: "bg-amber-500/10",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
	},
];

const ServiceFrameworkSection: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.05,
		triggerOnce: true,
	});

	const [expandedPhases, setExpandedPhases] = useState<
		Record<string, boolean>
	>({});

	const togglePhase = (id: string) => {
		setExpandedPhases((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	return (
		<section
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.12),transparent_50%)] opacity-70" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 md:px-6">
				{/* Section header */}
				<div className="text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-sky-200">
						The ACTS Framework
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
						The ACTS Automation Framework
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
						Every organisation we work with goes through the same
						structured, proven four-stage framework ({" "}
						<span className="font-semibold text-sky-400">
							Align
						</span>{" "}
						→{" "}
						<span className="font-semibold text-indigo-400">
							Clarify
						</span>{" "}
						→{" "}
						<span className="font-semibold text-emerald-400">
							Transform
						</span>{" "}
						→{" "}
						<span className="font-semibold text-amber-400">
							Support{" "}
						</span>
						) ensuring your AI strategy is grounded in reality, your
						processes are understood, your automations are built
						correctly, and your organisation receives the long-term
						support required to scale. Our ACTS model is the
						backbone of how Process Zero delivers trustworthy,
						private AI automation solutions.
					</motion.p>
				</div>

				{/* ACTS Phases */}
				<div className="mt-20 space-y-20">
					{actsPhases.map((phase, index) => {
						const Icon = phase.icon;
						const isEven = index % 2 === 0;
						const isExpanded = expandedPhases[phase.id] || false;

						return (
							<motion.div
								key={phase.id}
								id={phase.id}
								initial={{ opacity: 0, y: 40 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{
									duration: 0.6,
									delay: 0.4 + index * 0.2,
								}}
								className="relative">
								<div
									className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${
										isEven ? "" : "lg:grid-flow-dense"
									}`}>
									{/* Content */}
									<div
										className={`flex flex-col justify-center ${
											isEven ? "" : "lg:col-start-2"
										}`}>
										{/* Letter badge */}
										<div
											className={`flex h-14 w-14 items-center justify-center rounded-full ${phase.letterBgColor} text-2xl font-bold text-white shadow-lg`}>
											{phase.letter}
										</div>

										{/* Title */}
										<h3 className="mt-6 text-2xl font-semibold text-slate-100 sm:text-3xl">
											{phase.title}
										</h3>

										{/* Subtitle */}
										<p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
											{phase.subtitle}
										</p>

										{/* Expanded Content */}
										<AnimatePresence>
											{isExpanded && (
												<motion.div
													initial={{
														opacity: 0,
														height: 0,
													}}
													animate={{
														opacity: 1,
														height: "auto",
													}}
													exit={{
														opacity: 0,
														height: 0,
													}}
													transition={{
														duration: 0.3,
													}}
													className="overflow-hidden">
													<div className="mt-6 space-y-6">
														{/* Includes section */}
														{phase.expandedContent
															.includes && (
															<div>
																<h4 className="text-lg font-semibold text-white mb-4">
																	{
																		phase
																			.expandedContent
																			.includes
																			.heading
																	}
																</h4>
																<div className="space-y-4">
																	{phase.expandedContent.includes.items.map(
																		(
																			item,
																			idx
																		) => (
																			<div
																				key={
																					idx
																				}
																				className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
																				<h5 className="font-semibold text-white mb-1">
																					{
																						item.title
																					}
																				</h5>
																				<p className="text-sm text-slate-300">
																					{
																						item.description
																					}
																				</p>
																			</div>
																		)
																	)}
																</div>
															</div>
														)}

														{/* Outcomes section */}
														{phase.expandedContent
															.outcomes && (
															<div
																className={`rounded-xl border ${phase.borderColor} ${phase.bgColor} p-5`}>
																<h4 className="text-base font-semibold text-white mb-3">
																	{
																		phase
																			.expandedContent
																			.outcomes
																			.heading
																	}
																</h4>
																<div className="space-y-2">
																	{phase.expandedContent.outcomes.items.map(
																		(
																			item,
																			idx
																		) => (
																			<div
																				key={
																					idx
																				}
																				className="flex items-start gap-3">
																				<CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400 mt-0.5" />
																				<span className="text-sm text-slate-200">
																					{
																						item
																					}
																				</span>
																			</div>
																		)
																	)}
																</div>
															</div>
														)}

														{/* Deliverables section */}
														{phase.expandedContent
															.deliverables && (
															<div
																className={`rounded-xl border ${phase.borderColor} ${phase.bgColor} p-5`}>
																<h4 className="text-base font-semibold text-white mb-3">
																	{
																		phase
																			.expandedContent
																			.deliverables
																			.heading
																	}
																</h4>
																<div className="space-y-2">
																	{phase.expandedContent.deliverables.items.map(
																		(
																			item,
																			idx
																		) => (
																			<div
																				key={
																					idx
																				}
																				className="flex items-start gap-3">
																				<CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400 mt-0.5" />
																				<span className="text-sm text-slate-200">
																					{
																						item
																					}
																				</span>
																			</div>
																		)
																	)}
																</div>
															</div>
														)}

														{/* Closing statement */}
														<p className="text-base leading-relaxed text-slate-200 font-medium italic border-l-4 border-sky-500 pl-4">
															{
																phase
																	.expandedContent
																	.closing
															}
														</p>
													</div>
												</motion.div>
											)}
										</AnimatePresence>

										{/* Toggle and CTA */}
										<div className="mt-6 flex flex-wrap items-center gap-4">
											<button
												onClick={() =>
													togglePhase(phase.id)
												}
												className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-slate-200 group">
												{isExpanded ? (
													<>
														Show Less
														<ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
													</>
												) : (
													<>
														Read More
														<ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
													</>
												)}
											</button>

											{phase.cta && (
												<Link
													href={phase.cta.href}
													className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300 group">
													{phase.cta.text}
													<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
												</Link>
											)}
										</div>
									</div>

									{/* Image */}
									<div
										className={`relative lg:sticky lg:top-32 lg:self-start ${
											isEven
												? ""
												: "lg:col-start-1 lg:row-start-1"
										}`}>
										<div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 shadow-[0_0_40px_rgba(56,189,248,0.1)]">
											<Image
												src={phase.image}
												alt={phase.title}
												fill
												className="object-cover"
												sizes="(max-width: 1024px) 100vw, 50vw"
											/>
											<div
												className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-10`}
											/>
										</div>
									</div>
								</div>

								{/* Separator */}
								{index < actsPhases.length - 1 && (
									<div className="mx-auto mt-20 h-px w-32 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
								)}
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServiceFrameworkSection;
