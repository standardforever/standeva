"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./logo";

interface NavItemConfig {
	label: string;
	href: string;
}

interface CTAConfig {
	label: string;
	href: string;
}

interface SecondaryHeaderProps {
	navItems?: NavItemConfig[];
	cta?: CTAConfig | null;
	className?: string;
}

const defaultNavItems: NavItemConfig[] = [
	{ label: "home", href: "/" },
	{ label: "solutions", href: "/#solutions" },
	{ label: "services", href: "/services" },
	{ label: "pricing", href: "/#pricing" },
	{ label: "about us", href: "/about-us" },
	{ label: "contact", href: "/contact" },
];

const defaultCTA: CTAConfig = {
	label: "get in touch",
	href: "/contact",
};

const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({
	navItems,
	cta,
	className = ""
}) => {
	const pathname = usePathname();
	const [activeHash, setActiveHash] = useState<string>("");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [isScrolled, setIsScrolled] = useState(false);
	const lastScrollY = useRef(0);
	const items = useMemo(
		() => (typeof navItems !== "undefined" ? navItems : defaultNavItems),
		[navItems]
	);
	const ctaConfig = cta === null ? null : cta ?? defaultCTA;

	useEffect(() => {
		const handleHashChange = () => {
			setActiveHash(window.location.hash);
		};

		handleHashChange();
		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const current = window.scrollY;
			setIsScrolled(current > 20);

			if (current > lastScrollY.current && current > 100) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}

			lastScrollY.current = current;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const getIsActive = (href: string) => {
		if (href.startsWith("#")) {
			return activeHash === href;
		}
		return pathname === href;
	};

	const smoothScrollTo = useCallback((hash: string) => {
		if (typeof window === "undefined" || !hash.startsWith("#")) return;
		const target = document.querySelector(hash);
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
			setActiveHash(hash);
			window.history.replaceState(null, "", hash);
		}
	}, []);

	const handleAnchorClick = useCallback(
		(event: React.MouseEvent, href: string, closeMenu = false) => {
			if (!href.startsWith("#")) return;
			event.preventDefault();
			smoothScrollTo(href);
			if (closeMenu) {
				setIsMobileMenuOpen(false);
			}
		},
		[smoothScrollTo]
	);

	const linkBaseClasses =
		"text-sm font-medium tracking-wide transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:text-white hover:after:w-full";

	const headerVariants = {
		visible: { y: 0, opacity: 1, transition: { duration: 0.25 } },
		hidden: { y: -80, opacity: 0, transition: { duration: 0.25 } }
	};

	return (
		<motion.header
			initial={{ y: -40, opacity: 0 }}
			variants={headerVariants}
			animate={isVisible ? "visible" : "hidden"}
			className={`fixed top-0 left-0 right-0 z-40 h-16 sm:h-20 border-b border-white/5 ${isScrolled ? "bg-slate-950/95" : "bg-slate-950/80"} backdrop-blur-xl transition-all ${className}`}>
			<nav className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 sm:px-6">
				<Link href="/" className="flex items-center gap-2 sm:gap-3 no-underline">
					<Logo wordmarkClassName="sm:text-xl" />
				</Link>

				<ul className="hidden items-center gap-4 lg:gap-8 md:flex">
					{items.map((item) => {
						const isActive = getIsActive(item.href);
						return (
							<li key={item.label}>
								<Link
									href={item.href}
									onClick={(event) =>
										handleAnchorClick(event, item.href)
									}
									className={`${linkBaseClasses} ${
										isActive
											? "text-blue-400 after:w-full"
											: "text-slate-300"
									}`}>
									{item.label}
								</Link>
							</li>
						);
					})}
				</ul>

				<div className="flex items-center gap-3">
					{ctaConfig && (
						<Link
							href={ctaConfig.href}
							onClick={(event) => handleAnchorClick(event, ctaConfig.href)}
							className="hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-colors duration-300 ease-out hover:from-slate-800 hover:to-slate-800 md:inline-flex">
							{ctaConfig.label}
						</Link>
					)}

					<button
						onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-blue-500 md:hidden"
						aria-label="Toggle navigation menu">
						{isMobileMenuOpen ? "✕" : "☰"}
					</button>
				</div>
			</nav>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="border-t border-white/5 bg-slate-950/95 px-4 sm:px-6 py-4 md:hidden">
						<div className="flex flex-col space-y-3">
							{items.map((item) => {
								const isActive = getIsActive(item.href);
								return (
									<Link
										key={item.label}
										href={item.href}
										onClick={(event) =>
											handleAnchorClick(event, item.href, true)
										}
										className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
											isActive
												? "bg-white/10 text-white"
												: "text-slate-300 hover:bg-white/5"
										}`}>
										{item.label}
									</Link>
								);
							})}

							{ctaConfig && (
								<Link
									href={ctaConfig.href}
									onClick={(event) =>
										handleAnchorClick(event, ctaConfig.href, true)
									}
									className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition-colors duration-300 ease-out hover:from-slate-800 hover:to-slate-800">
									{ctaConfig.label}
								</Link>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default SecondaryHeader;
