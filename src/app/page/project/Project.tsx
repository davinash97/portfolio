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
			<div className="max-w-screen-xl grid justify-between items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
				<ProjectCard
					name="Global Buzz"
					image="https://dummyimage.com/600x400/000/fff"
					detail={[
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
						"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
						"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
					]}
				/>
				<ProjectCard
					name="Password Generator"
					image="https://dummyimage.com/600x400/000/fff"
					detail={[
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
						"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
						"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
					]}
				/>
			</div>
		</section>
	);
}
