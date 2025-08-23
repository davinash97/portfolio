import ProjectCard from "@/app/components/ProjectCard";

export default function Project() {
	return (
		<section className="w-screen flex flex-col items-center justify-center gap-5">
			<h2 className="text-4xl">
				{/* Projects */}
				<span>P</span>
				<span>r</span>
				<span>o</span>
				<span>j</span>
				<span>e</span>
				<span>c</span>
				<span>t</span>
				<span>s</span>
			</h2>
			<div className="max-w-screen-xl grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
				<ProjectCard
					projectName="This is Project Name"
					projectImage="https://dummyimage.com/600x400/000/fff"
					projectDetails={["This is detail 1", "this is detail 2"]}
				/>
				<ProjectCard
					projectName="This is Project Name"
					projectImage="https://dummyimage.com/600x400/000/fff"
					projectDetails={["This is detail 1", "this is detail 2"]}
				/>
				<ProjectCard
					projectName="This is Project Name"
					projectImage="https://dummyimage.com/600x400/000/fff"
					projectDetails={["This is detail 1", "this is detail 2"]}
				/>
				<ProjectCard
					projectName="This is Project Name"
					projectImage="https://dummyimage.com/600x400/000/fff"
					projectDetails={["This is detail 1", "this is detail 2"]}
				/>
			</div>
		</section>
	);
}
