import "../Styles/Skills.css";
import React from "react";

const frame = (props) => {
	return (
		<div className="frameBox" style={props.parentStyle}>
			<img
				src={props.imgSrc}
				alt={props.title}
				draggable="false"
				className={props.class}
				style={props.childStyle}
			/>
			<div className="title">{props.title}</div>
			<div className="description">{props.description}</div>
		</div>
	);
};

const projectFrame = (props) => {
	return (
		<div className="projectFrame p-4 flex flex-col gap-3">
			<h3 className="text-center" style={{ fontSize: "2rem" }}>
				{props.title}
			</h3>
			<div className="flex flex-row content-center justify-center w-auto gap-5">
				<p>{props.paragraph}</p>
				<a href={props.link} target="_blank" rel="noreferrer">
					<img
						src={props.imgSrc}
						alt={props.title}
						draggable="false"
					/>
				</a>
			</div>
		</div>
	);
};

const osFrame = (props) => {
	return (
		<div className="OsContainer">
			<div className="title">{props.title}</div>
			<img
				style={{ minWidth: "80px" }}
				src={props.link}
				alt={props.title}
				draggable="false"
			/>
		</div>
	);
};

export { projectFrame, frame, osFrame };
