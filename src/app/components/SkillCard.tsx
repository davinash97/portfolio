type SkillCardProps = {
	skillName: string;
	skillSet: string[];
};

export default function SkillCard({ skillName, skillSet }: SkillCardProps) {
	return (
		<>
			<style>{`
		.skillCard:hover {
		  cursor: pointer;
		  box-shadow: 0 0 10px black;
		  transition: box-shadow 100ms;
		}
	  `}</style>

			<div
				className="skillCard not-last:flex flex-col text-left p-5"
				style={{
					border: "2px solid black",
					borderRadius: "10px",
				}}>
				<h3 className="text-xl">{skillName}</h3>
				<div className="m-3">
					<ol className="list-disc list-inside">
						{skillSet.map((skills, index) => (
							<li key={index}>{skills}</li>
						))}
					</ol>
				</div>
			</div>
		</>
	);
}
