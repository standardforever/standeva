"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Zap, Shield, Star } from "lucide-react";

const FinalCTA: React.FC = () => {
	const benefits = [
		{
			icon: Users,
			title: "Fast customer support",
			description: "Get help when you need it",
		},
		{
			icon: Zap,
			title: "Monthly feature updates",
			description: "Always improving",
		},
		{
			icon: Shield,
			title: "Bulk discounts for businesses",
			description: "Save with team plans",
		},
	];

	return (
		<section className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<motion.div
					className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-slate-900/50 p-12 backdrop-blur-sm"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<div className="text-center">
						{/* Stars */}
						<div className="flex justify-center gap-1 mb-6">
							{[...Array(5)].map((_, i) => (
								<Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
							))}
						</div>

						<h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
							Launch the Process Zero Browser Agent
						</h2>
						<p className="mx-auto mt-4 text-xl text-slate-300">
							Run repeatable browser work with an operator that remembers every tab, login, and step.
						</p>
						<p className="mx-auto mt-2 text-lg text-blue-300">
							2k+ professionals are already ahead of you
						</p>

						<motion.button
							className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							Launch App
							<ArrowRight className="h-5 w-5" />
						</motion.button>

						{/* Benefits */}
						<div className="mt-12 grid gap-6 md:grid-cols-3">
							{benefits.map((benefit, index) => {
								const IconComponent = benefit.icon;
								return (
									<motion.div
										key={index}
										className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm"
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}>
										<div className="flex items-center gap-4">
											<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
												<IconComponent className="h-6 w-6 text-blue-400" />
											</div>
											<div>
												<h4 className="text-lg font-semibold text-white">
													{benefit.title}
												</h4>
												<p className="mt-1 text-sm text-slate-300">
													{benefit.description}
												</p>
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>

						{/* Trust indicators */}
						<motion.div
							className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.6 }}>
							<div className="flex items-center gap-2">
								<Shield className="h-5 w-5 text-green-400" />
								<span className="text-sm text-slate-300">30-day money back guarantee</span>
							</div>
							<div className="flex items-center gap-2">
								<Users className="h-5 w-5 text-blue-400" />
								<span className="text-sm text-slate-300">2000+ happy users</span>
							</div>
							<div className="flex items-center gap-2">
								<Zap className="h-5 w-5 text-yellow-400" />
								<span className="text-sm text-slate-300">Instant setup</span>
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* Footer */}
				<motion.footer
					className="mt-16 border-t border-white/10 pt-12"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<div className="grid gap-8 md:grid-cols-4">
						<div>
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
									<span className="text-lg font-bold text-white">C</span>
								</div>
								<span className="text-xl font-bold text-white">Process Zero</span>
							</div>
							<p className="mt-4 text-sm text-slate-400">
								Browser-native automation that feels like an expert operator.
							</p>
						</div>

						<div>
							<h4 className="font-semibold text-white">Product</h4>
							<ul className="mt-4 space-y-2 text-sm text-slate-400">
								<li><a href="#features" className="hover:text-white transition">Features</a></li>
								<li><a href="#use-cases" className="hover:text-white transition">Use cases</a></li>
								<li><a href="#faqs" className="hover:text-white transition">FAQs</a></li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold text-white">Company</h4>
							<ul className="mt-4 space-y-2 text-sm text-slate-400">
								<li><a href="#" className="hover:text-white transition">About</a></li>
								<li><a href="#" className="hover:text-white transition">Blog</a></li>
								<li><a href="#" className="hover:text-white transition">Contact</a></li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold text-white">Legal</h4>
							<ul className="mt-4 space-y-2 text-sm text-slate-400">
								<li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
								<li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
							</ul>
						</div>
					</div>

					<div className="mt-12 border-t border-white/10 pt-8 text-center">
						<p className="text-sm text-slate-400">
							© {new Date().getFullYear()} Process Zero. All Rights reserved.
						</p>
					</div>
				</motion.footer>
			</div>
		</section>
	);
};

export default FinalCTA;
