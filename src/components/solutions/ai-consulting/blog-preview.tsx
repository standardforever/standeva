"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const blogPosts = [
	{
		image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
		title: "Discover how artificial intelligence is moving beyond simple automation to become a strategic partner in financial planning and analysis, unlocking new levels of insight.",
		tags: ["AI", "ERP", "Financial Planning"],
	},
	{
		image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
		title: "The Future of HR is Automated: A Guide to AI Task Management",
		tags: ["AI", "Human Resources", "Automation"],
	},
	{
		image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=800&auto=format&fit=crop",
		title: "Proactive Problem-Solving: AI in HR Escalation Management",
		tags: ["AI", "Finance", "Automation"],
	},
	{
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
		title: "Building a Smarter Finance Department with AI",
		tags: ["Artificial Intelligence", "Machine Learning"],
	},
];

const BlogPreview: React.FC = () => {
	return (
		<section className="py-20 bg-black text-white">
			<div className="container mx-auto px-6">
				<motion.div
					className="mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h3 className="text-sm text-blue-400 mb-4 uppercase tracking-wider">
						BLOG POSTS
					</h3>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Our Vision for AI in Business
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl">
						Explore our strategy for supporting businesses with AI-agentic consultancy. Here, we share our vision and actionable insights to help you navigate the future of artificial intelligence.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{blogPosts.map((post, index) => (
						<motion.div
							key={index}
							className="group cursor-pointer"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}>
							<div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
								<Image
									src={post.image}
									alt={post.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
							</div>
							<h3 className="text-lg font-semibold mb-3 leading-snug group-hover:text-blue-400 transition-colors line-clamp-3">
								{post.title}
							</h3>
							<div className="flex flex-wrap gap-2">
								{post.tags.map((tag, tagIndex) => (
									<span
										key={tagIndex}
										className="text-xs text-slate-500">
										{tag}
										{tagIndex < post.tags.length - 1 && ","}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogPreview;
