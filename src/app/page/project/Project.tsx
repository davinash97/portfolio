"use client";

import AnimatedSection from "@/app/components/AnimatedSection";
import ProjectCard from "@/app/components/ProjectCard";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
	exit: { opacity: 0 },
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
	},
	exit: { opacity: 0, y: 40 },
};

export default function Project() {
	return (
		<section className="w-screen flex flex-col items-center justify-center gap-5 p-10">
			{/* Animated Heading */}
			<AnimatedSection>
				<h2 className="text-4xl">
					<span>P</span>
					<span>r</span>
					<span>o</span>
					<span>j</span>
					<span>e</span>
					<span>c</span>
					<span>t</span>
					<span>s</span>
				</h2>
			</AnimatedSection>

			{/* Projects Grid */}
			<AnimatedSection>
				<motion.div
					className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-6xl mx-auto justify-items-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					exit="exit"
					viewport={{ once: false, amount: 0.3 }}>
					<motion.div variants={cardVariants}>
						<ProjectCard
							name="Global Buzz"
							image="https://dummyimage.com/600x400/000/fff"
							detail={[
								"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
								"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
								"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
							]}
						/>
					</motion.div>

					<motion.div variants={cardVariants}>
						<ProjectCard
							name="Password Generator"
							image="https://dummyimage.com/600x400/000/fff"
							detail={[
								"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
								"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
								"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
							]}
						/>
					</motion.div>
				</motion.div>
			</AnimatedSection>
		</section>
	);
}
