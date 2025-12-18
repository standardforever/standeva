import styled from "styled-components";
import { motion } from "framer-motion";

// Primary Button Blue
export const PrimaryButton = styled(motion.button)`
	padding: 0.75rem 2rem;
	background: linear-gradient(135deg, #3b82f6, #2563eb);
	color: white;
	font-weight: 600;
	border-radius: 0.75rem;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease;
	box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

	&:hover {
		background: linear-gradient(135deg, #2563eb, #1d4ed8);
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
	}

	&:active {
		transform: translateY(0);
	}
`;

// Secondary Button Outline
export const SecondaryButton = styled(motion.button)`
	padding: 0.75rem 2rem;
	background: transparent;
	color: #3b82f6;
	font-weight: 600;
	border-radius: 0.75rem;
	border: 2px solid #3b82f6;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: #3b82f6;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
	}

	&:active {
		transform: translateY(0);
	}
`;

// Tertiary Button Ghost (for dark backgrounds)
export const TertiaryButton = styled(motion.button)`
	padding: 0.75rem 2rem;
	background: rgba(255, 255, 255, 0.1);
	color: white;
	font-weight: 600;
	border-radius: 0.75rem;
	border: 1px solid rgba(255, 255, 255, 0.2);
	cursor: pointer;
	transition: all 0.2s ease;
	backdrop-filter: blur(10px);

	&:hover {
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.3);
		transform: translateY(-2px);
	}

	&:active {
		transform: translateY(0);
	}
`;
