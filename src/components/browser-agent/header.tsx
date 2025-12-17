"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Monitor, ArrowRight, Clock } from "lucide-react";

const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		// Set target date to 30 days from now
		const targetDate = new Date();
		targetDate.setDate(targetDate.getDate() + 30);

		const updateTimer = () => {
			const now = new Date().getTime();
			const distance = targetDate.getTime() - now;

			if (distance > 0) {
				setTimeLeft({
					days: Math.floor(distance / (1000 * 60 * 60 * 24)),
					hours: Math.floor(
						(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
					),
					minutes: Math.floor(
						(distance % (1000 * 60 * 60)) / (1000 * 60)
					),
					seconds: Math.floor((distance % (1000 * 60)) / 1000),
				});
			}
		};

		updateTimer();
		const interval = setInterval(updateTimer, 1000);

		return () => clearInterval(interval);
	}, []);

	const navItems = [
		{ name: "Features", href: "#features" },
		{ name: "Pricing", href: "#pricing" },
		{ name: "Why us", href: "#why-choose-us" },
		{ name: "FAQs", href: "#faqs" },
		{ name: "Blogs", href: "/blogs" },
	];

	return (
		<>
			<motion.header
				className={`fixed left-0 right-0 top-0 z-50 transition-all ${
					isScrolled
						? "border-b border-white/10 bg-slate-950/95 backdrop-blur-xl"
						: "bg-slate-950/80"
				}`}
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.3 }}>
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
					<div className="flex items-center justify-between py-4">
						<div className="flex items-center gap-3">
							<motion.div
								className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600"
								animate={{ rotate: 360 }}
								transition={{
									duration: 20,
									repeat: Infinity,
									ease: "linear",
								}}>
								<Monitor className="h-6 w-6 text-white" />
							</motion.div>
							<span className="text-xl font-bold tracking-tight text-white">
								Standeva
							</span>
						</div>

						<nav className="hidden items-center gap-8 md:flex">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="relative text-sm font-medium text-slate-300 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all hover:text-white hover:-translate-y-0.5 hover:after:w-full">
									{item.name}
								</a>
							))}
						</nav>

						<div className="flex items-center gap-3">
							<motion.button
								className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 md:inline-flex"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								Sign In
							</motion.button>
							<motion.button
								className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								Sign Up
								<ArrowRight className="h-4 w-4" />
							</motion.button>
						</div>
					</div>
				</div>
			</motion.header>

			<motion.div
				className="fixed left-0 right-0 top-16 z-40 border-b border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}>
				<div className="mx-auto flex items-center justify-center gap-4 px-4 py-2">
					<div className="flex items-center gap-2">
						<Clock className="h-4 w-4 text-blue-300" />
						<span className="text-sm font-medium text-blue-200">
							Limited offer ends in
						</span>
					</div>
					<div className="flex items-center gap-2">
						{Object.entries(timeLeft).map(([unit, value]) => (
							<div key={unit} className="flex items-center gap-1">
								<span className="rounded bg-blue-500/20 px-2 py-1 text-sm font-mono font-bold text-blue-200">
									{String(value).padStart(2, "0")}
								</span>
								<span className="text-xs text-blue-300">
									{unit.charAt(0).toUpperCase() + unit.slice(1)}
								</span>
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Header;
