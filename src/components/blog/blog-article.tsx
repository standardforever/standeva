"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	ArrowLeft,
	Share2,
	Bookmark,
	Heart,
	Menu,
	X,
	Twitter,
	Linkedin,
	Link as LinkIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import type { BlogPost as BlogPostType } from "@/types/blog";

// Types
interface TableOfContentsItem {
	id: string;
	title: string;
	level: number;
	children?: TableOfContentsItem[];
}

const FALLBACK_IMAGE = "/blog-1-1.png";

interface BlogArticleProps {
	initialPost?: BlogPostType | null;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ initialPost }) => {
	const [post] = useState<BlogPostType | null>(initialPost || null);
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [showShareMenu, setShowShareMenu] = useState(false);
	const [showTOC, setShowTOC] = useState(false);
	const [readingProgress, setReadingProgress] = useState(0);
	const [activeHeading, setActiveHeading] = useState("");

	type ThemeClasses = {
		page: string;
		pattern: string;
		header: string;
		panel: string;
		panelSoft: string;
		input: string;
		textMuted: string;
		commentText: string;
		chip: string;
	};

	const darkTheme: ThemeClasses = {
		page: "bg-[#03040a] text-[#fdfcf7]",
		pattern: "opacity-25",
		header: "bg-[#03040a]/95 border-[#0d1224] text-white",
		panel: "bg-[#0b1224]/80 border border-[#141f3b]",
		panelSoft: "bg-[#0b1224]/60 border-[#141f3b]",
		input: "bg-[#050815] border-[#1d2644] text-white placeholder-slate-400",
		textMuted: "text-slate-400",
		commentText: "text-slate-100",
		chip: "bg-[#131b33] border-[#1f2a4a] text-slate-200",
	};

	const themeClasses = darkTheme;

	// Generate table of contents
	const generateTOC = (content: string): TableOfContentsItem[] => {
		const headingRegex = /^(#{1,6})\s+(.+)$/;
		const lines = content.split("\n");
		const toc: TableOfContentsItem[] = [];
		const stack: TableOfContentsItem[] = [];

		lines.forEach((line) => {
			const match = line.match(headingRegex);
			if (match) {
				const level = match[1].length;
				const title = match[2].trim();
				const id = title
					.toLowerCase()
					.replace(/[^a-z0-9\s-]/g, "")
					.replace(/\s+/g, "-");

				const item: TableOfContentsItem = {
					id,
					title,
					level,
					children: [],
				};

				while (
					stack.length > 0 &&
					level <= stack[stack.length - 1].level
				) {
					stack.pop();
				}

				if (stack.length === 0) {
					toc.push(item);
				} else {
					stack[stack.length - 1].children?.push(item);
				}

				stack.push(item);
			}
		});

		return toc;
	};

	// Handle scroll for reading progress and active heading
	useEffect(() => {
		if (!post) return;
		const handleScroll = () => {
			const doc = document.documentElement;
			const scrollTop = doc.scrollTop || document.body.scrollTop;
			const scrollHeight = doc.scrollHeight - window.innerHeight;
			const progress =
				scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
			setReadingProgress(Math.min(progress, 100));

			const headings = document.querySelectorAll(
				".blog-article h1, .blog-article h2, .blog-article h3"
			);
			let currentHeading = "";
			headings.forEach((heading) => {
				const rect = heading.getBoundingClientRect();
				if (rect.top <= 120) {
					currentHeading = heading.id;
				}
			});
			setActiveHeading(currentHeading);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [post]);

	const scrollToHeading = (headingId: string) => {
		const element = document.getElementById(headingId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const renderTOC = (items: TableOfContentsItem[], level = 0) => {
		return items.map((item) => (
			<div key={item.id} style={{ marginLeft: level * 12 }}>
				<motion.button
					type="button"
					className={`w-full text-left py-2 text-sm transition-colors ${
						activeHeading === item.id
							? "text-blue-400 font-semibold"
							: "text-slate-400 hover:text-white"
					}`}
					whileHover={{ x: 4 }}
					onClick={() => {
						scrollToHeading(item.id);
						setShowTOC(false);
					}}>
					{item.title}
				</motion.button>
				{item.children &&
					item.children.length > 0 &&
					renderTOC(item.children, level + 1)}
			</div>
		));
	};

	if (!post) {
		return (
			<div className="min-h-screen bg-[#03040a] text-white flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold mb-4">Article not found</h1>
					<Link href="/blog" className="text-blue-400 hover:text-blue-300">
						← Back to Blog
					</Link>
				</div>
			</div>
		);
	}

	const toc = generateTOC(post.content);
	const heroImage = post.image || FALLBACK_IMAGE;

	const shareOptions = [
		{
			label: "Share on X",
			icon: Twitter,
			getUrl: (url: string, title: string) =>
				`https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(
					title
				)}`,
		},
		{
			label: "Share on LinkedIn",
			icon: Linkedin,
			getUrl: (url: string, title: string) =>
				`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodeURIComponent(
					title
				)}`,
		},
	];

	const handleShare = (option: (typeof shareOptions)[number]) => {
		if (!post) return;
		const url = encodeURIComponent(window.location.href);
		const shareUrl = option.getUrl(url, post.title);
		window.open(shareUrl, "_blank", "noopener,noreferrer");
	};

	const handleCopyLink = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
		} catch (error) {
			console.error("Failed to copy link", error);
		}
	};

	return (
		<div className={`min-h-screen ${themeClasses.page}`}>
			{/* Background Pattern */}
			<div className={`fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] ${themeClasses.pattern}`} />

			{/* Article Header */}
			<motion.header
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				className={`sticky top-0 z-50 backdrop-blur-lg border-b ${themeClasses.header}`}
			>
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<Link href="/blog" className={`flex items-center gap-2 ${themeClasses.textMuted} hover:text-blue-400 transition-colors`}>
							<ArrowLeft size={20} />
							<span>Back to Blog</span>
						</Link>

						<div className="flex items-center gap-4">
							{/* TOC Toggle */}
							<motion.button
								onClick={() => setShowTOC(!showTOC)}
								className="p-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<Menu size={20} />
							</motion.button>

							<motion.button
								onClick={() => setIsLiked(!isLiked)}
								className={`p-2 rounded-lg transition-colors ${
									isLiked ? "text-red-400 bg-red-400/10" : "text-slate-400 hover:text-white hover:bg-slate-800"
								}`}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<Heart size={20} className={isLiked ? "fill-current" : ""} />
							</motion.button>

							<motion.button
								onClick={() => setIsBookmarked(!isBookmarked)}
								className={`p-2 rounded-lg transition-colors ${
									isBookmarked ? "text-blue-400 bg-blue-400/10" : "text-slate-400 hover:text-white hover:bg-slate-800"
								}`}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<Bookmark size={20} className={isBookmarked ? "fill-current" : ""} />
							</motion.button>

							<div className="relative">
								<motion.button
									onClick={() => setShowShareMenu(!showShareMenu)}
									className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}>
									<Share2 size={20} />
								</motion.button>

								<AnimatePresence>
									{showShareMenu && (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 10 }}
											className="absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl backdrop-blur"
											onMouseLeave={() => setShowShareMenu(false)}>
											{shareOptions.map((option) => (
												<button
													key={option.label}
													onClick={() => {
														handleShare(option);
														setShowShareMenu(false);
													}}
													className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/5">
													<option.icon size={16} />
													{option.label}
												</button>
											))}
											<button
												onClick={() => {
													handleCopyLink();
													setShowShareMenu(false);
												}}
												className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/5">
												<LinkIcon size={16} />
												Copy link
											</button>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</div>
					</div>
				</div>
			</motion.header>

			{/* Table of Contents Sidebar */}
			<AnimatePresence>
				{showTOC && (
					<motion.div
						initial={{ opacity: 0, x: -300 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -300 }}
						className="fixed left-0 top-20 bottom-0 w-80 bg-slate-900 border-r border-slate-700 overflow-y-auto z-40 p-6"
					>
						<div className="flex items-center justify-between mb-6">
							<h3 className="text-lg font-semibold text-white">Table of Contents</h3>
							<motion.button
								onClick={() => setShowTOC(false)}
								className="text-slate-400 hover:text-white transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<X size={20} />
							</motion.button>
						</div>
						<nav className="space-y-2">
							{renderTOC(toc)}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Article Content */}
			<article className="relative z-10 blog-article">
				{/* Hero Image */}
				<div className="relative h-[45vh] md:h-[55vh] overflow-hidden">
					<Image
						src={heroImage}
						alt={post.title}
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
				</div>

				{/* Article Body */}
				<div className="container mx-auto px-6 py-16 max-w-4xl">
					{/* Reading Progress Bar */}
					<motion.div
						initial={{ opacity: 0, width: 0 }}
						animate={{ opacity: 1, width: `${readingProgress}%` }}
						className="fixed top-0 left-0 h-1 bg-blue-500 z-30"
					/>

					{/* Markdown Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="prose prose-invert prose-lg max-w-none"
					>
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeSlug]}
							components={{
								h1: ({ children, id, ...props }) => (
									<h1 id={id} className="text-3xl md:text-4xl font-bold text-white mb-6 mt-8" {...props}>
										{children}
									</h1>
								),
								h2: ({ children, id, ...props }) => (
									<h2 id={id} className="text-2xl md:text-3xl font-bold text-white mb-6 mt-8" {...props}>
										{children}
									</h2>
								),
								h3: ({ children, id, ...props }) => (
									<h3 id={id} className="text-xl md:text-2xl font-bold text-white mb-6 mt-8" {...props}>
										{children}
									</h3>
								),
								p: ({ children, ...props }) => (
									<p className="text-slate-300 leading-relaxed mb-4" {...props}>
										{children}
									</p>
								),
								img: ({ src, alt }) => {
									const resolvedSrc =
										typeof src === "string" && src.length
											? src
											: FALLBACK_IMAGE;
									return (
										<div className="my-8">
											<Image
												src={resolvedSrc}
												alt={alt || post.title}
												width={1200}
												height={600}
												className="rounded-xl object-cover border border-white/10 shadow-lg"
											/>
											{alt && (
												<p className="text-center text-slate-400 text-sm mt-2 italic">
													{alt}
												</p>
											)}
										</div>
									);
								},
								code: ({ children, className, ...props }: { children?: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) => {

									return (
										<div className={`bg-slate-900 rounded-lg p-4 overflow-x-auto my-4 ${className || ""}`} {...props}>
											<code className="text-sm">{children}</code>
										</div>
									);
								},
								blockquote: ({ children, ...props }) => (
									<blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-300 my-4" {...props}>
										{children}
									</blockquote>
								),
								ul: ({ children, ...props }) => (
									<ul className="list-disc list-inside space-y-2 text-slate-300 my-4" {...props}>
										{children}
									</ul>
								),
								ol: ({ children, ...props }) => (
									<ol className="list-decimal list-inside space-y-2 text-slate-300 my-4" {...props}>
										{children}
									</ol>
								)
							}}
						>
							{post.content}
						</ReactMarkdown>
					</motion.div>

					{/* Article Footer */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="mt-16 pt-8 border-t border-slate-800"
					>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-4">
								<motion.button
									onClick={() => setIsLiked(!isLiked)}
									className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
										isLiked ? "text-red-400 bg-red-400/10" : "text-slate-400 hover:text-white hover:bg-slate-800"
									}`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Heart size={20} className={isLiked ? "fill-current" : ""} />
									Like
								</motion.button>

							</div>

							<div className="flex flex-wrap items-center gap-2">
								<span className="text-slate-400">Share:</span>
								{shareOptions.map((option) => (
									<motion.button
										key={option.label}
										onClick={() => handleShare(option)}
										className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-200 transition hover:border-blue-500 hover:text-white"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}>
										<option.icon size={16} />
										{option.label.replace("Share on ", "")}
									</motion.button>
								))}
								<motion.button
									onClick={handleCopyLink}
									className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-200 transition hover:border-blue-500 hover:text-white"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}>
									<LinkIcon size={16} />
									Copy link
								</motion.button>
							</div>
						</div>
					</motion.div>
				</div>
			</article>
		</div>
	);
};

export default BlogArticle;
