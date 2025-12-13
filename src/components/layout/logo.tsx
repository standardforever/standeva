"use client";

import React from "react";

type LogoSize = "md" | "lg";

interface LogoProps {
	showWordmark?: boolean;
	size?: LogoSize;
	className?: string;
	wordmarkClassName?: string;
}

const iconSizes: Record<LogoSize, string> = {
	md: "h-9 w-9",
	lg: "h-10 w-10",
};

const wordmarkSizes: Record<LogoSize, string> = {
	md: "text-lg",
	lg: "text-xl",
};

const Logo: React.FC<LogoProps> = ({
	showWordmark = true,
	size = "md",
	className = "",
	wordmarkClassName = "",
}) => {
	return (
		<div className={`flex items-center gap-2 ${className}`}>
			<div
				className={`grid place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 ${iconSizes[size]}`}>
				<div className="grid grid-cols-2 gap-[3px]">
					<span className="h-3 w-3 rounded-sm bg-white/90" />
					<span className="h-3 w-3 rounded-sm bg-white/70" />
					<span className="h-3 w-3 rounded-sm bg-white/70" />
					<span className="h-3 w-3 rounded-sm bg-white/90" />
				</div>
			</div>
			{showWordmark && (
				<span
					className={`${wordmarkSizes[size]} font-bold leading-none text-white ${wordmarkClassName}`}>
					ProcessZero
				</span>
			)}
		</div>
	);
};

export default Logo;
