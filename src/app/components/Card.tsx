type Props = {
	title: string;
	organization: string;
	duration: string;
	detail: string;
};

export default function Card({ title, organization, duration, detail }: Props) {
	return (
		<div className="w-[500] flex flex-col gap-5">
			<h2 className="text-2xl text-left">{title}</h2>
			<div className="flex flex-col gap-2">
				<div className="min-w-auto flex flex-row justify-between p-0 m-0">
					<div className="text-left">{organization}</div>
					<div className="text-right">{`(${duration})`}</div>
				</div>
				<p className="text-justify">{detail}</p>
			</div>
		</div>
	);
}
