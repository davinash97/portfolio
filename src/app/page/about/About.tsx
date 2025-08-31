"use client";

import { motion } from "framer-motion";
import { Lato } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export default function About() {
	return (
		<section className="flex w-screen h-[60dvh] text-center items-center p-10 lg:p-40 flex-col lg:flex-row justify-evenly gap-5">
			{/* Animated Heading */}
			<motion.h2
				className="w-full flex flex-row justify-center items-center text-4xl cursor-pointer select-none"
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -50 }}
				transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
				viewport={{ amount: 0.3, once: false }} // triggers in & out
			>
				<span>A</span>
				<span>b</span>
				<span>o</span>
				<span>u</span>
				<span>t</span>
				<span>&nbsp;</span>
				<span>m</span>
				<span>e</span>
			</motion.h2>

			{/* Animated Paragraph */}
			<motion.p
				className={`w-full text-justify md:text-xl p-5 lg:p-10 ${lato.className}`}
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: 100 }}
				transition={{
					duration: 1,
					ease: [0.25, 0.1, 0.25, 1.0],
					delay: 0.2,
				}}
				viewport={{ amount: 0.3, once: false }} // in/out both
			>
				I&apos;m a Computer Science Engineer with a strong foundation in
				Electrical Engineering, combining software expertise with
				hardware knowledge to create comprehensive solutions. My
				interdisciplinary background allows me to bridge the gap between
				digital innovation and physical implementation. With experience
				in full-stack development, embedded systems, and IoT solutions,
				I thrive on challenges that require both analytical thinking and
				creative problem-solving. I&apos;m passionate about emerging
				technologies like AI, machine learning, and automation.
			</motion.p>
		</section>
	);
}
