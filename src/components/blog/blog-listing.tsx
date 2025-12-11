"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight, Grid, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlogBackButton from "@/components/blog/back-button";

// Types
const FALLBACK_IMAGE = "/blog 1.1.png";
const FALLBACK_AVATAR =
	"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop";

interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	author: {
		name: string;
		avatar: string;
	};
	publishedAt: string;
	readTime: number;
	tags: string[];
	image?: string;
}

interface BlogListingProps {
	initialPosts?: BlogPost[];
	showBackButton?: boolean;
}

const BlogListing: React.FC<BlogListingProps> = ({
	initialPosts,
	showBackButton,
}) => {
	const [blogPosts] = useState<BlogPost[]>(initialPosts ?? []);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [sortBy, setSortBy] = useState("Latest");
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

	const categories = useMemo(
		() => [
			"All",
			...Array.from(new Set(blogPosts.flatMap((post) => post.tags))),
		],
		[blogPosts]
	);
	const sortOptions = ["Latest"];

	const filteredPosts = useMemo(() => {
		return blogPosts
			.filter((post) => {
				const search = searchTerm.trim().toLowerCase();
				const matchesSearch =
					!search ||
					post.title.toLowerCase().includes(search) ||
					post.excerpt.toLowerCase().includes(search);
				const matchesCategory =
					selectedCategory === "All" ||
					post.tags.includes(selectedCategory);
				return matchesSearch && matchesCategory;
			})
			.sort((a, b) => {
				return (
					new Date(b.publishedAt).getTime() -
					new Date(a.publishedAt).getTime()
				);
			});
	}, [blogPosts, searchTerm, selectedCategory]);

	const BlogCard = ({
		post,
		viewMode,
	}: {
		post: BlogPost;
		viewMode: "grid" | "list";
	}) => (
		<motion.article
			whileHover={{ scale: 1.02 }}
			className={`group cursor-pointer bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 overflow-hidden ${
				viewMode === "list" ? "flex flex-col gap-4 sm:flex-row sm:gap-6" : ""
			}`}>
			<Link href={`/blog/${post.slug}`} className="block h-full">
				<div
					className={`relative overflow-hidden ${
						viewMode === "list"
							? "w-full h-48 sm:w-48 sm:h-32 shrink-0"
							: "aspect-video"
					}`}>
					<Image
						src={
							post.image && post.image.trim().length > 0
								? post.image
								: FALLBACK_IMAGE
						}
						alt={post.title}
						fill
						className="object-cover group-hover:scale-110 transition-transform duration-500"
						sizes={
							viewMode === "list"
								? "(max-width: 768px) 50vw, 300px"
								: "(max-width: 768px) 100vw, 420px"
						}
					/>
					<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

					{viewMode === "grid" && (
						<div className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full border border-slate-700">
							<span className="text-xs text-blue-400 font-medium">
								{post.publishedAt}
							</span>
						</div>
					)}
				</div>

				<div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
					{viewMode === "list" && (
						<div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-2">
							<span>{post.publishedAt}</span>
							<span>•</span>
							<span>{post.readTime} min read</span>
						</div>
					)}

					<div className="flex items-center gap-2 mb-3">
						<Image
							src={
								post.author.avatar ||
								FALLBACK_AVATAR
							}
							alt={post.author.name || "Author avatar"}
							width={32}
							height={32}
							className="rounded-full object-cover border border-white/10"
						/>
						<span className="text-xs text-slate-300 font-medium">
							{post.author.name}
						</span>
						{viewMode === "grid" && (
							<>
								<span>•</span>
								<span className="text-xs text-slate-400">
									{post.readTime} min read
								</span>
							</>
						)}
					</div>

					<h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
						{post.title}
					</h3>

					<p className="text-slate-400 text-sm leading-relaxed mb-3 line-clamp-2">
						{post.excerpt}
					</p>

					<div className="flex flex-wrap gap-1 mb-3">
						{post.tags.slice(0, 3).map((tag, tagIndex) => (
							<span
								key={tagIndex}
								className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-medium">
								{tag}
							</span>
						))}
					</div>

					<div className="flex items-center justify-end">
						<motion.div
							className="flex items-center gap-2 text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
							whileHover={{ x: 5 }}>
							<span className="text-xs">Read more</span>
							<ArrowRight size={14} />
						</motion.div>
					</div>
				</div>
			</Link>
		</motion.article>
	);

	if (!blogPosts.length) {
		return (
			<div className="min-h-screen bg-black text-white flex items-center justify-center px-6 text-center">
				<div>
					<h1 className="text-3xl font-bold mb-3">
						Blog coming soon
					</h1>
					<p className="text-slate-400">
						We&apos;re curating our latest insights. Check back
						shortly for new articles.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Background Pattern */}
			<div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAzMCAwIEwgMCA2MCAwIDYwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

			{/* Header */}
			<motion.header
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				className="relative z-10 bg-black/80 backdrop-blur-lg border-b border-slate-800 top-0">
				<div className="container mx-auto px-4 sm:px-6 py-6">
					<div className="flex flex-col lg:flex-row gap-8 w-full">
						<div className="w-full">
							{showBackButton && (
								<div className="mb-4">
									<BlogBackButton />
								</div>
							)}
							<h1 className="text-3xl md:text-4xl font-bold mb-2">
								Blog &{" "}
								<span className="bg-linear-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
									Insights
								</span>
							</h1>
							<p className="text-slate-400">
								Explore the latest in AI, technology, and
								business transformation
							</p>
						</div>

						<div className="flex w-full flex-col gap-4 lg:w-auto lg:flex-row lg:items-center">
							<div className="relative w-full lg:w-72">
								<Search
									className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
									size={20}
								/>
								<input
									type="text"
									placeholder="Search articles..."
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
									className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
								/>
							</div>

							<div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg p-1 self-start">
								<button
									onClick={() => setViewMode("grid")}
									className={`p-2 rounded ${
										viewMode === "grid"
											? "bg-blue-500 text-white"
											: "text-slate-400 hover:text-white"
									}`}>
									<Grid size={18} />
								</button>
								<button
									onClick={() => setViewMode("list")}
									className={`p-2 rounded ${
										viewMode === "list"
											? "bg-blue-500 text-white"
											: "text-slate-400 hover:text-white"
									}`}>
									<List size={18} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</motion.header>

			{/* Filters and Content */}
			<div className="relative z-10 container mx-auto px-6 py-8">
				{/* Filters */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-8">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
						{/* Categories */}
						<div className="flex flex-wrap gap-2">
							{categories.map((category) => (
								<motion.button
									key={category}
									onClick={() =>
										setSelectedCategory(category)
									}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
										selectedCategory === category
											? "bg-blue-500 text-white"
											: "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700"
									}`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}>
									{category}
								</motion.button>
							))}
						</div>

						{/* Sort */}
						<div className="flex items-center gap-2">
							<Filter size={18} className="text-slate-400" />
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500">
								{sortOptions.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</select>
						</div>
					</div>
				</motion.div>

				{/* Results Count */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="mb-6 text-slate-400">
					Showing {filteredPosts.length} of {blogPosts.length}{" "}
					articles
				</motion.div>

				{/* Blog Posts Grid/List */}
				<div
					className={`gap-6 ${
						viewMode === "grid"
							? "grid md:grid-cols-2 lg:grid-cols-3"
							: "flex flex-col"
					}`}>
					{filteredPosts.map((post, index) => (
						<motion.div
							key={post.slug}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}>
							<BlogCard post={post} viewMode={viewMode} />
						</motion.div>
					))}
				</div>

				{filteredPosts.length === 0 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="text-center py-20">
						<div className="text-slate-400 text-lg mb-4">
							No articles found matching your criteria.
						</div>
						<button
							onClick={() => {
								setSearchTerm("");
								setSelectedCategory("All");
							}}
							className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
							Clear Filters
						</button>
					</motion.div>
				)}

				{/* Load More */}
				{filteredPosts.length > 0 &&
					filteredPosts.length < blogPosts.length && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
							className="text-center mt-12">
							<motion.button
								className="px-8 py-3 bg-linear-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								Load More Articles
								<ArrowRight size={20} />
							</motion.button>
						</motion.div>
					)}
			</div>
		</div>
	);
};

export default BlogListing;
