"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Monitor, Download, Shield, CreditCard } from "lucide-react";

const FAQSection: React.FC = () => {
	const [openItem, setOpenItem] = useState<number | null>(null);

	const faqs = [
		{
			question: "Does Process Zero use my own computer?",
			answer: "Process Zero spins up a secure cloud browser environment you can return to anytime to find your data, files, and downloaded applications. The agent works inside this isolated environment tied to your account.",
			icon: Monitor,
		},
		{
			question: "Can I download desktop applications on Process Zero?",
			answer: "Yes, you can download any application or use the preinstalled applications (Office, browser, terminal, VS Code, etc.). You can even download Photoshop and have the browser agent use it for you.",
			icon: Download,
		},
		{
			question: "Can Process Zero use Excel?",
			answer: "Yes, it even has Excel and Sheets preinstalled for you to use.",
			icon: Monitor,
		},
		{
			question: "How secure is my data?",
			answer: "All of your data is stored securely on your cloud computer. We never access nor process any data, passwords, or files you enter on your cloud computer.",
			icon: Shield,
		},
		{
			question: "What if I don&apos;t like it?",
			answer: "We&apos;ll give you your money back. There&apos;s a 30-day guarantee.",
			icon: CreditCard,
		},
	];

	const toggleItem = (index: number) => {
		setOpenItem(openItem === index ? null : index);
	};

	return (
		<section id="faqs" className="px-6 py-24">
			<div className="mx-auto max-w-4xl">
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
						Frequently Asked Questions
					</h2>
					<p className="mx-auto mt-6 text-lg text-slate-300">
						Everything you need to know about Process Zero Browser Agent
					</p>
				</motion.div>

				<div className="mt-12 space-y-4">
					{faqs.map((faq, index) => {
						const IconComponent = faq.icon;
						const isOpen = openItem === index;

						return (
							<motion.div
								key={index}
								className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}>
								<motion.button
									className="w-full px-6 py-6 text-left"
									onClick={() => toggleItem(index)}
									whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}>
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
											<IconComponent className="h-5 w-5 text-blue-400" />
										</div>
										<div className="flex-1">
											<h3 className="text-lg font-semibold text-white">
												{faq.question}
											</h3>
										</div>
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800">
											<motion.div
												animate={{ rotate: isOpen ? 180 : 0 }}
												transition={{ duration: 0.3 }}>
												<ChevronDown className="h-4 w-4 text-slate-400" />
											</motion.div>
										</div>
									</div>
								</motion.button>

								<AnimatePresence>
									{isOpen && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
											className="overflow-hidden">
											<div className="px-6 pb-6">
												<div className="ml-14 border-l border-slate-700 pl-6">
													<p className="text-slate-300">{faq.answer}</p>
												</div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-slate-900/50 p-8 text-center backdrop-blur-sm"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}>
					<HelpCircle className="mx-auto h-12 w-12 text-blue-400" />
					<h3 className="mt-4 text-xl font-bold text-white">
						Still got questions?
					</h3>
					<p className="mx-auto mt-2 text-slate-300">
						Reach out, we&apos;re here to help
					</p>
					<motion.button
						className="mt-6 inline-flex items-center gap-2 rounded-xl border border-blue-500/40 px-6 py-3 font-semibold text-slate-100 transition hover:border-blue-500 hover:bg-blue-500/10"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						Reach out to us
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default FAQSection;
