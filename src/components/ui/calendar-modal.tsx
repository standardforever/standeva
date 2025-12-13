"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CalendarModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
	// Close modal on ESC key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				onClose();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isOpen, onClose]);

	// Prevent body scroll when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={onClose}
						className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
					/>

					{/* Modal */}
					<motion.div
						initial={{
							opacity: 0,
							x: 100, // Desktop: slide from right
							y: 100, // Mobile: slide from bottom
							scale: 0.95,
						}}
						animate={{
							opacity: 1,
							x: 0,
							y: 0,
							scale: 1,
						}}
						exit={{
							opacity: 0,
							x: 100,
							y: 100,
							scale: 0.95,
						}}
						transition={{
							duration: 0.3,
							ease: "easeOut",
						}}
						className="fixed inset-4 z-50 flex items-start justify-end md:inset-auto md:right-5 md:top-5 md:h-[700px] md:w-[500px]"
					>
						<div className="relative h-full w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-blue-500/20">
							{/* Close Button */}
							<button
								onClick={onClose}
								className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
								aria-label="Close calendar"
							>
								<X size={20} />
							</button>

							{/* Calendar Iframe */}
							<div className="h-full w-full pt-16 md:pt-0">
								<iframe
									src="https://zcal.co/standeva/15min?video=microsoft-teams"
									className="h-full w-full"
									frameBorder="0"
									title="Book your 15-minute intro call"
									allow="camera; microphone; payment"
									loading="eager"
								/>
								<div className="border-t border-slate-800 bg-slate-950/80 px-4 py-3 text-center text-xs text-slate-400">
									Bookings include a Microsoft Teams link in the invite.
								</div>
							</div>

							{/* Fallback Link (if iframe fails) */}
							<noscript>
								<div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-slate-900 p-6 text-center">
									<p className="text-slate-300">
										Calendar requires JavaScript to load.
									</p>
									<a
										href="https://zcal.co/standeva/15min?video=microsoft-teams"
										target="_blank"
										rel="noopener noreferrer"
										className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:from-slate-800 hover:to-slate-800"
									>
										Open Calendar in New Tab
									</a>
								</div>
							</noscript>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
