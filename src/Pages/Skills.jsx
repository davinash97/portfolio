import React from "react";
import { frame as Frame, osFrame as OS } from "../Components/frame.jsx";
import { getImageUrl } from "../utils/ImgIndex.jsx";

export default function Skills() {
	return (
		<section className="flex flex-col gap-5">
			<h2 className="text-center py-10">Skills</h2>
			<div className="flex flex-col justify-around">
				<div>
					<h3 className="text-center">Languages</h3>
					<div className="text-center py-10">
						(I am comfortable with)
					</div>
					<div className="w-screen px-10 flex flex-col justify-between gap-10">
						<Frame
							imgSrc={getImageUrl("javascript")}
							title="JavaScript"
						/>
						<Frame
							imgSrc={getImageUrl("java")}
							title="Java-8"
							description="[ Collection, Multithreading, etc ]"
						/>
					</div>
				</div>
				<div>
					<h3 className="text-center py-20">Tools & Frameworks:</h3>
					<div className="w-screen px-10 flex flex-col justify-between gap-10">
						<Frame imgSrc={getImageUrl("git")} title="Git" />
						<Frame imgSrc={getImageUrl("figma")} title="figma" />
						<Frame imgSrc={getImageUrl("github")} title="github" />
						<Frame
							imgSrc={getImageUrl("msoffice")}
							title="MS-Office"
							childStyle={{ padding: "20px" }}
						/>
						<Frame
							imgSrc={getImageUrl("code")}
							title="Visual Studio Code"
						/>
						<Frame
							imgSrc={getImageUrl("react")}
							title="React JS"
							parentStyle={{ padding: "35px", gap: "10px" }}
							class="logo"
						/>
						<Frame
							imgSrc={getImageUrl("tailwindcss")}
							title="Tailwind CSS"
							childStyle={{ width: "250px" }}
							parentStyle={{ gap: "10px", padding: "30px" }}
						/>
						<Frame
							imgSrc={getImageUrl("spring", "webp")}
							title="Spring Boot"
							childStyle={{ width: "250px" }}
							parentStyle={{ gap: "10px", padding: "30px" }}
						/>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-10 py-20">
					<h3 className="text-center">Operating System:</h3>
					<div className="w-screen px-10 flex flex-col justify-between gap-10">
						<OS title="Windows" link={getImageUrl("win11")} />
						<OS title="Linux" link={getImageUrl("arch")} />
					</div>
				</div>
			</div>
		</section>
	);
}
