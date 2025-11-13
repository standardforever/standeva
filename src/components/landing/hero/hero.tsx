"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
import {
	Database,
	Cloud,
	Shield,
	Zap,
	Code,
	BarChart3,
	Cpu,
	Globe,
	Lock,
	Rocket,
	Brain,
	Network,
	Server,
	Terminal,
} from "lucide-react";

const techIcons = [
	{ name: "React", icon: Code, color: "#3b82f6" },
	{ name: "Node.js", icon: Server, color: "#10b981" },
	{ name: "Python", icon: Terminal, color: "#eab308" },
	{ name: "AI/ML", icon: Brain, color: "#ec4899" },
	{ name: "API", icon: Globe, color: "#06b6d4" },
	{ name: "Cloud", icon: Cloud, color: "#8b5cf6" },
	{ name: "Database", icon: Database, color: "#ef4444" },
	{ name: "Security", icon: Shield, color: "#f59e0b" },
	{ name: "Analytics", icon: BarChart3, color: "#14b8a6" },
	{ name: "Performance", icon: Zap, color: "#6366f1" },
	{ name: "Network", icon: Network, color: "#22c55e" },
	{ name: "Processor", icon: Cpu, color: "#f97316" },
];

const hexagonPositions = [
	{ x: 50, y: 80, delay: 0 },
	{ x: 180, y: 50, delay: 0.2 },
	{ x: 310, y: 90, delay: 0.4 },
	{ x: 440, y: 60, delay: 0.6 },
	{ x: 20, y: 200, delay: 0.8 },
	{ x: 150, y: 170, delay: 1.0 },
	{ x: 280, y: 210, delay: 1.2 },
	{ x: 410, y: 180, delay: 1.4 },
	{ x: 70, y: 320, delay: 1.6 },
	{ x: 200, y: 290, delay: 1.8 },
	{ x: 330, y: 330, delay: 2.0 },
	{ x: 150, y: 440, delay: 2.1 },
];

const codeSnippets = [
	{
		title: "API Call",
		code: `fetch('/api/ai/generate', {
  method: 'POST',
  body: JSON.stringify({
    prompt: 'Generate content',
    model: 'gpt-4'
  })
})`,
	},
	{
		title: "Response",
		code: `{
  "status": "success",
  "data": {
    "content": "Generated text...",
    "tokens": 150,
    "latency": "450ms"
  }
}`,
	},
	{
		title: "Integration",
		code: `import { ClickbuyAI } from '@clickbuy/sdk'

const ai = new ClickbuyAI({
  apiKey: process.env.API_KEY
})

const result = await ai.generate({
  prompt: "Your prompt here"
})`,
	},
];

const platformVariants = ["SaaS", "Automation", "Internal Tools"];

const ColorTransitionBox: React.FC = () => {
	return null;
};

const Hero: React.FC = () => {
	const [particles, setParticles] = useState<
		Array<{ id: number; x: number; y: number; delay: number }>
	>([]);
	const platformTextRef = useRef<HTMLSpanElement>(null);
	const codeTextRef = useRef<HTMLSpanElement>(null);
	const codeTitleRef = useRef<HTMLDivElement>(null);
	const codeCursorRef = useRef<HTMLSpanElement>(null);
	const heroSectionRef = useRef<HTMLElement>(null);
	const hexagonContainerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.set("body", { backgroundColor: "#0f172a" });
	});

	useEffect(() => {
		const newParticles = Array.from({ length: 20 }, (_, i) => ({
			id: i,
			x: Math.random() * 100,
			y: Math.random() * 100,
			delay: Math.random() * 2,
		}));
		setParticles(newParticles);
	}, []);

	useEffect(() => {
		const handleHeroScroll = () => {
			if (!heroSectionRef.current || !hexagonContainerRef.current) return;

			const scrollY = window.scrollY;
			const heroHeight = heroSectionRef.current.offsetHeight;

			if (scrollY < heroHeight) {
				const parallaxSpeed = scrollY * 0.5;

				hexagonContainerRef.current.style.transform = `translateY(${
					parallaxSpeed * 0.3
				}px)`;

				const curves =
					heroSectionRef.current.querySelector("[data-curves]");
				if (curves) {
					(curves as HTMLElement).style.transform = `translateY(${
						parallaxSpeed * 0.2
					}px)`;
				}

				const particleContainer =
					heroSectionRef.current.querySelector("[data-particles]");
				if (particleContainer) {
					(
						particleContainer as HTMLElement
					).style.transform = `translateY(${parallaxSpeed * 0.1}px)`;
				}
			}
		};

		window.addEventListener("scroll", handleHeroScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleHeroScroll);
	}, []);

	useEffect(() => {
		if (!platformTextRef.current) return;

		let currentIndex = 0;
		let isTyping = true;
		let currentText = "";
		const typewriterTimeouts: NodeJS.Timeout[] = [];

		const typeNextCharacter = () => {
			const currentWord = platformVariants[currentIndex];

			if (isTyping) {
				if (currentText.length < currentWord.length) {
					currentText += currentWord[currentText.length];
					if (platformTextRef.current) {
						platformTextRef.current.textContent = currentText + "|";
					}
					typewriterTimeouts.push(setTimeout(typeNextCharacter, 100));
				} else {
					typewriterTimeouts.push(
						setTimeout(() => {
							isTyping = false;
							typeNextCharacter();
						}, 2000)
					);
				}
			} else {
				if (currentText.length > 0) {
					currentText = currentText.slice(0, -1);
					if (platformTextRef.current) {
						platformTextRef.current.textContent = currentText + "|";
					}
					typewriterTimeouts.push(setTimeout(typeNextCharacter, 50));
				} else {
					currentIndex = (currentIndex + 1) % platformVariants.length;
					isTyping = true;
					typewriterTimeouts.push(setTimeout(typeNextCharacter, 300));
				}
			}
		};

		typeNextCharacter();

		return () => {
			typewriterTimeouts.forEach(clearTimeout);
		};
	}, []);

	useEffect(() => {
		if (
			!codeTextRef.current ||
			!codeTitleRef.current ||
			!codeCursorRef.current
		)
			return;

		let currentSnippetIndex = 0;
		let isCodeTyping = true;
		let currentCodeText = "";
		const codeTimeouts: NodeJS.Timeout[] = [];

		const highlightSyntax = (code: string) => {
			return code
				.replace(
					/('.*?'|".*?")/g,
					'<span style="color: #22c55e">$1</span>'
				)
				.replace(
					/\b(fetch|method|import|const|await|from|new)\b/g,
					'<span style="color: #3b82f6">$1</span>'
				)
				.replace(
					/(\{|\}|\[|\])/g,
					'<span style="color: #eab308">$1</span>'
				)
				.replace(/\b(\d+)\b/g, '<span style="color: #f97316">$1</span>')
				.replace(
					/(\/\/.*$)/gm,
					'<span style="color: #6b7280">$1</span>'
				);
		};

		const typeCodeCharacter = () => {
			const currentSnippet = codeSnippets[currentSnippetIndex];
			const targetCode = currentSnippet.code;

			if (isCodeTyping) {
				if (currentCodeText.length < targetCode.length) {
					currentCodeText += targetCode[currentCodeText.length];
					if (codeTextRef.current) {
						codeTextRef.current.innerHTML =
							highlightSyntax(currentCodeText);
					}
					if (codeTitleRef.current) {
						codeTitleRef.current.textContent = currentSnippet.title;
					}
					codeTimeouts.push(setTimeout(typeCodeCharacter, 50));
				} else {
					codeTimeouts.push(
						setTimeout(() => {
							isCodeTyping = false;
							typeCodeCharacter();
						}, 3000)
					);
				}
			} else {
				if (currentCodeText.length > 0) {
					currentCodeText = currentCodeText.slice(0, -1);
					if (codeTextRef.current) {
						codeTextRef.current.innerHTML =
							highlightSyntax(currentCodeText);
					}
					codeTimeouts.push(setTimeout(typeCodeCharacter, 25));
				} else {
					currentSnippetIndex =
						(currentSnippetIndex + 1) % codeSnippets.length;
					isCodeTyping = true;
					codeTimeouts.push(setTimeout(typeCodeCharacter, 500));
				}
			}
		};

		codeTimeouts.push(setTimeout(typeCodeCharacter, 2000));
		const cursorInterval = setInterval(() => {
			if (codeCursorRef.current) {
				codeCursorRef.current.style.opacity =
					codeCursorRef.current.style.opacity === "0" ? "1" : "0";
			}
		}, 500);

		return () => {
			codeTimeouts.forEach(clearTimeout);
			clearInterval(cursorInterval);
		};
	}, []);

	const titleVariants: Variants = React.useMemo(
		() => ({
			hidden: { opacity: 0, y: 30 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.8,
					ease: "easeOut",
				},
			},
		}),
		[]
	);

	const subtitleVariants: Variants = React.useMemo(
		() => ({
			hidden: { opacity: 0, y: 20 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.8,
					delay: 0.3,
					ease: "easeOut",
				},
			},
		}),
		[]
	);

	const ctaVariants: Variants = React.useMemo(
		() => ({
			hidden: { opacity: 0, y: 20 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.8,
					delay: 0.6,
					ease: "easeOut",
				},
			},
		}),
		[]
	);

	const hexagonVariants: Variants = React.useMemo(
		() => ({
			hidden: { scale: 0, rotate: -180, opacity: 0 },
			visible: (delay: number) => ({
				scale: 1,
				rotate: 0,
				opacity: 1,
				transition: {
					duration: 0.8,
					delay: delay,
					ease: "easeOut",
				},
			}),
		}),
		[]
	);

	const floatingVariants: Variants = React.useMemo(
		() => ({
			animate: {
				y: [-10, 10, -10],
				rotate: [0, 5, -5, 0],
				transition: {
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
				},
			},
		}),
		[]
	);

	const Hexagon: React.FC<{
		tech: (typeof techIcons)[0];
		position: (typeof hexagonPositions)[0];
	}> = React.memo(({ tech, position }) => {
		Hexagon.displayName = "Hexagon";
		const IconComponent = tech.icon;

		return (
			<motion.div
				className="absolute flex h-24 w-24 items-center justify-center"
				style={{ left: position.x, top: position.y }}
				variants={hexagonVariants}
				initial="hidden"
				animate="visible"
				custom={position.delay}
				whileHover={{ scale: 1.1, rotate: 10 }}>
				<motion.svg
					viewBox="0 0 100 100"
					className="h-full w-full drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)]">
					<defs>
						<linearGradient
							id={`grad-${tech.name}`}
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%">
							<stop
								offset="0%"
								stopColor={tech.color}
								stopOpacity="0.2"
							/>
							<stop
								offset="100%"
								stopColor={tech.color}
								stopOpacity="0.4"
							/>
						</linearGradient>
					</defs>
					<polygon
						points="50,5 90,25 90,75 50,95 10,75 10,25"
						fill={`url(#grad-${tech.name})`}
						stroke={tech.color}
						strokeWidth="2"
					/>
				</motion.svg>
				<div
					className="absolute -translate-x-1/2 -translate-y-1/2 drop-shadow-lg"
					style={{
						left: "50%",
						top: "50%",
						color: tech.color,
					}}>
					<IconComponent size={24} />
				</div>
			</motion.div>
		);
	});

	const CodeBlock: React.FC = () => (
		<div
			className="absolute z-20 w-full max-w-[380px] rounded-2xl border border-blue-500/40 bg-slate-900/95 p-6 font-mono text-xs text-slate-100 shadow-2xl backdrop-blur-2xl sm:text-sm"
			style={{ top: "75%", right: "-8%" }}>
			<div
				ref={codeTitleRef}
				className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-400">
				API Call
			</div>
			<pre className="m-0 whitespace-pre-wrap leading-relaxed">
				<span ref={codeTextRef}></span>
				<span ref={codeCursorRef} className="text-blue-400">
					|
				</span>
			</pre>
		</div>
	);

	return (
		<section
			ref={heroSectionRef}
			className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 py-24">
			<ColorTransitionBox />

			<motion.svg
				data-curves
				viewBox="0 0 1200 800"
				className="pointer-events-none absolute inset-0 h-full w-full opacity-30">
				<defs>
					<linearGradient
						id="curveGrad"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="100%">
						<stop
							offset="0%"
							stopColor="#3b82f6"
							stopOpacity="0.1"
						/>
						<stop
							offset="100%"
							stopColor="#8b5cf6"
							stopOpacity="0.2"
						/>
					</linearGradient>
				</defs>
				<motion.path
					d="M0,400 Q300,200 600,300 T1200,250"
					stroke="url(#curveGrad)"
					strokeWidth="3"
					fill="none"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 3, ease: "easeInOut" }}
				/>
				<motion.path
					d="M0,600 Q400,400 800,500 T1200,450"
					stroke="url(#curveGrad)"
					strokeWidth="2"
					fill="none"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
				/>
			</motion.svg>

			<div
				data-particles
				className="pointer-events-none absolute inset-0">
				{particles.map((particle) => (
					<motion.span
						key={particle.id}
						className="absolute h-1 w-1 rounded-full bg-blue-500/70"
						style={{
							left: `${particle.x}%`,
							top: `${particle.y}%`,
						}}
						animate={{
							y: [-20, 20, -20],
							opacity: [0.3, 0.8, 0.3],
							scale: [0.8, 1.2, 0.8],
						}}
						transition={{
							duration: 4 + particle.delay,
							repeat: Infinity,
							ease: "easeInOut",
							delay: particle.delay,
						}}
					/>
				))}
			</div>

			<div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_1.2fr]">
				<motion.div className="flex flex-col gap-8 text-white">
					<motion.h1
						variants={titleVariants}
						initial="hidden"
						animate="visible"
						className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
						Powerful APIs
						<br />
						for your
						<br />
						<span
							ref={platformTextRef}
							className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
							Platform
						</span>
					</motion.h1>

					<motion.p
						variants={subtitleVariants}
						initial="hidden"
						animate="visible"
						className="text-lg text-slate-300 sm:text-xl">
						Ready-made APIs for AI, product sourcing, integrations,
						and more. Or request custom solutions built specifically
						for your platform.
					</motion.p>

					<motion.div
						variants={ctaVariants}
						initial="hidden"
						animate="visible"
						className="flex flex-col gap-4 text-base md:flex-row md:flex-wrap">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="rounded-xl bg-linear-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90">
							Browse APIs
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="rounded-xl border border-blue-500/40 px-6 py-3 font-semibold text-slate-100 transition hover:border-blue-500 hover:bg-blue-500/10">
							Request Custom Solution
						</motion.button>
						<Link
							href="/blog"
							className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-blue-400 hover:text-blue-200">
							Visit Blog
						</Link>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.9 }}
						className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
						<div className="flex items-center gap-2">
							<span className="h-2 w-2 rounded-full bg-emerald-400" />
							<span>99.9% Uptime</span>
						</div>
						<span className="text-slate-600">•</span>
						<span>Trusted by 500+ Developers</span>
						<span className="text-slate-600">•</span>
						<span>Built in the UK</span>
					</motion.div>
				</motion.div>

				<div
					ref={hexagonContainerRef}
					className="relative h-[500px] w-full md:h-[580px]">
					<svg
						viewBox="0 0 600 500"
						className="absolute inset-0 h-full w-full">
						<defs>
							<linearGradient
								id="lineGrad"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="0%">
								<stop
									offset="0%"
									stopColor="#3b82f6"
									stopOpacity="0.3"
								/>
								<stop
									offset="50%"
									stopColor="#8b5cf6"
									stopOpacity="0.6"
								/>
								<stop
									offset="100%"
									stopColor="#3b82f6"
									stopOpacity="0.3"
								/>
							</linearGradient>
						</defs>
						<motion.line
							x1="280"
							y1="150"
							x2="380"
							y2="100"
							stroke="url(#lineGrad)"
							strokeWidth="2"
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={{ duration: 1, delay: 2 }}
						/>
						<motion.line
							x1="380"
							y1="250"
							x2="480"
							y2="200"
							stroke="url(#lineGrad)"
							strokeWidth="2"
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={{ duration: 1, delay: 2.5 }}
						/>
						<motion.line
							x1="230"
							y1="300"
							x2="330"
							y2="250"
							stroke="url(#lineGrad)"
							strokeWidth="2"
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={{ duration: 1, delay: 3 }}
						/>
					</svg>

					{techIcons.slice(0, 12).map((tech, index) => (
						<Hexagon
							key={tech.name}
							tech={tech}
							position={hexagonPositions[index]}
						/>
					))}

					<CodeBlock />

					<motion.div
						className="absolute flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl"
						style={{
							top: "0%",
							right: "50%",
							width: "140px",
							height: "60px",
						}}
						variants={floatingVariants}
						animate="animate">
						<Terminal className="h-5 w-5" />
						Live API
					</motion.div>

					<motion.div
						className="absolute flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl"
						style={{
							bottom: "15%",
							left: "5%",
							width: "160px",
							height: "60px",
						}}
						variants={floatingVariants}
						animate="animate"
						transition={{ delay: 1 }}>
						<Rocket className="h-5 w-5" />
						Fast Deploy
					</motion.div>

					<motion.div
						className="absolute flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl"
						style={{
							top: "45%",
							right: "25%",
							width: "130px",
							height: "60px",
						}}
						variants={floatingVariants}
						animate="animate"
						transition={{ delay: 2 }}>
						<Lock className="h-5 w-5" />
						Secure
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
