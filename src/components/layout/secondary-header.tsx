"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	HeaderContainer,
	Nav,
	Logo,
	LogoIcon,
	LogoText,
	NavMenu,
	NavItem,
	NavLinkAnchor,
	CTASection,
	CTAButton,
	MobileMenuButton,
	MobileMenu,
	MobileNavItem,
} from "./secondary-header.styles";

interface NavItemConfig {
	name: string;
	href: string;
}

const SecondaryHeader: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	const navItems: NavItemConfig[] = [
		{ name: "Home", href: "/" },
		{ name: "Solutions", href: "/solutions" },
		{ name: "Company", href: "/company/about" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<HeaderContainer>
			<Nav>
				<Logo as={Link} href="/">
					<LogoIcon>
						<motion.div
							animate={{ rotate: 360 }}
							transition={{
								duration: 20,
								repeat: Infinity,
								ease: "linear",
							}}
							style={{
								width: "20px",
								height: "20px",
								background: "white",
								borderRadius: "4px",
							}}
						/>
					</LogoIcon>
					<LogoText>Standeva</LogoText>
				</Logo>

				<NavMenu>
					{navItems.map((item) => (
						<NavItem key={item.name}>
							<NavLinkAnchor
								as={Link}
								href={item.href}
								className={pathname === item.href ? "active" : ""}>
								{item.name}
							</NavLinkAnchor>
						</NavItem>
					))}
				</NavMenu>

				<CTASection>
					<CTAButton>
						Get in touch
					</CTAButton>

					<MobileMenuButton
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						☰
					</MobileMenuButton>
				</CTASection>
			</Nav>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<MobileMenu
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}>
						{navItems.map((item, i) => (
							<MobileNavItem
								key={item.name}
								initial={{ x: -20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: i * 0.1 }}>
								<Link href={item.href}>{item.name}</Link>
							</MobileNavItem>
						))}
					</MobileMenu>
				)}
			</AnimatePresence>
		</HeaderContainer>
	);
};

export default SecondaryHeader;
