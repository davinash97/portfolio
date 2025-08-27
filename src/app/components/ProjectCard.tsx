import Image from "next/image";

type ProjectCardProps = {
	name: string;
	image: string;
	detail: string[];
};

export default function ProjectCard({ name, image, detail }: ProjectCardProps) {
	return (
		<div className="flex flex-col gap-2 w-fit items-center">
			<div className="relative flex flex-col h-[200] w-[300]">
				<Image
					src={image || "https://dummyimage.com/600x400/000/fff"}
					alt={`image of ${name || "dummy project"}`}
					fill={true}
					loading="lazy"
					draggable="false"
					className="select-none"
				/>
				<h2
					className="absolute font-bold text-lg z-10 w-full bottom-1"
					style={{ color: "white" }}>
					{name || "This is a dummy project name"}
				</h2>
			</div>
			<div className="w-[400]">
				<ol className="list-decimal list-inside flex flex-col gap-5">
					{detail.map((project, index) => (
						<li key={index} className="text-justify">
							{project}
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}
