"use client";

import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
	asChild?: boolean;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
	primary:
		"bg-sky-500 text-white hover:bg-sky-400 shadow-md shadow-sky-500/30",
	secondary:
		"bg-slate-800 text-white border border-slate-700 hover:bg-slate-700",
	outline:
		"border border-slate-700 text-slate-100 hover:bg-slate-800/80",
	ghost: "text-slate-200 hover:bg-slate-800/60",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
	sm: "px-3 py-2 text-sm",
	md: "px-4 py-2.5 text-sm",
	lg: "px-5 py-3 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className = "",
			variant = "primary",
			size = "md",
			asChild = false,
			children,
			...props
		},
		ref
	) => {
		const variantClass = variantClasses[variant] ?? variantClasses.primary;
		const sizeClass = sizeClasses[size] ?? sizeClasses.md;
		const classes = `inline-flex items-center justify-center gap-2 rounded-md font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${variantClass} ${sizeClass} ${className}`;

		// Support optional asChild usage without leaking the prop to the DOM.
		if (asChild && React.isValidElement(children)) {
			const childClasses =
				(children.props as { className?: string }).className || "";
			const clonedProps = {
				className: `${classes} ${childClasses}`.trim(),
				...props,
			};
			return React.cloneElement(children, clonedProps);
		}

		return (
			<button
				ref={ref}
				className={classes}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";
