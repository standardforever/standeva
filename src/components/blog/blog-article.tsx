"use client";

import React, { useState, useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
	Clock,
	Calendar,
	User,
	ArrowLeft,
	Share2,
	Bookmark,
	MessageCircle,
	Send,
	Reply,
	MoreVertical,
	Flag,
	Heart,
	Sun,
	Moon,
	Menu,
	X,
	ArrowUp,
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
import type { BlogPost as BlogPostType } from "@/types/blog";

// Types
interface Comment {
	id: string;
	author: {
		name: string;
		avatar: string;
		bio?: string;
	};
	content: string;
	createdAt: string;
	likes: number;
	isLiked: boolean;
	replies: Comment[];
	level?: number;
}

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
	const [comments, setComments] = useState<Comment[]>([]);
	const [newComment, setNewComment] = useState("");
	const [replyingTo, setReplyingTo] = useState<string | null>(null);
	const [replyContent, setReplyContent] = useState("");
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [showShareMenu, setShowShareMenu] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [showTOC, setShowTOC] = useState(false);
	const [readingProgress, setReadingProgress] = useState(0);
	const [activeHeading, setActiveHeading] = useState("");
	const themeClasses = isDarkMode
		? {
				page: "bg-[#05060a] text-white",
				pattern: "opacity-20",
				header: "bg-[#05060afb]/90 border-slate-800 text-white",
				panel: "bg-[#0b0f19]/70 border border-slate-800",
				panelSoft: "bg-[#0b0f19]/50 border-slate-800",
				input: "bg-[#05060a] border-slate-700 text-white placeholder-slate-400",
				textMuted: "text-slate-400",
				commentText: "text-slate-100",
				chip: "bg-slate-800 border-slate-700 text-slate-200"
		  }
		: {
				page: "bg-[#f5f7fb] text-slate-900",
				pattern: "opacity-5",
				header: "bg-white/90 border-slate-200 text-slate-900",
				panel: "bg-white border border-slate-200",
				panelSoft: "bg-white border-slate-200",
				input: "bg-white border-slate-300 text-slate-900 placeholder-slate-500",
				textMuted: "text-slate-500",
				commentText: "text-slate-700",
				chip: "bg-slate-100 border-slate-200 text-slate-600"
		  };

	// Load theme preference
	useEffect(() => {
		const savedTheme = localStorage.getItem("blog-theme");
		const dark = savedTheme !== "light";
		setIsDarkMode(dark);
		document.documentElement.classList.toggle("blog-dark", dark);
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("blog-dark", isDarkMode);
		localStorage.setItem("blog-theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	// Mock comments data
	useEffect(() => {
		setComments([
			{
				id: "1",
				author: {
					name: "Michael Rodriguez",
					avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
					bio: "Financial Advisor at TechWealth Management"
				},
				content: "This is an excellent analysis of how AI is transforming financial planning. I have been implementing some of these strategies in my practice, and results have been remarkable.",
				createdAt: "2 hours ago",
				likes: 24,
				isLiked: false,
				replies: [
					{
						id: "1-1",
						author: {
							name: "Sarah Chen",
							avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop",
							bio: "Author"
						},
						content: "Thank you for sharing your experience, Michael! It is great to hear real-world validation of these concepts.",
						createdAt: "1 hour ago",
						likes: 12,
						isLiked: true,
						replies: [],
						level: 1
					}
				],
				level: 0
			}
		]);
	}, []);

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

	// Handle theme toggle
	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
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

	const handleComment = () => {
		if (!newComment.trim()) return;

		const comment: Comment = {
			id: Date.now().toString(),
			author: {
				name: "John Doe",
				avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
				bio: "Financial Planning Enthusiast"
			},
			content: newComment,
			createdAt: "Just now",
			likes: 0,
			isLiked: false,
			replies: [],
			level: 0
		};

		setComments([comment, ...comments]);
		setNewComment("");
	};

	const handleReply = (parentId: string) => {
		if (!replyContent.trim()) return;

		const reply: Comment = {
			id: `${parentId}-${Date.now()}`,
			author: {
				name: "John Doe",
				avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
				bio: "Financial Planning Enthusiast"
			},
			content: replyContent,
			createdAt: "Just now",
			likes: 0,
			isLiked: false,
			replies: [],
			level: 1
		};

		setComments(comments.map((comment) => {
			if (comment.id === parentId) {
				return { ...comment, replies: [...comment.replies, reply] };
			}
			return comment;
		}));

		setReplyContent("");
		setReplyingTo(null);
	};

	const handleLike = (commentId: string) => {
		const updateCommentLikes = (comments: Comment[]): Comment[] => {
			return comments.map((comment) => {
				if (comment.id === commentId) {
					return {
						...comment,
						likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
						isLiked: !comment.isLiked
					};
				}
				if (comment.replies.length > 0) {
					return { ...comment, replies: updateCommentLikes(comment.replies) };
				}
				return comment;
			});
		};

		setComments(updateCommentLikes(comments));
	};

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

	const renderComment = (comment: Comment) => (
		<motion.div
			key={comment.id}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className={`${comment.level === 1 ? "ml-8 mt-4" : "mb-6"}`}
		>
			<div className={`${themeClasses.panel} backdrop-blur-sm rounded-xl p-6`}>
				<div className="flex items-start justify-between mb-4">
					<div className="flex items-center gap-3">
									<Image
										src={comment.author.avatar}
										alt={comment.author.name}
										width={48}
										height={48}
										className="h-12 w-12 rounded-full object-cover"
									/>
						<div>
							<div className="flex items-center gap-2">
								<h4 className="font-semibold">{comment.author.name}</h4>
								{comment.author.bio && (
									<span className={`text-xs ${themeClasses.textMuted}`}>• {comment.author.bio}</span>
								)}
							</div>
							<p className={`text-xs ${themeClasses.textMuted}`}>{comment.createdAt}</p>
						</div>
					</div>
					<button className="text-slate-400 hover:text-white transition-colors">
						<MoreVertical size={16} />
					</button>
				</div>

				<p className={`${themeClasses.commentText} leading-relaxed mb-4`}>{comment.content}</p>

				<div className="flex items-center gap-4">
					<motion.button
						onClick={() => handleLike(comment.id)}
						className={`flex items-center gap-2 text-sm transition-colors ${
							comment.isLiked ? "text-red-400" : "text-slate-400 hover:text-white"
						}`}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Heart size={16} className={comment.isLiked ? "fill-current" : ""} />
						{comment.likes}
					</motion.button>
					
					<motion.button
						onClick={() => setReplyingTo(comment.id)}
						className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Reply size={16} />
						Reply
					</motion.button>

					<button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
						<Flag size={16} />
						Report
					</button>
				</div>

				{replyingTo === comment.id && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						className="mt-4"
					>
						<div className="flex gap-3">
							<Image
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
								alt="You"
								width={32}
								height={32}
								className="rounded-full"
							/>
							<div className="flex-1">
								<textarea
									value={replyContent}
									onChange={(e) => setReplyContent(e.target.value)}
									placeholder="Write a reply..."
									className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none"
									rows={3}
								/>
								<div className="flex justify-end gap-2 mt-2">
									<button
										onClick={() => setReplyingTo(null)}
										className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
									>
										Cancel
									</button>
									<motion.button
										onClick={() => handleReply(comment.id)}
										className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Send size={16} />
										Reply
									</motion.button>
								</div>
							</div>
						</div>
					</motion.div>
				)}

				{comment.replies.map(renderComment)}
			</div>
		</motion.div>
	);

	if (!post) {
		return (
			<div className={`min-h-screen bg-black text-white flex items-center justify-center ${isDarkMode ? "dark" : "light"}`}>
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
		<div className={`min-h-screen ${themeClasses.page} ${isDarkMode ? "dark" : "light"}`}>
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
							{/* Theme Toggle */}
							<motion.button
								onClick={toggleTheme}
								className="p-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
							</motion.button>

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
					<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
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
						className={`prose prose-invert prose-lg max-w-none ${isDarkMode ? "dark" : "light"}`}
					>
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							rehypePlugins={[rehypeHighlight, rehypeSlug]}
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
										<div className="my-10 flex flex-col items-center">
											<div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 shadow-lg">
												<Image
													src={resolvedSrc}
													alt={alt || post.title}
													width={1400}
													height={900}
													className="w-full max-h-[420px] object-cover md:object-contain bg-black/20"
													priority={false}
												/>
											</div>
											{alt && (
												<p className="text-center text-slate-400 text-sm mt-3 italic max-w-2xl">
													{alt}
												</p>
											)}
										</div>
									);
								},
								code: ({ children, className, ...props }) => (
									<div className={`bg-slate-900 rounded-lg p-4 overflow-x-auto my-4 ${className || ""}`} {...props}>
										<code className="text-sm">{children}</code>
									</div>
								),
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

								<div className="flex items-center gap-2 text-slate-400">
									<MessageCircle size={20} />
									{comments.reduce((acc, comment) => acc + 1 + comment.replies.length, 0)} Comments
								</div>
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

				{/* Comments Section */}
				<div className="border-t border-slate-800">
					<div className="container mx-auto px-6 py-16 max-w-4xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<h2 className="text-3xl font-bold mb-8">
								Comments ({comments.reduce((acc, comment) => acc + 1 + comment.replies.length, 0)})
							</h2>

							{/* Comment Form */}
							<div className={`${themeClasses.panel} backdrop-blur-sm rounded-xl p-6 mb-8`}>
								<h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
								<div className="flex gap-4">
									<Image
										src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop"
										alt="You"
										width={48}
										height={48}
										className="h-12 w-12 rounded-full object-cover"
									/>
									<div className="flex-1">
										<textarea
											value={newComment}
											onChange={(e) => setNewComment(e.target.value)}
											placeholder="Share your thoughts..."
											className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 resize-none ${themeClasses.input}`}
											rows={4}
										/>
										<div className="flex justify-end gap-2 mt-4">
											<button className="px-6 py-2 text-slate-400 hover:text-white transition-colors">
												Cancel
											</button>
											<motion.button
												onClick={handleComment}
												className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<Send size={16} />
												Post Comment
											</motion.button>
										</div>
									</div>
								</div>
							</div>

							{/* Comments List */}
							<div className="space-y-6">
								{comments.map(renderComment)}
							</div>
						</motion.div>
					</div>
				</div>
			</article>
		</div>
	);
};

export default BlogArticle;
