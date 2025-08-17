"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 2;
		}
	}, []);
	return (
		<section className="relative h-screen w-screen m-0 p-0 overflow-hidden">
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

			{/* Overlay text */}
			<div className="relative z-10 gap-13 flex flex-col items-center justify-center w-full h-full bg-black/40 text-white">
				<h1 className="text-5xl font-bold">This is Avinash</h1>
				<h2 className="text-2xl">I am a Developer</h2>
			</div>
		</section>
	);
}
