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
	ArrowUp
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
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
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [showTOC, setShowTOC] = useState(false);
	const [readingProgress, setReadingProgress] = useState(0);
	const [activeHeading, setActiveHeading] = useState("");

	// Load theme preference
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		setIsDarkMode(savedTheme === "dark");
	}, []);

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
		
		lines.forEach((line) => {
			const match = line.match(headingRegex);
			if (match) {
				const level = match[1].length;
				const title = match[2].trim();
				const id = title.toLowerCase().replace(/[^a-z0-9]/g, "-");
				
				toc.push({
					id,
					title,
					level,
					children: []
				});
			}
		});
		
		return toc;
	};

	// Handle theme toggle
	const toggleTheme = () => {
		const newTheme = !isDarkMode;
		setIsDarkMode(newTheme);
		localStorage.setItem("theme", newTheme ? "dark" : "light");
	};

	// Handle scroll for reading progress and active heading
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (contentRef.current) {
				const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
				const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
				setReadingProgress(Math.min(progress, 100));

				// Update active heading based on scroll position
				const headings = contentRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6");
				let currentHeading = "";
				
				headings.forEach((heading) => {
					const rect = heading.getBoundingClientRect();
					if (rect.top <= 100) {
						currentHeading = heading.id;
						return;
					}
				});
				
				setActiveHeading(currentHeading);
			}
		};

		const element = contentRef.current;
		if (element) {
			element.addEventListener("scroll", handleScroll);
			return () => element.removeEventListener("scroll", handleScroll);
		}
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
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const renderTOC = (items: TableOfContentsItem[], level = 0) => {
		return items.map((item) => (
			<div key={item.id} className={`ml-${level * 4}`}>
				<motion.a
					href={`#${item.id}`}
					className={`block py-2 text-sm transition-colors ${
						activeHeading === item.id 
							? "text-blue-400 font-medium" 
							: "text-slate-400 hover:text-white"
					}`}
					whileHover={{ x: 4 }}
					onClick={() => scrollToHeading(item.id)}
				>
					{item.title}
				</motion.a>
				{item.children && item.children.length > 0 && renderTOC(item.children, level + 1)}
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
			<div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
				<div className="flex items-start justify-between mb-4">
					<div className="flex items-center gap-3">
						<Image
							src={comment.author.avatar}
							alt={comment.author.name}
							width={40}
							height={40}
							className="rounded-full"
						/>
						<div>
							<div className="flex items-center gap-2">
								<h4 className="font-semibold text-white">{comment.author.name}</h4>
								{comment.author.bio && (
									<span className="text-xs text-slate-400">• {comment.author.bio}</span>
								)}
							</div>
							<p className="text-xs text-slate-400">{comment.createdAt}</p>
						</div>
					</div>
					<button className="text-slate-400 hover:text-white transition-colors">
						<MoreVertical size={16} />
					</button>
				</div>

				<p className="text-slate-300 leading-relaxed mb-4">{comment.content}</p>

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

	const toc = post ? generateTOC(post.content) : [];

	return (
		<div className={`min-h-screen bg-black text-white ${isDarkMode ? "dark" : "light"}`}>
			{/* Background Pattern */}
			<div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

			{/* Article Header */}
			<motion.header
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-slate-800"
			>
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<Link href="/blog" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
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
									whileTap={{ scale: 0.9 }}
								>
									<Share2 size={20} />
								</motion.button>

								<AnimatePresence>
									{showShareMenu && (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 10 }}
											className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-50"
										>
											<button className="w-full px-4 py-3 text-left hover:bg-slate-800 transition-colors flex items-center gap-3">
												<span className="w-4 h-4 bg-blue-400 rounded-full" />
												<span>Share on Twitter</span>
											</button>
											<button className="w-full px-4 py-3 text-left hover:bg-slate-800 transition-colors flex items-center gap-3">
												<span className="w-4 h-4 bg-blue-400 rounded-full" />
												<span>Share on LinkedIn</span>
											</button>
											<button className="w-full px-4 py-3 text-left hover:bg-slate-800 transition-colors flex items-center gap-3">
												<span className="w-4 h-4 bg-blue-400 rounded-full" />
												<span>Copy Link</span>
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
			<article className="relative z-10" ref={contentRef}>
				{/* Hero Image */}
				{post.image && (
					<div className="relative h-[60vh] overflow-hidden">
						<Image
							src={post.image}
							alt={post.title}
							fill
							className="object-cover"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
					</div>
				)}

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
							rehypePlugins={[rehypeHighlight]}
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
								img: ({ src, alt, ...props }) => (
									<div className="my-8">
										<Image
											src={src}
											alt={alt}
											width={800}
											height={400}
											className="rounded-xl object-cover"
											{...props}
										/>
										{alt && (
											<p className="text-center text-slate-400 text-sm mt-2 italic">{alt}</p>
										)}
									</div>
								),
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

							<div className="flex items-center gap-2">
								<span className="text-slate-400">Share this article:</span>
								{["Twitter", "LinkedIn"].map((platform) => (
									<motion.button
										key={platform}
										className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<span className="w-4 h-4 bg-blue-400 rounded-full" />
									</motion.button>
								))}
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
							<div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 mb-8">
								<h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
								<div className="flex gap-4">
									<Image
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
										alt="You"
										width={48}
										height={48}
										className="rounded-full"
									/>
									<div className="flex-1">
										<textarea
											value={newComment}
											onChange={(e) => setNewComment(e.target.value)}
											placeholder="Share your thoughts..."
											className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none"
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
