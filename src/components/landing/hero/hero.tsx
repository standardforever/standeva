'use client';

import type { FC } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const featuredLogoIcons = [
	{
		name: "SAP",
		src: "/logo-icons/SAP_2011_logo.svg",
		category: "Finance & ERP",
	},
	{
		name: "Oracle NetSuite",
		src: "/logo-icons/Oracle_NetSuite_2021.png",
		category: "Finance & ERP",
	},
	{
		name: "Sage",
		src: "/logo-icons/Sage-logo_svg.svg",
		category: "Finance & ERP",
	},
	{
		name: "Microsoft Dynamics 365",
		src: "/logo-icons/Microsoft_Dynamics_365_Logo_(2021–present).svg",
		category: "Finance & ERP",
	},
	{
		name: "Acumatica",
		src: "/logo-icons/Acumatica_2016_Corporate_Logo.svg",
		category: "Finance & ERP",
	},
	{
		name: "Workday",
		src: "/logo-icons/Workday_logo.svg",
		category: "HR & Payroll",
	},
	{
		name: "ADP",
		src: "/logo-icons/Automatic_Data_Processing_(logo).svg",
		category: "HR & Payroll",
	},
	{
		name: "BambooHR",
		src: "/logo-icons/BambooHR_logo.svg",
		category: "HR & Payroll",
	},
	{
		name: "HiBob",
		src: "/logo-icons/HiBob_logo_for_light_BG.png",
		category: "HR & Payroll",
	},
	{
		name: "Paylocity",
		src: "/logo-icons/Paylocity_logo.svg",
		category: "HR & Payroll",
	},
	{
		name: "Salesforce",
		src: "/logo-icons/Salesforce.com_logo.svg",
		category: "CRM & GTM",
	},
	{
		name: "HubSpot",
		src: "/logo-icons/HubSpot_Logo.svg",
		category: "CRM & GTM",
	},
	{
		name: "Pipedrive",
		src: "/logo-icons/Pipedrive_Logo.svg",
		category: "CRM & GTM",
	},
];

const headingContainerVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 24,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
			staggerChildren: 0.1,
		},
	},
};

const lineRevealVariants: Variants = {
	hidden: {
		y: "100%",
	},
	visible: (index: number) => ({
		y: "0%",
		transition: {
			duration: 0.9,
			delay: index * 0.05,
			ease: [0.33, 1, 0.68, 1],
		},
	}),
};

const imageRevealVariants: Variants = {
	hidden: {
		width: "100%",
	},
	visible: {
		width: "0%",
		transition: {
			duration: 1.2,
			ease: [0.6, 0.05, -0.01, 0.9],
			delay: 0.25,
		},
	},
};

const Hero: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.35,
		triggerOnce: true,
		rootMargin: "0px 0px -10% 0px",
	});

	return (
		<>
			<section
				ref={ref}
				className="relative overflow-hidden bg-black text-slate-50">
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.32),transparent_55%)] opacity-70 mix-blend-screen" />
				</div>

				<motion.div
					className="relative z-10 mt-12"
					variants={headingContainerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}>
					<div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-32 text-center md:px-6 md:pb-28 md:pt-40">
						<div className="flex flex-col items-center gap-2">
							<motion.div
								className="flex items-center gap-1 text-yellow-400"
								initial={{ opacity: 0, y: 10 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}>
								{[0, 1, 2, 3, 4].map((star) => (
									<Star
										key={star}
										className="h-4 w-4 fill-yellow-400"
									/>
								))}
							</motion.div>
							<motion.p
								className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400"
								initial={{ opacity: 0, y: 10 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.4, delay: 0.1 }}>
								Your trusted AI partner
							</motion.p>
						</div>

						<motion.div className="mt-7 space-y-4">
							<h1 className="text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
								<span className="block overflow-hidden">
									<motion.span
										className="block"
										variants={lineRevealVariants}
										custom={0}>
										Free Your Team
									</motion.span>
								</span>
								<span className="block overflow-hidden text-sky-400">
									<motion.span
										className="block"
										variants={lineRevealVariants}
										custom={1}>
										From Repetitive Work.
									</motion.span>
								</span>
							</h1>
							<motion.p
								className="mx-auto max-w-2xl text-balance text-sm text-slate-300 sm:text-base md:text-lg"
								initial={{ opacity: 0, y: 12 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.2 }}>
								ProcessZero automates your workflows so teams
								can focus on high-impact work instead of manual
								tasks.
							</motion.p>
						</motion.div>

						<motion.div
							className="mt-7"
							initial={{ opacity: 0, y: 12 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.3 }}>
							<motion.button
								className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/40 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}>
								Book a Free AI Audit
							</motion.button>
						</motion.div>

						<div className="mt-10 w-full">
							<div className="relative mx-auto w-full overflow-hidden rounded-[2.5rem] border border-sky-500/40 bg-[#0203a3] shadow-[0_0_60px_rgba(59,130,246,0.45)]">
								<motion.div
									className="absolute left-0 top-0 z-10 h-full w-full bg-[#0203a3]"
									style={{ transformOrigin: "left" }}
									variants={imageRevealVariants}
									initial="hidden"
									animate={isInView ? "visible" : "hidden"}
								/>
								<Image
									src="/hero-image-new.png"
									alt="Automation bot with finance, HR, and sales plus tasks"
									width={1360}
									height={700}
									className="h-auto w-full object-cover"
									priority
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</section>

			<section className="bg-black">
				<div className="mx-auto flex min-h-[18vh] max-w-7xl flex-col justify-center px-4 py-10 md:px-6 md:py-12 lg:py-14">
					<div className="relative">
						<div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black via-black/70 to-transparent" />
						<div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black via-black/70 to-transparent" />
						<div className="mx-auto overflow-hidden px-2 py-4 md:px-4 md:py-5">
							<div
								className="flex flex-col gap-4 md:gap-5"
								aria-label="Companies that integrate with ProcessZero">
								{[0, 1, 2].map((rowIndex) => {
									const rowLogos = featuredLogoIcons.filter(
										(_, index) => index % 3 === rowIndex
									);

									const baseLogos = [
										...rowLogos,
										...rowLogos,
									];

									const trackLogos = [
										...baseLogos,
										...baseLogos,
									];

									const animationClass =
										rowIndex === 1
											? "animate-[logo-marquee-reverse_20s_linear_infinite]"
											: "animate-[logo-marquee_20s_linear_infinite]";

									return (
										<div
											key={rowIndex}
											className="relative h-20 overflow-hidden md:h-24">
											<div
												className={`flex items-center gap-4 md:gap-6 ${animationClass}`}>
												{trackLogos.map((logo, idx) => (
													<div
														key={`${logo.name}-${idx}`}
														className="group flex h-16 w-[170px] flex-shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 backdrop-blur transition hover:border-sky-500/80 hover:bg-slate-50 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] md:h-20 md:w-[200px]">
														<Image
															src={logo.src}
															alt={logo.name}
															width={180}
															height={60}
															className="h-8 w-auto max-w-[120px] object-contain brightness-110 contrast-110 md:h-10 md:max-w-[140px]"
														/>
													</div>
												))}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
