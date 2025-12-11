"use client";

import {
	FileText,
	Shield,
	Lock,
	Users,
	Database,
	Scale,
	Clock,
	UserCheck,
	Printer,
	AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";

const LAST_UPDATED = "10 December 2025";

function AnchorTitle({
	id,
	icon,
	children,
}: {
	id: string;
	icon?: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<h2
			id={id}
			className="group scroll-mt-28 text-2xl sm:text-3xl font-bold text-white flex items-center gap-3 mb-6">
			<span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
				{icon ?? <FileText className="w-5 h-5" />}
			</span>
			<span>{children}</span>
			<a
				href={`#${id}`}
				aria-label="Anchor link"
				className="opacity-0 group-hover:opacity-100 transition text-blue-400 ml-2 text-lg">
				¶
			</a>
		</h2>
	);
}

export default function GDPRPage() {
	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "About Us", href: "/about-us" },
		{ label: "Services", href: "/services" },
	];

	const cta = {
		label: "Book free 15 min intro call",
		href: "/intro-call",
	};

	return (
		<div className="min-h-screen ">
			<SecondaryHeader navItems={navItems} cta={cta} />

			<main className="pt-24 pb-20 bg-black text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:gap-8">
					{/* Sidebar */}
					<aside className="w-full lg:w-80 lg:flex-shrink-0 mb-8 lg:mb-0 sticky top-20 sm:top-24 lg:top-24 self-start">
						<div className="rounded-2xl border border-slate-700 p-4 lg:p-6 bg-slate-900/60 backdrop-blur shadow-xl max-h-[calc(100vh-6rem)] sm:max-h-[calc(100vh-7rem)] overflow-y-auto">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-lg">
									<FileText className="w-5 h-5" />
								</div>
								<div>
									<p className="text-xs text-slate-400">
										Last updated
									</p>
									<p className="text-sm font-semibold text-white">
										{LAST_UPDATED}
									</p>
								</div>
							</div>

							<nav className="space-y-3 text-sm">
								<p className="uppercase tracking-wide text-slate-400 text-xs font-semibold">
									On this page
								</p>
								<ul className="space-y-2">
									<li>
										<a
											className="text-slate-300 hover:text-blue-400 transition-colors"
											href="#overview">
											Overview
										</a>
									</li>
									<li>
										<a
											className="text-slate-300 hover:text-blue-400 transition-colors"
											href="#commitment">
											Our Commitment
										</a>
									</li>
									<li>
										<a
											className="text-slate-300 hover:text-blue-400 transition-colors"
											href="#role">
											Our Role
										</a>
									</li>
									<li>
										<a
											className="text-slate-300 hover:text-blue-400 transition-colors"
											href="#data-processing">
											What Data We Process
										</a>
									</li>
									<li>
										<a
											className="text-slate-300 hover:text-blue-400 transition-colors"
											href="#why-process">
											Why We Process Data
										</a>
									</li>
									<li>
										<a
											className="text-slate-300 hover:text-blue-400 transition-colors"
											href="#lawful-bases">
											Lawful Bases
										</a>
									</li>
									<li>
										<a
											className="text-slate-300 hover:text-blue-400 transition-colors"
											href="#retention">
											Data Retention
										</a>
									</li>
									<li>
										<a
											className="text-slate-300 hover:text-blue-400 transition-colors"
											href="#security">
											Data Security
										</a>
									</li>
									<li>
										<a
											className="text-slate-300 hover:text-blue-400 transition-colors"
											href="#third-parties">
											Third Parties
										</a>
									</li>
									<li>
										<a
											className="text-slate-300 hover:text-blue-400 transition-colors"
											href="#rights">
											Your Rights
										</a>
									</li>
									<li>
										<a
											className="text-slate-300 hover:text-blue-400 transition-colors"
											href="#contact">
											Contact
										</a>
									</li>
								</ul>

								<div className="pt-4 mt-4 border-t border-slate-700">
									<Button
										type="button"
										variant="secondary"
										className="w-full bg-slate-800 text-white hover:bg-slate-700 border border-slate-600"
										onClick={() => window.print()}>
										<Printer className="w-4 h-4 mr-2" />{" "}
										Print / Save PDF
									</Button>
								</div>
							</nav>
						</div>
					</aside>

					{/* Main Content */}
					<section className="lg:flex-1 lg:min-w-0 space-y-8 overflow-x-hidden">
						{/* Header Section */}
						<div className="rounded-2xl border border-slate-800 p-6 sm:p-8 bg-slate-900/40 shadow-lg">
							<div className="flex items-center gap-4 mb-4">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-lg">
									<Shield className="w-6 h-6" />
								</div>
								<div>
									<h1 className="text-3xl sm:text-4xl font-bold text-white">
										Process Zero GDPR Statement
									</h1>
									<p className="text-sm text-slate-400 mt-1">
										Last updated: {LAST_UPDATED}
									</p>
								</div>
							</div>
							<p className="text-slate-300 leading-relaxed text-lg">
								At Process Zero, we specialise in designing and
								deploying private AI agents, automation systems,
								and customised large language models (LLMs) for
								UK businesses. Because our work often interacts
								directly with client systems, networks, and
								data, we take data protection extremely
								seriously.
							</p>
							<p className="text-slate-300 leading-relaxed text-lg mt-4">
								This GDPR Statement explains how we handle
								personal data when delivering our AI and
								automation solutions, and outlines your rights
								under UK GDPR and the Data Protection Act 2018.
							</p>
						</div>

						{/* Commitment Section */}
						<div
							id="commitment"
							className="rounded-2xl border border-slate-800 p-6 sm:p-8 bg-slate-900/40 shadow-lg">
							<AnchorTitle
								id="commitment"
								icon={<Shield className="w-5 h-5" />}>
								Our Commitment to Data Protection
							</AnchorTitle>

							<div className="prose prose-invert max-w-none">
								<p className="text-slate-300 leading-relaxed mb-4">
									Process Zero is committed to:
								</p>
								<ul className="list-disc ml-6 space-y-3 text-slate-300">
									<li>
										Ensuring security and confidentiality of
										any data processed by our AI agents or
										automation systems
									</li>
									<li>
										Processing data lawfully, fairly, and
										transparently
									</li>
									<li>
										Minimising data exposure through
										closed-loop, on-premise, open-source AI
										models
									</li>
									<li>
										Building all solutions with
										privacy-by-design principles
									</li>
									<li>
										Ensuring clients always remain in full
										control of their data
									</li>
									<li>
										Acting strictly under client instruction
										when processing project data
									</li>
									<li>
										Maintaining clear and documented
										compliance procedures
									</li>
								</ul>
								<p className="text-slate-300 leading-relaxed mt-6">
									Our goal is to deliver automation that
									reduces operational workload without
									increasing data risk.
								</p>
							</div>
						</div>

						{/* Role Section */}
						<div
							id="role"
							className="rounded-2xl border border-slate-800 p-6 sm:p-8 bg-slate-900/40 shadow-lg">
							<AnchorTitle
								id="role"
								icon={<Users className="w-5 h-5" />}>
								Our Role as Data Controller and Data Processor
							</AnchorTitle>

							<div className="prose prose-invert max-w-none">
								<p className="text-slate-300 leading-relaxed mb-6">
									Depending on the activity, Process Zero may
									act as:
								</p>

								<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 mb-6">
									<h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
										<UserCheck className="w-5 h-5 text-blue-400" />
										Data Controller
									</h3>
									<p className="text-slate-300 leading-relaxed mb-3">
										We act as a controller when processing
										data relating to our own operations,
										including:
									</p>
									<ul className="list-disc ml-6 space-y-2 text-slate-300">
										<li>Website enquiries</li>
										<li>
											Intro calls and Discovery Series
											bookings
										</li>
										<li>Client onboarding</li>
										<li>Marketing and communications</li>
									</ul>
								</div>

								<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
									<h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
										<Database className="w-5 h-5 text-purple-400" />
										Data Processor
									</h3>
									<p className="text-slate-300 leading-relaxed mb-3">
										We act as a processor when delivering AI
										and automation services where our
										systems, tools, or custom-built agents
										interact with client networks, systems,
										or datasets.
									</p>
									<p className="text-slate-300 leading-relaxed mb-3">
										In these circumstances:
									</p>
									<ul className="list-disc ml-6 space-y-2 text-slate-300">
										<li>
											The client defines what data may be
											accessed or processed
										</li>
										<li>
											We act only under documented
											instructions
										</li>
										<li>
											A Data Processing Agreement (DPA)
											governs all processing activities
										</li>
										<li>
											The client remains the Data
											Controller at all times
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Data Processing Section */}
						<div
							id="data-processing"
							className="rounded-2xl border border-slate-800 p-6 sm:p-8 bg-slate-900/40 shadow-lg">
							<AnchorTitle
								id="data-processing"
								icon={<Database className="w-5 h-5" />}>
								What Data We Process
							</AnchorTitle>

							<div className="prose prose-invert max-w-none">
								<div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-6">
									<h3 className="text-xl font-semibold text-white mb-3">
										For client AI/automation projects:
									</h3>
									<p className="text-slate-300 leading-relaxed mb-3">
										Depending on the scope of the
										engagement, we may process:
									</p>
									<ul className="list-disc ml-6 space-y-2 text-slate-300">
										<li>
											Operational datasets required for
											automated workflows
										</li>
										<li>
											Employee, supplier, or customer
											records stored in client systems
										</li>
										<li>
											System logs, process data, or
											operational metadata
										</li>
										<li>
											Information required to configure or
											train private LLMs
										</li>
										<li>
											Integration data, API data, or
											workflow-level information
										</li>
									</ul>
									<p className="text-slate-300 leading-relaxed mt-4 font-semibold">
										We only process data that the client has
										explicitly authorised.
									</p>
								</div>

								<div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mb-6">
									<h3 className="text-xl font-semibold text-white mb-3">
										For website enquiries and initial
										contact:
									</h3>
									<ul className="list-disc ml-6 space-y-2 text-slate-300">
										<li>Name</li>
										<li>Email address</li>
										<li>Company details</li>
										<li>
											Information shared during intro
											calls, enquiry forms, or Discovery
											sessions
										</li>
									</ul>
								</div>

								<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
									<h3 className="text-xl font-semibold text-white mb-3">
										For analytics and service optimisation:
									</h3>
									<ul className="list-disc ml-6 space-y-2 text-slate-300">
										<li>Website analytics and behaviour</li>
										<li>Marketing engagement data</li>
									</ul>
									<p className="text-slate-300 leading-relaxed mt-4">
										You may opt out of marketing at any
										time.
									</p>
								</div>
							</div>
						</div>

						{/* Why We Process Data */}
						<div
							id="why-process"
							className="rounded-2xl border border-slate-800 p-6 sm:p-8 bg-slate-900/40 shadow-lg">
							<AnchorTitle
								id="why-process"
								icon={<AlertCircle className="w-5 h-5" />}>
								Why We Process Data
							</AnchorTitle>

							<div className="prose prose-invert max-w-none">
								<p className="text-slate-300 leading-relaxed mb-4">
									We process personal data for reasons such
									as:
								</p>
								<ul className="list-disc ml-6 space-y-3 text-slate-300">
									<li>
										Building and deploying AI agents or LLM
										systems
									</li>
									<li>
										Delivering automation, consultancy, and
										technical support
									</li>
									<li>
										Integrating systems with client
										environments
									</li>
									<li>
										Providing ongoing maintenance and
										improvement of deployed agents
									</li>
									<li>
										Responding to enquiries and managing
										client relationships
									</li>
									<li>
										Meeting legal or regulatory obligations
									</li>
								</ul>
								<div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-r-xl p-6 mt-6">
									<p className="text-slate-200 leading-relaxed font-semibold">
										We never use client data to train public
										AI models, and we do not share data with
										external AI providers unless explicitly
										authorised in writing.
									</p>
								</div>
							</div>
						</div>

						{/* Lawful Bases */}
						<div
							id="lawful-bases"
							className="rounded-2xl border border-slate-800 p-6 sm:p-8 bg-slate-900/40 shadow-lg">
							<AnchorTitle
								id="lawful-bases"
								icon={<Scale className="w-5 h-5" />}>
								Lawful Bases for Processing
							</AnchorTitle>

							<div className="prose prose-invert max-w-none">
								<p className="text-slate-300 leading-relaxed mb-4">
									Our lawful bases include:
								</p>
								<div className="space-y-4">
									<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5">
										<h4 className="text-lg font-semibold text-white mb-2">
											Contractual necessity
										</h4>
										<p className="text-slate-300">
											Required to deliver agreed services
										</p>
									</div>
									<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5">
										<h4 className="text-lg font-semibold text-white mb-2">
											Legitimate interests
										</h4>
										<p className="text-slate-300">
											Improving services, security, and
											analytics
										</p>
									</div>
									<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5">
										<h4 className="text-lg font-semibold text-white mb-2">
											Consent
										</h4>
										<p className="text-slate-300">
											Used for marketing communications
										</p>
									</div>
									<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5">
										<h4 className="text-lg font-semibold text-white mb-2">
											Legal obligation
										</h4>
										<p className="text-slate-300">
											Compliance with UK law
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Data Retention */}
						<div
							id="retention"
							className="rounded-2xl border border-slate-800 p-6 sm:p-8 bg-slate-900/40 shadow-lg">
							<AnchorTitle
								id="retention"
								icon={<Clock className="w-5 h-5" />}>
								Data Retention
							</AnchorTitle>

							<div className="prose prose-invert max-w-none">
								<ul className="list-disc ml-6 space-y-3 text-slate-300">
									<li>
										Data accessed or processed for client
										project work is retained only for the
										duration of the engagement unless
										otherwise agreed.
									</li>
									<li>
										Temporary data used for testing, model
										configuration, or debugging is securely
										deleted once no longer required.
									</li>
									<li>
										Business records and enquiry information
										are retained in line with statutory
										requirements.
									</li>
								</ul>
							</div>
						</div>

						{/* Data Security */}
						<div
							id="security"
							className="rounded-2xl border border-slate-800 p-6 sm:p-8 bg-slate-900/40 shadow-lg">
							<AnchorTitle
								id="security"
								icon={<Lock className="w-5 h-5" />}>
								Data Security
							</AnchorTitle>

							<div className="prose prose-invert max-w-none">
								<p className="text-slate-300 leading-relaxed mb-4">
									Because our agents may interact with
									internal and sometimes sensitive business
									data, Process Zero enforces strong security
									controls, including:
								</p>
								<ul className="list-disc ml-6 space-y-3 text-slate-300">
									<li>
										Encryption of data in transit and at
										rest
									</li>
									<li>
										Role-based access control and
										multi-factor authentication
									</li>
									<li>
										Secure development and deployment
										practices
									</li>
									<li>
										Segmented infrastructure for
										client-specific environments
									</li>
									<li>
										No transfer of client data to external
										LLMs unless authorised
									</li>
									<li>
										Privacy-by-design embedded in all AI
										systems
									</li>
									<li>
										Secure deletion processes for all
										temporary data
									</li>
								</ul>
								<div className="bg-purple-500/10 border-l-4 border-purple-500 rounded-r-xl p-6 mt-6">
									<p className="text-slate-200 leading-relaxed font-semibold">
										Where agents or models are deployed
										within a client&apos;s own
										infrastructure, the client retains full
										technical control.
									</p>
								</div>
							</div>
						</div>

						{/* Third Parties */}
						<div
							id="third-parties"
							className="rounded-2xl border border-slate-800 p-6 sm:p-8 bg-slate-900/40 shadow-lg">
							<AnchorTitle
								id="third-parties"
								icon={<Users className="w-5 h-5" />}>
								Third Parties and Sub-Processors
							</AnchorTitle>

							<div className="prose prose-invert max-w-none">
								<p className="text-slate-300 leading-relaxed mb-4 font-semibold text-lg">
									Process Zero does not sell personal data.
								</p>
								<p className="text-slate-300 leading-relaxed mb-4">
									We may engage carefully selected
									sub-processors when necessary (e.g., secure
									hosting providers, specialised tooling),
									each of whom must comply with UK GDPR and
									maintain appropriate security standards.
								</p>
								<p className="text-slate-300 leading-relaxed">
									Any sub-processor used within a client
									engagement will be documented transparently
									in the DPA.
								</p>
							</div>
						</div>

						{/* Your Rights */}
						<div
							id="rights"
							className="rounded-2xl border border-slate-800 p-6 sm:p-8 bg-slate-900/40 shadow-lg">
							<AnchorTitle
								id="rights"
								icon={<UserCheck className="w-5 h-5" />}>
								Your Rights Under UK GDPR
							</AnchorTitle>

							<div className="prose prose-invert max-w-none">
								<p className="text-slate-300 leading-relaxed mb-4">
									You have the right to:
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
									<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5">
										<h4 className="text-base font-semibold text-white mb-2">
											Access your data
										</h4>
										<p className="text-slate-400 text-sm">
											Request a copy of the personal data
											we hold about you
										</p>
									</div>
									<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5">
										<h4 className="text-base font-semibold text-white mb-2">
											Request correction or deletion
										</h4>
										<p className="text-slate-400 text-sm">
											Update inaccurate data or request
											erasure
										</p>
									</div>
									<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5">
										<h4 className="text-base font-semibold text-white mb-2">
											Restrict or object to processing
										</h4>
										<p className="text-slate-400 text-sm">
											Limit how we use your personal data
										</p>
									</div>
									<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5">
										<h4 className="text-base font-semibold text-white mb-2">
											Withdraw consent
										</h4>
										<p className="text-slate-400 text-sm">
											Where processing is based on consent
										</p>
									</div>
									<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5">
										<h4 className="text-base font-semibold text-white mb-2">
											Data portability
										</h4>
										<p className="text-slate-400 text-sm">
											Receive your data in a structured
											format
										</p>
									</div>
									<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5">
										<h4 className="text-base font-semibold text-white mb-2">
											Lodge a complaint
										</h4>
										<p className="text-slate-400 text-sm">
											Contact the ICO if your rights are
											violated
										</p>
									</div>
								</div>
								<p className="text-slate-300 leading-relaxed">
									To exercise these rights, please contact us
									at the details below.
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>

			<SecondaryFooter />
		</div>
	);
}
