import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function fab_box_build(props) {
	const router = useRouter();
	const rgbaColor = "rgba(76, 29, 149, .6)";
	const textColor = "text-purple-900";
	const buttonColor = "bg-purple-200";

	const imageDivStyle = "1rem 1rem 0.25rem " + rgbaColor;

	return (
		<div style={{ overflow: "auto" }} className="flex flex-col max-h-full">
			{router.pathname != "/projects" &&
				router.pathname != "/about" &&
				router.pathname != "/experience" && <Menu></Menu>}
			<div className="flex flex-col items-center max-w-full p-8">
				<a className={"text-3xl font-bold font-sans " + textColor}>
					Hackathon Project to Build a New Type of 3D Printer
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/machinery/fab_box/fab_box_build">
						<a
							target="_blank"
							className={
								"mt-4 text-lg font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Click to open project page in new tab
						</a>
					</Link>
				)}
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/machinery/fab_box/1.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<Link href="https://www.youtube.com/watch?v=bTZy8Rkpglo">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Devpost YouTube Submission
						</a>
					</Link>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						During a hackathon, I decided to try to build a new type of 3D
						printer- one that was rigid enough to be properly used as a CNC
						machine, but could also be used as a 3D printer, all for a
						reasonable cost.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						This involved rethinking the kinematics of the machine. Instead of
						moving the Y axis independently and having the X axis gantry ride on
						the Z axis, like most 3D printers or having the Z axis, which rides
						on the Y axis, which rides on the X axis like a lot of CNC routers,
						I decided to have the bed be stationary, like a CNC machine, and
						have the Z axis attached to the X axis and then the Y axis attached
						to the Z axis pillars that move the entire Y axis assembly up and
						down.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						This was the result, as can be seen from the photos and video below.
						This hackathon project won MLH’s best hardware hack at Rowdyhack and
						more information can be found at the Devpost project website, which
						can be at the link below.
					</a>
					<Link href="https://devpost.com/software/the-maker-box">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Devpost Submission Link
						</a>
					</Link>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/machinery/fab_box/2.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/machinery/fab_box/3.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/machinery/fab_box/4.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/machinery/fab_box/5.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/machinery/fab_box/6.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
			</div>
		</div>
	);
}

export default fab_box_build;
