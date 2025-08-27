import Card from "@/app/components/Card";

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
			<div className="w-fit flex flex-row justify-between gap-10">
				<Card
					title="Catalog Associate"
					organization="Amazon Development Center"
					duration="Jan 2025 - Present"
					detail={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
				/>
				<Card
					title="Web Developer Intern"
					organization="Rungta Infotech pvt ltd"
					duration="Feb 2024 - April 2024"
					detail={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
				/>
			</div>
		</section>
	);
}
