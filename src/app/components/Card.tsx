import { Lato } from "next/font/google";
import React from "react";

const lato = Lato({ weight: "400", subsets: ["latin"] });

type Props = {
	title: string;
	organization: string;
	duration: string;
	detail: React.ReactNode;
	className?: string;
};

export default React.memo(function Card({
	title,
	organization,
	duration,
	detail,
	className,
}: Props) {
	return (
		<article
			className={`max-w-md flex flex-col gap-4 p-4 rounded-lg border border-gray-200 shadow-sm bg-white ${
				className || ""
			}`}>
			<h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
			<div className="flex justify-between text-sm text-gray-600">
				<span className="no-anim">{organization}</span>
				<time>{duration}</time>
			</div>
			<p
				className={`text-gray-700 leading-relaxed text-justify ${lato.className}`}>
				{detail}
			</p>
		</article>
	);
});
