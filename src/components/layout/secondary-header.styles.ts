import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled(motion.header)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100vw;
	overflow-x: hidden;
	z-index: 1000;
	background: rgba(15, 23, 42, 0.95);
	backdrop-filter: blur(12px);
	border-bottom: 1px solid rgba(59, 130, 246, 0.1);
	transition: all 0.3s ease;
`;

export const Nav = styled.nav`
	max-width: 80rem;
	margin: 0 auto;
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled(motion.div)`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	cursor: pointer;
	text-decoration: none;
`;

export const LogoIcon = styled(motion.div)`
	width: 40px;
	height: 40px;
	background: linear-gradient(135deg, #3b82f6, #8b5cf6);
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: linear-gradient(
			45deg,
			transparent,
			rgba(255, 255, 255, 0.2),
			transparent
		);
		transform: rotate(45deg);
		animation: shimmer 3s ease-in-out infinite;
	}

	@keyframes shimmer {
		0%,
		100% {
			transform: translateX(-100%) translateY(-100%) rotate(45deg);
		}
		50% {
			transform: translateX(100%) translateY(100%) rotate(45deg);
		}
	}
`;

export const LogoText = styled(motion.span)`
	font-size: 1.5rem;
	font-weight: 700;
	background: linear-gradient(135deg, #ffffff, #cbd5e1);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	letter-spacing: -0.025em;
`;

export const NavMenu = styled(motion.ul)`
	display: flex;
	align-items: center;
	gap: 2rem;
	list-style: none;
	margin: 0;
	padding: 0;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled(motion.li)`
	position: relative;
`;

export const NavLinkAnchor = styled(motion.a)`
	background: none;
	border: none;
	color: #e2e8f0;
	text-decoration: none;
	font-weight: 500;
	font-size: 0.95rem;
	padding: 0.5rem 0;
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&::after {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background: linear-gradient(90deg, #3b82f6, #8b5cf6);
		transition: width 0.3s ease;
	}

	&:hover::after {
		width: 100%;
	}

	&.active {
		color: #3b82f6;
	}

	&.active::after {
		width: 100%;
	}
`;

export const CTASection = styled(motion.div)`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const CTAButton = styled(motion.button)`
	background: linear-gradient(135deg, #3b82f6, #8b5cf6);
	border: none;
	color: white;
	font-weight: 600;
	padding: 0.625rem 1.5rem;
	border-radius: 8px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	font-size: 0.9rem;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.2),
			transparent
		);
		transition: left 0.5s ease;
	}

	&:hover::before {
		left: 100%;
	}

	&:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
	}
`;

export const MobileMenuButton = styled(motion.button)`
	display: none;
	background: transparent;
	border: none;
	color: #e2e8f0;
	font-size: 1.5rem;
	cursor: pointer;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const MobileMenu = styled(motion.div)`
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background: rgba(15, 23, 42, 0.98);
	backdrop-filter: blur(12px);
	border-bottom: 1px solid rgba(59, 130, 246, 0.1);
	padding: 1rem 2rem;
`;

export const MobileNavItem = styled(motion.div)`
	padding: 0.75rem 0;
	border-bottom: 1px solid rgba(59, 130, 246, 0.1);

	&:last-child {
		border-bottom: none;
	}

	a {
		color: #e2e8f0;
		text-decoration: none;
		font-weight: 500;
	}
`;
