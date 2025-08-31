import { Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({ weight: "400", subsets: ["latin"] });

type ProjectCardProps = {
	name: string;
	image: string;
	detail: string[];
	className?: string;
};

export default function ProjectCard({
	name,
	image,
	detail,
	className,
}: ProjectCardProps) {
	return (
		<div
			className={`flex flex-col gap-2 w-full max-w-md items-center ${
				className || ""
			}`}>
			<div className="relative flex flex-col h-[200px] w-[300px]">
				<Image
					src={image || "https://dummyimage.com/600x400/000/fff"}
					alt={`image of ${name || "dummy project"}`}
					fill={true}
					loading="lazy"
					draggable="false"
					className="select-none object-cover rounded-md"
				/>
				<h2 className="absolute font-bold text-lg z-10 w-full bottom-1 text-center text-white">
					{name || "This is a dummy project name"}
				</h2>
			</div>
			<div className={`w-full max-w-sm ${lato.className}`}>
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
