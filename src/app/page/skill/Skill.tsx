import SkillCard from "@/app/components/SkillCard";

export default function Skill() {
	return (
		<section className="justify-center">
			<div className="flex flex-col justify-evenly gap-5">
				<h2 className="text-4xl">Skills</h2>
				<div className="grid grid-cols-3 justify-evenly gap-3">
					<SkillCard
						skillName="Programming Language"
						skillSet={["Java", "JavaScript", "Python"]}
					/>
					<SkillCard
						skillName="Web Development"
						skillSet={["React.js", "TailwindCSS", "SpringBoot"]}
					/>
					<SkillCard
						skillName="Database"
						skillSet={["PostgreSql", "MongoDb"]}
					/>
					<SkillCard
						skillName="DevOps"
						skillSet={["Docker", "Git", "Github"]}
					/>
					<SkillCard
						skillName="Operating System"
						skillSet={["Windows", "Linux"]}
					/>
				</div>
			</div>
		</section>
	);
}
