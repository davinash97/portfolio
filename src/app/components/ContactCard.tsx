type ContactProps = {
	title: string;
	image: string;
	content: React.ReactNode;
};

import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export default function ContactCard({ title, image, content }: ContactProps) {
	return (
		<div className="flex flex-row w-full gap-4 rounded-xl p-4 border-2 border-solid border-red-200 items-center">
			{/* Image */}
			<div className="relative h-[80px] w-[80px] flex-shrink-0">
				<Image
					src={image || "https://dummyimage.com/600x400/000/fff"}
					alt={title}
					fill
					loading="lazy"
					className="rounded-lg object-cover"
				/>
			</div>

			{/* Content */}
			<div className="flex flex-col justify-center text-left min-w-0">
				<h3 className="font-semibold">{title}</h3>
				<div className={`break-words text-sm ${lato.className}`}>
					{content}
				</div>
			</div>
		</div>
	);
}
