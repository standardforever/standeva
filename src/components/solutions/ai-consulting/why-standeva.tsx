"use client";

import React from "react";
import { motion } from "framer-motion";

const WhyStandeva: React.FC = () => {
	return (
		<section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900 text-white">
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-sm text-blue-400 mb-4 uppercase tracking-wider">
						WHY US
					</h2>
					<h3 className="text-4xl md:text-5xl font-bold mb-6">
						Deep Expertise in Business Process Transformation
					</h3>
				</motion.div>

				<div className="max-w-5xl mx-auto space-y-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}>
						<h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
							<span className="text-blue-400">•</span>
							Decades of Business Transformation Expertise:
						</h4>
						<p className="text-lg text-slate-300 leading-relaxed">
							True solutions come from experience, not just technology. With a legacy of over 25 years in change management and overhauling complex financial and ERP systems, we possess a profound understanding of your operational hurdles. We don&apos;t simply install AI; we strategically deploy it with seasoned insight to guarantee genuine and lasting transformation.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						<h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
							<span className="text-blue-400">•</span>
							An ROI-Centric Partnership:
						</h4>
						<p className="text-lg text-slate-300 leading-relaxed">
							Our confidence in delivering concrete value is reflected in our &quot;Invest to Gain&quot; model. This unique approach aligns our success with the quantifiable savings you achieve. We are invested in your positive outcomes, creating a partnership where our profitability is contingent on yours—a truly symbiotic relationship.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}>
						<h4 className="text-2xl font-bold mb-4">
							Specialists in Advanced Agentic AI
						</h4>
						<p className="text-lg text-slate-300 leading-relaxed mb-6">
							We are experts in deploying Agentic AI—intelligent, autonomous agents capable of managing complex, multi-step workflows. From processing unstructured supplier invoices to handling intricate HR case management, our AI agents function as a tireless digital workforce, operating 24/7 to drive down operational costs.
						</p>
						<ul className="space-y-4">
							{[
								{
									title: "Idea Generation & Validation:",
									description: "In the conceptual phase, we help solidify your AI vision, validate its feasibility, and plot a roadmap.",
								},
								{
									title: "Data Strategy:",
									description: "We guide you in collecting, cleansing, and organizing the data that will fuel your AI systems.",
								},
								{
									title: "Model Development:",
									description: "Our team assists in designing and developing machine learning models specific to your needs.",
								},
								{
									title: "Implementation:",
									description: "We'll support you through the deployment of your intelligent solutions, ensuring seamless integration with existing systems.",
								},
								{
									title: "Ongoing Support:",
									description: "Our commitment doesn't end at launch. We offer continuous support for optimization and scaling.",
								},
							].map((item, index) => (
								<li key={index} className="flex gap-4">
									<span className="text-blue-400 font-bold">{index + 1}.</span>
									<div>
										<span className="font-semibold">{item.title}</span>{" "}
										<span className="text-slate-400">{item.description}</span>
									</div>
								</li>
							))}
						</ul>
						<p className="text-lg text-slate-300 leading-relaxed mt-6">
							With ClickBuy, you get more than a service provider; you get a partner invested in your success. Our agile approach means we adapt to your needs throughout the entire project lifecycle, from discovery to deployment, to ensure we deliver tangible results.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}>
						<h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
							<span className="text-blue-400">•</span>
							Seamless Integration with Your Core Systems
						</h4>
						<p className="text-lg text-slate-300 leading-relaxed">
							Our deep-rooted knowledge of ERP and business systems allows us to create AI solutions that integrate flawlessly with your existing financial and HR platforms. This creates a powerful, unified system that enhances your current technology investments, rather than forcing costly replacements.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default WhyStandeva;
