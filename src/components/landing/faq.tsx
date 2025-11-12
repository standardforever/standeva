"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TertiaryButton } from "@/components/ui/buttons";

const faqData = [
	{
		id: 1,
		question: "How quickly can I start using your APIs?",
		answer: "You can start immediately! Ready-made APIs like Sourceora and AI/ML APIs are available right now. Simply sign up for an API key, check our documentation, and make your first call. Most developers integrate successfully within 30-60 minutes. For custom solutions, we can start with a free consultation and typically launch in 4-8 weeks.",
	},
	{
		id: 2,
		question: "What's your pricing model for APIs?",
		answer: "Our ready-made APIs use transparent pay-as-you-go pricing based on usage (API calls, data volume, etc.). We offer different tiers from free developer plans to enterprise packages with volume discounts. Custom API development is quoted based on scope and complexity. All pricing details are available in our documentation, and there are no hidden fees.",
	},
	{
		id: 3,
		question: "How long does API integration typically take?",
		answer: "It depends on complexity. Ready-made APIs typically integrate in under an hour using our SDKs and comprehensive documentation. We provide code snippets for popular languages (JavaScript, Python, PHP, etc.) to get you started quickly. Custom integrations may take longer depending on your specific requirements, but our team provides dedicated support throughout.",
	},
	{
		id: 4,
		question:
			"Do you offer custom API development for unique requirements?",
		answer: "Absolutely! While our ready-made APIs cover common use cases, we specialize in building custom APIs tailored to your specific needs. Our engineering team will work with you to design, develop, and deploy a solution that fits your exact requirements. Custom projects include full documentation, deployment support, and ongoing maintenance.",
	},
	{
		id: 5,
		question: "What kind of support and SLAs do you provide?",
		answer: "All our APIs come with comprehensive documentation, code examples, and community support. Paid plans include priority email support with response times under 24 hours. Enterprise customers get dedicated support channels, custom SLAs (up to 99.9% uptime guarantee), and access to our engineering team. We also provide status pages, monitoring dashboards, and proactive incident notifications.",
	},
	{
		id: 6,
		question: "How secure are your APIs and how is my data protected?",
		answer: "Security is our foundation. All APIs use industry-standard encryption (TLS 1.3+), OAuth 2.0 authentication, and API key management. We conduct regular security audits, penetration testing, and comply with GDPR, SOC 2, and other data protection standards. Your data is never shared with third parties, and we provide detailed security documentation for compliance teams.",
	},
];

const FAQ: React.FC = () => {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (id: number) => {
		setOpenItems((prev) =>
			prev.includes(id)
				? prev.filter((item) => item !== id)
				: [...prev, id]
		);
	};

	return (
		<section className="py-20 bg-[linear-gradient(135deg,#0B0F19_0%,#0C2258_50%,#0B0F19_100%)]">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-[#60A5FA] font-semibold mb-4">
						FAQ
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
						Frequently Asked Questions
					</h2>
					<p className="text-lg text-[#CBD5E1] max-w-3xl mx-auto">
						Everything you need to know about integrating and using
						Standeva&apos;s APIs
					</p>
				</div>

				<div className="max-w-4xl mx-auto space-y-4">
					{faqData.map((item) => {
						const isOpen = openItems.includes(item.id);
						return (
							<div
								key={item.id}
								className="bg-[#111827]/70 backdrop-blur-sm rounded-2xl border border-[#1E3A8A]/30 hover:border-[#2563EB]/60 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300 overflow-hidden">
								<button
									onClick={() => toggleItem(item.id)}
									className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#1E293B]/50 transition-colors duration-300">
									<h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
										{item.question}
									</h3>
									<motion.div
										animate={{ rotate: isOpen ? 180 : 0 }}
										transition={{ duration: 0.3 }}>
										<ChevronDown
											size={22}
											className="text-[#60A5FA]"
										/>
									</motion.div>
								</button>

								<AnimatePresence>
									{isOpen && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{
												height: "auto",
												opacity: 1,
											}}
											exit={{ height: 0, opacity: 0 }}
											transition={{
												duration: 0.3,
												ease: "easeInOut",
											}}>
											<div className="px-6 pb-6">
												<div className="w-full h-px bg-[#1E3A8A]/40 mb-4" />
												<motion.p
													className="text-base text-[#CBD5E1] leading-relaxed"
													initial={{
														y: -10,
														opacity: 0,
													}}
													animate={{
														y: 0,
														opacity: 1,
													}}
													transition={{ delay: 0.1 }}>
													{item.answer}
												</motion.p>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						);
					})}
				</div>

				<div className="text-center mt-16">
					<div className="p-8 bg-[#111827]/70 backdrop-blur-sm rounded-2xl border border-[#1E3A8A]/30 max-w-2xl mx-auto hover:border-[#2563EB]/60 transition">
						<h3 className="text-2xl font-bold mb-4 text-white">
							Still have questions?
						</h3>
						<p className="text-base text-[#CBD5E1] mb-6">
							Can&apos;t find the answer you&apos;re looking for?
							Our technical team is ready to help with your
							integration.
						</p>
						<TertiaryButton className="px-8 py-4 text-base bg-[#2563EB] hover:bg-[#1E40AF] transition rounded-xl">
							Contact Support
						</TertiaryButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
