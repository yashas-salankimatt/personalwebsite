import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function nlp_cesg(props) {
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
					Undergraduate Student Research Assistant at the Computer Engineering
					Systems Group
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/experiences/nlp_cesg">
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
						Worked from August 2019 to April 2020.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Worked with PhD student and entrepreneur Andrew Miller and Professor
						Stavros Kalafatis on the integration of natural language processing
						models in virtual reality environments.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Developed a VR environment for integration of NLP for human-computer
						interface comparisons.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Created methods to quantify success of NLP tests in VR, a problem
						that is qualitative in nature.
					</a>
					<Link href="https://cesg.tamu.edu/faculty/stavros-kalafatis/">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							CESG Website
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default nlp_cesg;
