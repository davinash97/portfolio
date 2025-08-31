"use client";

import { motion, Variants } from "framer-motion";
import SkillCard from "@/app/components/SkillCard";
import { Lato } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2 },
	},
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

export default function Skill() {
	return (
		<section className="flex w-screen text-center items-center p-10 justify-center">
			<div className="flex flex-col justify-evenly gap-5">
				{/* Animated Heading */}
				<motion.h2
					className="text-4xl"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -30 }}
					transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
					viewport={{ amount: 0.3, once: false }}>
					<span>S</span>
					<span>k</span>
					<span>i</span>
					<span>l</span>
					<span>l</span>
					<span>s</span>
				</motion.h2>

				{/* Grid with scroll-trigger animation */}
				<motion.div
					className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-around gap-3"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					exit="exit"
					viewport={{ amount: 0.3, once: false }}>
					<motion.div variants={cardVariants}>
						<SkillCard
							skillName="Programming Language"
							skillSet={["Java", "JavaScript", "Python"]}
							className={lato.className}
						/>
					</motion.div>
					<motion.div variants={cardVariants}>
						<SkillCard
							skillName="Web Development"
							skillSet={["React.js", "TailwindCSS", "SpringBoot"]}
							className={lato.className}
						/>
					</motion.div>
					<motion.div variants={cardVariants}>
						<SkillCard
							skillName="Database"
							skillSet={["PostgreSql", "MongoDb"]}
							className={lato.className}
						/>
					</motion.div>
					<motion.div variants={cardVariants}>
						<SkillCard
							skillName="DevOps"
							skillSet={["Docker", "Git", "Github"]}
							className={lato.className}
						/>
					</motion.div>
					<motion.div variants={cardVariants}>
						<SkillCard
							skillName="Operating System"
							skillSet={["Windows", "Linux"]}
							className={lato.className}
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
