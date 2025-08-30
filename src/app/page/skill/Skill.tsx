import SkillCard from "@/app/components/SkillCard";

export default function Skill() {
	return (
		<section className="flex w-screen text-center items-center p-10 justify-center">
			<div className="flex flex-col justify-evenly gap-5">
				<h2 className="text-4xl">
					{/* Skills */}
					<span>S</span>
					<span>k</span>
					<span>i</span>
					<span>l</span>
					<span>l</span>
					<span>s</span>
				</h2>
				<div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-around gap-3">
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
