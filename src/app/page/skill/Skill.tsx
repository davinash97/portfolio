import SkillCard from "@/app/components/SkillCard";

export default function Skill() {
	return (
		<section className="justify-center">
			<div className="flex flex-col justify-evenly gap-5">
				<h2 className="text-4xl">Skills</h2>
				<div className="grid grid-cols-3 justify-evenly gap-3">
					<SkillCard skillName="Programming Language" />
					<SkillCard skillName="Web Development" />
					<SkillCard skillName="Database" />
					<SkillCard skillName="DevOps" />
					<SkillCard skillName="Operating System" />
				</div>
			</div>
		</section>
	);
}
