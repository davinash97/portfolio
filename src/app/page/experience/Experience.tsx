import ProjectCard from "@/app/components/ProjectCard";

export default function Experience() {
	return (
		<section className="flex flex-col w-screen text-center items-center p-10 gap-10">
			<h2 className="text-4xl">
				{/* Experience */}
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
			<div>
				<ProjectCard
					projectName=""
					projectImage=""
					projectDetails={["1", "2"]}
				/>
			</div>
		</section>
	);
}
