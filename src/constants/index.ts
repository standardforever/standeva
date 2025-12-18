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

export const heroContent = {
	title: {
		line1: "Powerful APIs",
		line2: "for your",
		dynamic: "Platform",
	},
	subtitle:
		"Ready-made APIs for AI, product sourcing, integrations, and more. Or request custom solutions built specifically for your platform.",
	cta: {
		primary: "Browse APIs",
		secondary: "Request Custom Solution",
	},
	info: ["99.9% Uptime", "Trusted by 500+ Developers", "Built in the UK"],
	floatingElements: [
		{ text: "Live API", icon: Terminal },
		{ text: "Fast Deploy", icon: Rocket },
		{ text: "Secure", icon: Lock },
	],
	platformVariants: ["SaaS", "Automation", "Internal Tools"],
	techIcons: [
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
	],
	hexagonPositions: [
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
	],
	codeSnippets: [
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
			code: `import { AutomationAI } from '@process-zero/sdk'

const ai = new AutomationAI({
  apiKey: process.env.API_KEY
})

const result = await ai.generate({
  prompt: "Your prompt here"
})`,
		},
	],
};

export const headerContent = {
	logoText: "Process Zero",
	navItems: [
		{ name: "Platform", hasDropdown: true },
		{ name: "Solutions", hasDropdown: true },
		{ name: "Pricing", href: "#pricing" },
		{ name: "Developers", hasDropdown: true },
		{ name: "Company", href: "#company" },
	],
	cta: {
		signIn: "Sign in",
		signUp: "Get Free AI Audit",
	},
	dropdownContent: {
		Platform: {
			sections: [
				{
					title: "Core Platform",
					items: [
						{ label: "API Gateway", href: "/platform/api-gateway" },
						{ label: "Model Hub", href: "/platform/model-hub" },
						{ label: "Analytics", href: "/platform/analytics" },
						{ label: "Dashboard", href: "/platform/dashboard" },
					],
				},
				{
					title: "APIs",
					items: [
						{ label: "Sourceora API", href: "/apis/sourceora" },
						{ label: "AI/ML API", href: "/apis/ai-ml" },
						{
							label: "Speech-to-Text API",
							href: "/apis/speech-to-text",
						},
						{
							label: "Image Generation API",
							href: "/apis/image-generation",
						},
						{
							label: "Prompt Optimization",
							href: "/apis/prompt-optimization",
						},
					],
				},
				{
					title: "Tools",
					items: [
						{ label: "Playground", href: "/tools/playground" },
						{ label: "Testing Suite", href: "/tools/testing" },
						{ label: "Monitoring", href: "/tools/monitoring" },
					],
				},
			],
			featured: {
				title: "Sourceora API Launch 🚀",
				description:
					"Our powerful sourcing engine is now available via API. Connect, query, and automate product sourcing in real time.",
				image: "📦",
				link: "/apis/sourceora",
			},
		},
		Solutions: {
			sections: [
				{
					title: "AI Solutions",
					items: [
						{
							label: "Generative AI",
							href: "/solutions/generative-ai",
						},
						{
							label: "AI Consulting",
							href: "/solutions/ai-consulting",
						},
					],
				},
			],
			featured: {
				title: "Explore Our AI Solutions",
				description:
					"Discover how our innovative AI solutions can help you drive growth and efficiency.",
				image: "✨",
				link: "/solutions",
			},
		},
		Developers: {
			sections: [
				{
					title: "Resources",
					items: [
						{ label: "Documentation", href: "/docs" },
						{ label: "API Reference", href: "/docs/api" },
						{ label: "SDKs", href: "/docs/sdks" },
						{ label: "Tutorials", href: "/docs/tutorials" },
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Discord",
							href: "https://discord.gg/standeva",
						},
						{
							label: "GitHub",
							href: "https://github.com/standeva",
						},
						{
							label: "Stack Overflow",
							href: "https://stackoverflow.com",
						},
					],
				},
			],
			featured: {
				title: "Developer Toolkit",
				description:
					"New SDKs, enhanced documentation, and developer-friendly tools to accelerate your integration.",
				image: "⚡",
				link: "/developer-toolkit",
			},
		},
	},
};
