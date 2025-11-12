"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const faqs = [
	{
		question: "What industries do you serve with your AI consulting services?",
		answer: "We serve a wide range of industries including manufacturing, healthcare, insurance, construction, real estate, retail, fintech, travel, and SaaS. Our AI solutions are tailored to meet the specific operational challenges of each sector.",
	},
	{
		question: "How long does an AI consulting project typically take?",
		answer: "Project timelines vary based on scope and complexity. A typical pilot programme takes 8-12 weeks, while full-scale implementations can range from 3-6 months. We prioritize rapid deployment to demonstrate value quickly.",
	},
	{
		question: "What does your AI consulting process involve?",
		answer: "Our process includes four key phases: Conceptualisation (understanding your objectives), AI Agent Integration (deploying tailored solutions), Pilot Programme & Scaling (validating and expanding), and Ongoing Enhancement (continuous optimization).",
	},
	{
		question: "Can you integrate AI solutions with our existing systems?",
		answer: "Yes, absolutely. Our deep expertise in ERP and business systems ensures seamless integration with your existing financial and HR platforms, enhancing rather than replacing your current technology investments.",
	},
	{
		question: "What makes your AI consulting services stand out?",
		answer: "We combine 25+ years of business transformation experience with cutting-edge Agentic AI expertise. Our unique 'Invest to Gain' model aligns our success with your ROI, creating a truly symbiotic partnership.",
	},
	{
		question: "Are your AI solutions compliant with data privacy regulations?",
		answer: "Yes, our solutions comply with all major data privacy regulations, including GDPR and industry-specific requirements. We prioritize data security and regulatory compliance in every implementation.",
	},
];

const FAQSection: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 text-white">
			<div className="container mx-auto px-6">
				<motion.div
					className="max-w-4xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<div className="mb-12">
						<h3 className="text-sm text-blue-400 mb-4 uppercase tracking-wider">
							FAQs
						</h3>
						<h2 className="text-4xl md:text-5xl font-bold">
							About AI consulting
						</h2>
					</div>

					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className="border-b border-slate-700 last:border-b-0">
								<button
									onClick={() => setOpenIndex(openIndex === index ? null : index)}
									className="w-full py-6 flex items-center justify-between text-left hover:text-blue-400 transition-colors group">
									<span className="text-lg font-semibold pr-8">
										{faq.question}
									</span>
									<ChevronRight
										size={24}
										className={`flex-shrink-0 transition-transform duration-300 ${
											openIndex === index ? "rotate-90 text-blue-400" : ""
										} group-hover:text-blue-400`}
									/>
								</button>
								<AnimatePresence>
									{openIndex === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
											className="overflow-hidden">
											<p className="pb-6 text-slate-400 leading-relaxed">
												{faq.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default FAQSection;
