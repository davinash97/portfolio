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
		<section className="text-center items-center flex flex-col relative h-screen w-screen m-0 p-0 overflow-hidden">
			{/* This is a workaround cuz it wasn't working as expected */}
			<div className="absolute top-0">
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
				<div className="top-0 relative z-10 gap-13 flex flex-col items-center justify-center w-screen h-screen bg-black/40 text-white p-0 m-0">
					<h1 className="text-5xl font-bold">This is Avinash</h1>
					<h2 className="text-2xl">I am a Developer</h2>
				</div>
			</div>
		</section>
	);
}
