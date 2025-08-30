type ContactProps = {
	title: string;
	image: string;
	content: any;
};

import Image from "next/image";

export default function ContactCard({ title, image, content }: ContactProps) {
	return (
		<div className="flex flex-row w-full gap-3 rounded-[20] p-3 border-2 border-solid border-red-200">
			<div className="flex flex-row relative h-[100] w-[100]">
				<Image
					src={image || "https://dummyimage.com/600x400/000/fff"}
					alt={title}
					fill={true}
					loading="lazy"
					className="rounded-lg"
				/>
			</div>
			<div className="flex flex-col justify-center gap-3 text-left">
				<h3 className="font-semibold">{title}</h3>
				<div>{content}</div>
			</div>
		</div>
	);
}
