"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Poppins, Lato, Great_Vibes } from "next/font/google";

const nameArr = ["Avinash", "a Software Engineer"];

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function Hero() {
	const [name, setName] = useState(nameArr[0]);
	const [hovered, setHovered] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const [scrollY, setScrollY] = useState(0);

	// Cycle names
	useEffect(() => {
		if (hovered) {
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

	// Scroll tracking (parallax + fade)
	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const opacity = Math.max(1 - scrollY / 400, 0);
	const translateY = scrollY * 0.2;

	// Stagger variants for heading
	const headingVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i = 1) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.15, duration: 0.6 },
		}),
	};

	return (
		<section className="relative h-screen w-screen overflow-hidden m-0 p-0">
			{/* Background SVG */}
			<svg
				className="absolute top-0 left-0 w-full h-full"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				viewBox="0 0 1440 320">
				<path
					fill="rgba(147,51,234,0.4)"
					d="M0,192L48,165.3C96,139,192,85,288,80C384,75,480,117,576,144C672,171,768,181,864,170.7C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
					<animate
						attributeName="d"
						dur="10s"
						repeatCount="indefinite"
						values="
              M0,192L48,165.3C96,139,192,85,288,80C384,75,480,117,576,144C672,171,768,181,864,170.7C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
              M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,229.3C672,245,768,203,864,197.3C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
              M0,192L48,165.3C96,139,192,85,288,80C384,75,480,117,576,144C672,171,768,181,864,170.7C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z
            "
					/>
				</path>
			</svg>

			{/* Overlay */}
			<motion.div
				className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/60 text-white text-center"
				style={{
					opacity,
					transform: `translateY(${translateY}px)`,
					transition: "opacity 0.1s linear, transform 0.1s linear",
				}}>
				{/* Heading with stagger */}
				<motion.h1
					className={`text-3xl md:text-6xl lg:text-6xl xl:text-8xl break-words p-6 ${poppins.className}`}>
					{"Welcome to my Portfolio Website"
						.split(" ")
						.map((word, i) => (
							<motion.span
								key={i}
								custom={i}
								variants={headingVariants}
								initial="hidden"
								animate="visible"
								className="inline-block mr-2">
								{word}
							</motion.span>
						))}
				</motion.h1>

				{/* Subheading */}
				<motion.h2
					className={`text-2xl md:text-3xl lg:text-3xl xl:text-6xl break-words p-6 ${lato.className}`}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}>
					I am{" "}
					<motion.span
						key={name}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className={`${greatVibes.className} inline-block animate-bounce hover:[animation-play-state:paused] cursor-auto text-purple-500`}>
						{name}
					</motion.span>
				</motion.h2>

				{/* Scroll indicator */}
				<motion.div
					className="absolute bottom-6 animate-bounce text-lg opacity-80"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					↓ Scroll down here
				</motion.div>
			</motion.div>
		</section>
	);
}
