"use client";

import AnimatedSection from "@/app/components/AnimatedSection";
import Card from "@/app/components/Card";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.3 },
	},
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

export default function Experience() {
	return (
		<section className="flex flex-col w-screen text-center items-center p-10 gap-10">
			<AnimatedSection>
				<h2 className="text-4xl">
					<span>E</span>
					<span>x</span>
					<span>p</span>
					<span>e</span>
					<span>r</span>
					<span>i</span>
					<span>e</span>
					<span>n</span>
					<span>c</span>
					<span>e</span>
				</h2>
			</AnimatedSection>

			{/* Experience Grid */}
			<AnimatedSection>
				<motion.div
					className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-6xl mx-auto justify-items-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					exit="exit"
					viewport={{ once: false, amount: 0.3 }}>
					<motion.div
						variants={cardVariants}
						className="w-full flex justify-center">
						<Card
							title="Catalog Associate"
							organization="Amazon Development Center"
							duration="Jan 2025 - Present"
							detail={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
				when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
				and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
						/>
					</motion.div>

					<motion.div
						variants={cardVariants}
						className="w-full flex justify-center">
						<Card
							title="Web Developer Intern"
							organization="Rungta Infotech Pvt Ltd"
							duration="Feb 2024 - Apr 2024"
							detail={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
				when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
				and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
						/>
					</motion.div>
				</motion.div>
			</AnimatedSection>
		</section>
	);
}
