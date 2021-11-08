import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function Skills(props) {
	const router = useRouter();
	const rgbaColor = "rgba(127, 29, 29, .6)";
	const textColor = "text-red-900";
	const buttonColor = "bg-red-200";

	const imageDivStyle = "1rem 1rem 0.25rem " + rgbaColor;

	return (
		<div style={{ overflow: "auto" }} className="flex flex-col max-h-full">
			{router.pathname != "/projects" &&
				router.pathname != "/about" &&
				router.pathname != "/experience" && <Menu></Menu>}
			<div className="flex flex-col items-center max-w-full p-8">
				<a className={"text-3xl font-bold font-sans " + textColor}>Skills</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/about_me/skills">
						<a
							target="_blank"
							className={
								"mt-4 text-lg font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Click to open page in new tab
						</a>
					</Link>
				)}
				{/* <div
					className="max-w-sm mt-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/about/tamu-logo.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div> */}
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						<strong>Hardware Skills and Technologies: </strong> CAD Modeling,
						Finite Element Analysis, CNC Machining, 3D Printing, ROS (Robot
						Operating System), Mapping and Localization Systems, TensorFlow,
						Microcontroller Design, Integrated, and General Circuit Design and
						Analysis
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						<strong>Software Skills and Technologies: </strong> C++, Javascript,
						Typescript, HTML/CSS, Tailwind, React, React Native, Python(smart
						home/IOT Script Writing, ML), Java (Processing, Android Studio),
						Firebase, Git
					</a>
					<a className={"text-xl font-bold font-sans mt-4 " + textColor}>
						Check out where I demonstrate my skills in my{" "}
						<Link href="/projects">Projects </Link> section!
					</a>
				</div>
			</div>
		</div>
	);
}

export default Skills;
