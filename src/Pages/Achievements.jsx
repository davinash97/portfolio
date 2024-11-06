import "../Styles/Achievements.css";
import { achievementsCard as Card } from "../Components/card";
import React from "react";

export default function Achievements() {
	return (
		<section className="flex flex-col py-20 justify-between gap-10 px-10 text-center w-screen">
			<h2>Achievements</h2>
			<Card title="PHP" text="Completed 2 months Internship" />
			<Card
				title="Java"
				text="Scored 71% in Programming in Java NPTEL (IIT-KGP)"
			/>
			<Card
				title="Great Learning"
				text="Certificate in completion of Collections in Java"
			/>
			<Card title="MS-Office" text="Completed Vocational Training" />
			<Card
				title="HackerRank"
				text="Certified [Software Engineer Intern and Java (Basic)]"
			/>
			<Card
				title="Leetcode"
				text="Solved 300+ Questions and a total streak of 200+ days."
			/>
			<Card
				title="Duolingo"
				text="Learning German (Early A1 CEFR Proficiency)"
			/>
		</section>
	);
}
