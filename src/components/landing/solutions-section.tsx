import type { FC } from "react";
import Image from "next/image";

const cards = [
	{
		id: "finance",
		title: "finance repetitive tasks",
		description:
			"Automate purchase ledger, sales ledger, general ledger and everything in between.",
		imageSrc: "/card-image-new.png",
	},
	{
		id: "hr",
		title: "hr & functions",
		description:
			"Handle activation, escalation, processing and scheduling tasks while AI manages the flow.",
		imageSrc: "/card-2-image-new.png",
	},
	{
		id: "sales-plus",
		title: "sales plus driven tasks",
		description:
			"Streamline product sourcing and order workflows so your team can focus on strategy.",
		imageSrc: "/card-3-image-new.png",
	},
];

const SolutionsSection: FC = () => {
	return (
		<section
			id="solutions"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.24),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-6">
				<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-emerald-200">
					solutions
				</div>

				<div className="mt-6 space-y-4">
					<h2 className="text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
						reduce your operational costs by up to 90%
					</h2>
					<p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
						Not all automation solutions are created equal. Our
						unique approach keeps your data secure by working within
						your existing systems.
					</p>
				</div>

				<div className="mt-14 grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{cards.map((card) => (
						<article
							key={card.id}
							className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 shadow-[0_26px_90px_rgba(15,23,42,0.95)] transition hover:-translate-y-1.5 hover:border-sky-500/60 hover:shadow-[0_32px_110px_rgba(56,189,248,0.45)]">
							<div className="relative h-56 w-full bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
								<Image
									src={card.imageSrc}
									alt={card.title}
									fill
									className="object-contain object-center"
									sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
								/>
							</div>
							<div className="flex flex-1 flex-col gap-2 px-8 pb-8 pt-6 text-left">
								<h3 className="text-base font-semibold text-slate-50 sm:text-lg">
									{card.title}
								</h3>
								<p className="text-sm text-slate-300 sm:text-[0.95rem]">
									{card.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default SolutionsSection;
