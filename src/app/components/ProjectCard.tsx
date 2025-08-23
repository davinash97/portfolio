import Image from "next/image";

type ProjectCardProps = {
	projectName: string;
	projectImage: string;
	projectDetails: string[];
};

export default function ProjectCard({
	projectName,
	projectImage,
	projectDetails,
}: ProjectCardProps) {
	return (
		<div className="flex flex-col gap-2 w-fit">
			<div className="relative flex flex-col h-[200] w-[300] ">
				<Image
					src={
						projectImage || "https://dummyimage.com/600x400/000/fff"
					}
					alt={`image of ${projectName || "dummy project"}`}
					fill={true}
					loading="lazy"
					draggable="false"
					className="select-none"
				/>
				<h2
					className="absolute font-bold text-lg z-10 w-full bottom-1"
					style={{ color: "white" }}>
					{projectName || "This is a dummy project name"}
				</h2>
			</div>
			<div>
				<ol className="list-decimal list-inside">
					{projectDetails.map((project, index) => (
						<li key={index}>{project}</li>
					))}
				</ol>
			</div>
		</div>
	);
}
