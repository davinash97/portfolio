import Card from "@/app/components/Card";

export default function Education() {
	return (
		<section className="flex flex-col w-screen text-center items-center p-10 gap-10">
			{/* Education */}
			<h2 className="text-4xl">
				<span>E</span>
				<span>d</span>
				<span>u</span>
				<span>c</span>
				<span>a</span>
				<span>t</span>
				<span>i</span>
				<span>o</span>
				<span>n</span>
			</h2>
			<div className="w-fit flex flex-row justify-between gap-10">
				<Card
					title={
						"Bachelors in Computer Science Engineering (Lateral)"
					}
					organization={
						"Rungta College of Engineering & Technology, Bhilai - Chhattisgarh"
					}
					duration={"2021-2024"}
					detail={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						It has survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
						software like Aldus PageMaker including versions of Lorem Ipsum.`}
				/>
				<Card
					title={"Diploma in Electrical Engineering (Lateral)"}
					organization={
						"Rungta College of Engineering & Technology, Bhilai - Chhattisgarh"
					}
					duration={"2021-2024"}
					detail={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						It has survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
						software like Aldus PageMaker including versions of Lorem Ipsum.`}
				/>
			</div>
		</section>
	);
}
