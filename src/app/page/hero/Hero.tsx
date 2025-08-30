"use client";

import { useEffect, useRef, useState } from "react";
import { Montserrat, Jost, Sacramento } from "next/font/google";
import "./Hero.css";

const nameArr = ["Avinash", "a Software Engineer"];

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const jost = Jost({ weight: "400", subsets: ["latin"] });
const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });

export default function Hero() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [name, setName] = useState(nameArr[0]);
	const [hovered, setHovered] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const [scrollY, setScrollY] = useState(0);

	// Cycle names
	useEffect(() => {
		if (hovered) {
			// stop cycling while hovered
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
			return;
		}

		let index = 0;
		intervalRef.current = setInterval(() => {
			index = (index + 1) % nameArr.length;
			setName(nameArr[index]);
		}, 2000);

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [hovered]);

	// Scroll tracking
	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Animation math
	const opacity = Math.max(1 - scrollY / 400, 0); // fade out
	const translateY = scrollY * 0.2; // parallax move

	return (
		<section className="relative h-screen w-screen overflow-hidden m-0 p-0">
			{/* Background video */}
			<video
				ref={videoRef}
				src="/assets/hero.mp4"
				autoPlay
				loop
				muted
				playsInline
				onContextMenu={(e) => e.preventDefault()}
				className="absolute top-0 left-0 w-full h-full object-cover"
			/>

			{/* Overlay content */}
			<div
				className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/50 text-white text-center"
				style={{
					opacity,
					transform: `translateY(${translateY}px)`,
					transition: "opacity 0.1s linear, transform 0.1s linear",
				}}>
				<h1
					className={`xl:text-8xl md:text-6xl sm:text-4xl ${montserrat.className}`}>
					<span className="inline-block slideIn">Welcome&nbsp;</span>
					<span className="slideIn-1">to&nbsp;</span>
					<span className="slideIn-2">my&nbsp;</span>
					<br />
					<span className="slideIn-3">Portfolio Website</span>
				</h1>

				<h2
					className={`xl:text-6xl md:text-4xl sm:text-2xl ${jost.className}`}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}>
					I am{" "}
					<span
						key={name}
						className={`${sacramento.className} inline-block animate-bounce hover:[animation-play-state:paused] text-purple-500`}>
						{name}
					</span>
				</h2>

				{/* Scroll indicator */}
				<div className="absolute bottom-6 animate-bounce text-lg opacity-80">
					↓ Scroll
				</div>
			</div>
		</section>
	);
}
