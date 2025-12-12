"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Dropdown } from "./dropdown";

interface NavItemConfig {
	name: string;
	href?: string;
	hasDropdown?: boolean;
}

const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<
		"Platform" | "Solutions" | "Developers" | null
	>(null);
	const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			setIsScrolled(currentScrollY > 20);

			if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems: NavItemConfig[] = [
		// { name: "Platform", hasDropdown: true },
		// { name: "Solutions", hasDropdown: true },
		{ name: "pricing", href: "#pricing" },
		// { name: "Developers", hasDropdown: true },
		// { name: "Partner", href: "/partner" },
		// { name: "Company", href: "/company/about" },
		{ name: "blog", href: "/blog" },
		// Note: Some dropdown items may point to unimplemented pages
	];

	const handleMouseEnter = (itemName: string) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		if (
			itemName === "Platform" ||
			itemName === "Solutions" ||
			itemName === "Developers"
		) {
			setActiveDropdown(itemName);
		}
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setActiveDropdown(null);
		}, 150);
	};

	const handleCloseDropdown = () => {
		setActiveDropdown(null);
	};

	const handleClearTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	const headerVariants: Variants = {
		visible: {
			y: 0,
			transition: { duration: 0.3, ease: "easeOut" },
		},
		hidden: {
			y: -100,
			transition: { duration: 0.3, ease: "easeIn" },
		},
	};

	const ChevronDown = () => (
		<svg fill="currentColor" viewBox="0 0 20 20">
			<path
				fillRule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clipRule="evenodd"
			/>
		</svg>
	);

	const smoothScrollTo = useCallback((hash: string) => {
		if (typeof window === "undefined" || !hash.startsWith("#")) return;
		const target = document.querySelector(hash);
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
			window.history.replaceState(null, "", hash);
		}
	}, []);

	const handleAnchorClick = useCallback(
		(
			event: React.MouseEvent<HTMLAnchorElement>,
			href?: string,
			closeMenu = false
		) => {
			if (!href || !href.startsWith("#")) {
				if (closeMenu) {
					setIsMobileMenuOpen(false);
				}
				return;
			}
			event.preventDefault();
			smoothScrollTo(href);
			if (closeMenu) {
				setIsMobileMenuOpen(false);
			}
		},
		[smoothScrollTo]
	);

	const linkClasses =
		"relative text-sm font-medium text-slate-300 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all hover:text-white hover:-translate-y-0.5 hover:after:w-full";

	return (
		<motion.header
			variants={headerVariants}
			animate={isVisible ? "visible" : "hidden"}
			className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-all ${
				isScrolled
					? "border-blue-500/30 bg-slate-950/95"
					: "border-white/10 bg-slate-950/80"
			}`}>
			<div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
				<div className="relative flex items-center justify-between py-4">
					<div className="pointer-events-none absolute inset-0">
						{[...Array(5)].map((_, i) => (
							<motion.span
								key={i}
								className="absolute h-1 w-1 rounded-full bg-blue-500/70"
								style={{
									left: `${20 + i * 15}%`,
									top: "50%",
								}}
								animate={{
									x: [0, 30, 0],
									y: [0, -20, 0],
									opacity: [0.3, 0.8, 0.3],
								}}
								transition={{
									duration: 3 + i,
									repeat: Infinity,
									ease: "easeInOut",
									delay: i * 0.5,
								}}
							/>
						))}
					</div>

					<div className="relative flex w-full h-16 items-center justify-between gap-6">
						<Link href="/" className="flex items-center gap-3">
							<motion.div
								className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-blue-500 to-purple-600"
								animate={{ rotate: 360 }}
								transition={{
									duration: 20,
									repeat: Infinity,
									ease: "linear",
								}}>
								<span className="h-5 w-5 rounded-md bg-white" />
							</motion.div>
							<span className="text-xl font-bold tracking-tight text-white">
								ProcessZero
							</span>
						</Link>

						<ul className="hidden items-center gap-8 md:flex">
							{navItems.map((item) => (
								<li
									key={item.name}
									onMouseEnter={() =>
										item.hasDropdown &&
										handleMouseEnter(item.name)
									}
									onMouseLeave={handleMouseLeave}>
									{item.href ? (
										<a
											href={item.href}
											onClick={(event) =>
												handleAnchorClick(
													event,
													item.href
												)
											}
											className={linkClasses}>
											{item.name}
										</a>
									) : (
										<button
											type="button"
											data-open={
												activeDropdown === item.name
											}
											className={`${linkClasses} flex items-center gap-2`}
											onMouseEnter={() =>
												handleMouseEnter(item.name)
											}
											onFocus={() =>
												handleMouseEnter(item.name)
											}>
											{item.name}
											{item.hasDropdown && (
												<span
													className={`transition-transform ${
														activeDropdown ===
														item.name
															? "rotate-180 text-blue-400"
															: "text-slate-400"
													}`}>
													<ChevronDown />
												</span>
											)}
										</button>
									)}
								</li>
							))}
						</ul>

						<div className="flex items-center gap-3">
							{/* <motion.button
								className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 md:inline-flex"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								Sign in
							</motion.button> */}
							<motion.button
								className="hidden rounded-lg bg-linear-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90 md:inline-flex"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								get free ai audit
							</motion.button>

							<motion.button
								className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
								onClick={() =>
									setIsMobileMenuOpen(!isMobileMenuOpen)
								}
								whileTap={{ scale: 0.95 }}>
								{isMobileMenuOpen ? "✕" : "☰"}
							</motion.button>
						</div>
					</div>
				</div>
			</div>

			<Dropdown
				isOpen={!!activeDropdown}
				activeItem={activeDropdown}
				onClose={handleCloseDropdown}
				onMouseEnter={handleClearTimeout}
				onMouseLeave={handleMouseLeave}
			/>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
						<div className="flex flex-col space-y-2">
							{navItems.map((item, index) => (
								<motion.a
									key={item.name}
									href={item.href || "#"}
									initial={{ x: -20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: index * 0.05 }}
									onClick={(event) =>
										handleAnchorClick(
											event,
											item.href || "#",
											true
										)
									}
									className="rounded-lg px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
									{item.name}
								</motion.a>
							))}
							<div className="flex flex-col gap-2 pt-2">
								{/* <button
									type="button"
									className="rounded-lg px-3 py-2 text-center text-sm font-semibold text-slate-200 hover:bg-white/10">
									Sign in
								</button> */}
								<button
									type="button"
									className="rounded-lg bg-linear-to-r from-blue-500 to-purple-600 px-3 py-2 text-center text-sm font-semibold text-white">
									get free ai audit
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Header;
