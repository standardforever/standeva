import type { FC } from "react";
import Image from "next/image";

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

const SoftwareConnect: FC = () => {
	return (
		<section
			id="problems"
			className="relative overflow-hidden bg-black py-16 text-slate-50 sm:py-20 md:py-24">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.22),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 text-center md:px-6 md:gap-12">
				<div className="space-y-4">
					<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-emerald-200">
						software connectivity
					</div>
					<h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl md:text-[2.1rem]">
						automate your teams processes on all major software
						solutions.
					</h2>
					<p className="mx-auto max-w-3xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
						mimic any human processing on any software solution.
					</p>
				</div>
			</div>

			<section className="bg-black">
				<div className="mx-auto flex min-h-[18vh] max-w-7xl flex-col justify-center px-4 py-10 md:px-6 md:pt-12 lg:pt-14">
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
		</section>
	);
};

export default SoftwareConnect;
