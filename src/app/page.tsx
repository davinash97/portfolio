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
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@400..700&family=Playwrite+US+Trad&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
			</style>
			<main className="flex flex-col gap-5 text-center items-center justify-center p-0 m-0 playwrite-us-trad-200">
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
