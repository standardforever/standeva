"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPostSummary } from "@/types/blog";

interface BlogPreviewProps {
	posts: BlogPostSummary[];
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ posts }) => {
	const featuredPosts = posts.slice(0, 4);

	if (!featuredPosts.length) {
		return null;
	}

	return (
		<section
			id="resources"
			className="py-20 bg-black text-white relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAzMCAwIEwgMCA2MCAwIDYwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

			<div className="container mx-auto px-6 relative z-10">
				{/* Header */}
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					{/* Tag */}
					<div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
						<span className="text-sm text-blue-400 font-medium uppercase tracking-wider">
							Insights & Resources
						</span>
					</div>

					{/* Main Title */}
					<h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
						Latest AI Business
						<span className="block bg-linear-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
							Insights
						</span>
					</h2>

					{/* Subtitle */}
					<p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
						Explore our strategy for supporting businesses with
						AI-agentic consultancy. Here, we share our vision and
						actionable insights to help you navigate the future of
						artificial intelligence.
					</p>
				</motion.div>

				{/* Blog Posts Grid */}
				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{featuredPosts.map((post, index) => {
						const fallbackImage =
							"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop";
						const imageSrc =
							post.image && post.image.length > 0
								? post.image
								: fallbackImage;

						return (
							<motion.article
								key={post.slug}
								className="group cursor-pointer bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 overflow-hidden"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
								whileHover={{
									scale: 1.02,
									y: -5,
									transition: { duration: 0.3 },
								}}>
								<Link
									href={`/blog/${post.slug}`}
									className="block h-full">
									{/* Image Container */}
									<div className="relative aspect-video overflow-hidden">
										<Image
											src={imageSrc}
											alt={post.title}
											fill
											className="object-cover group-hover:scale-110 transition-transform duration-500"
											sizes="(max-width: 768px) 100vw, 600px"
										/>
										<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

										{/* Date Badge */}
										<div className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full border border-slate-700">
											<span className="text-xs text-blue-400 font-medium">
												{post.publishedAt}
											</span>
										</div>
									</div>

									{/* Content */}
									<div className="p-4">
										{/* Meta Info */}
										<div className="flex items-center justify-between mb-3">
											<div className="flex items-center gap-2 text-slate-400">
												<Clock size={12} />
												<span className="text-xs">
													{post.readTime} min read
												</span>
											</div>
											<div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
										</div>

										{/* Title */}
										<h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
											{post.title}
										</h3>

										{/* Excerpt */}
										<p className="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">
											{post.excerpt}
										</p>

										{/* Tags */}
										<div className="flex flex-wrap gap-1 mb-3">
											{post.tags
												.slice(0, 3)
												.map((tag) => (
													<span
														key={tag}
														className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-medium">
														{tag}
													</span>
												))}
										</div>

										{/* Read More Link */}
										<motion.div
											className="flex items-center gap-2 text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
											initial={{ width: 0 }}
											whileHover={{ width: "auto" }}>
											<span className="text-xs">
												Read article
											</span>
											<ArrowRight
												size={14}
												className="group-hover:translate-x-1 transition-transform"
											/>
										</motion.div>
									</div>
								</Link>
							</motion.article>
						);
					})}
				</div>

				{/* Bottom CTA */}
				<motion.div
					className="text-center mt-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}>
					<Link href="/blog">
						<motion.button
							className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							View All Articles
							<ArrowRight
								size={20}
								className="group-hover:translate-x-1 transition-transform"
							/>
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default BlogPreview;
