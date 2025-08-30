"use client";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import Education from "./page/education/Education";
import Experience from "./page/experience/Experience";
import Hero from "./page/hero/Hero";
import Project from "./page/project/Project";
import Skill from "./page/skill/Skill";

export default function Home() {
	return (
		<>
			<main className="flex flex-col gap-5 text-center items-center justify-center p-0 m-0">
				<Hero />
				<About />
				<Skill />
				<Project />
				<Experience />
				<Education />
				<Contact />
			</main>
		</>
	);
}
