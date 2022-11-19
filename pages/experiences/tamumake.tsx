import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function tamumake(props) {
	const router = useRouter();
	const rgbaColor = "rgba(6, 78, 59, .6)";
	const textColor = "text-green-900";
	const buttonColor = "bg-green-200";

	const imageDivStyle = "1rem 1rem 0.25rem " + rgbaColor;

	return (
		<div style={{ overflow: "auto" }} className="flex flex-col max-h-full">
			{router.pathname != "/projects" &&
				router.pathname != "/about" &&
				router.pathname != "/experience" && <Menu></Menu>}
			<div className="flex flex-col items-center max-w-full p-8">
				<a className={"text-3xl font-bold font-sans " + textColor}>
					TAMUmake Hackathon Tech/Hardware Team Director
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/experiences/tamumake">
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
					className="max-w-lg mt-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/RingMilitaryWalk.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div> */}
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Worked from April 2020 to May 2021.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Assessed hacker needs, created hardware care packages for students
						for Texas A&M's only hardware hackathon.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Created hardware focused workshops and learning content for other
						students.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Set up and ran the event through an online environment, helping out
						hackers with hardware problems.
					</a>
					<Link href="https://www.tamumake.org/">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							TAMUmake Website
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default tamumake;
