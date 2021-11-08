import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function survivor_buddy(props) {
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
					Undergraduate Researcher with Dr. Robin R. Murphy working on the
					Survivor Buddy project
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/experiences/survivor_buddy">
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
						Worked from August 2021 to current.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Working with the Raytheon Professor Dr. Robin R. Murphy on the NSF
						and Microsoft Research backed Survivor Buddy project.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Designing new iterations of the Survivor Buddy hardware and
						electronics for disaster relief.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Developing a moving and environment mapping platform for Survivor
						Buddy base for telemedicine use.
					</a>
					<Link href="https://survivorbuddy.org/">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Survivor Buddy Website
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default survivor_buddy;
