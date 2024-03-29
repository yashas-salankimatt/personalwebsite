import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function EngineeringInterests(props) {
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
				<a className={"text-3xl font-bold font-sans " + textColor}>
					Engineering Interests
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/about_me/engineering_interests">
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
						I'm currently primarily interested in{" "}
						<strong>robotics and robotics research,</strong> involving both the
						algorithmic side (path planning, ML, SLAM and other mapping) as well
						as the hardware design of robot systems. I also am interested in and
						develop my <strong>web-dev and software engineering skills</strong>{" "}
						as well.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Under <strong>Dr. Robin R. Murphy,</strong> I worked on improving
						the hardware for <strong>Survivor Buddy,</strong> an interactive
						platform for companionship for trapped disaster victims.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Under <strong>Professor Stavros Kalafatis,</strong> I implemented a
						system that will revise indoor map data in real time given there
						were changes to the environment since the robot had last mapped it.
						This allows for the most up to data data of indoor systems for cheap
						robotic systems using inexpensive sensors.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Through the <strong>Engineering Incubator program</strong>, I
						developed a low-cost 7-axis robotic arm based on stepper motors and
						hybrid cycloidal gearboxes that uses computer vision and probe
						points to automate part inspection for small scale job shops.
					</a>
					<a className={"text-xl font-bold font-sans mt-4 " + textColor}>
						More information about these and other projects and experiences in
						my <Link href="/projects">Projects </Link>
						and <Link href="/experience">Experience </Link> sections
						respectively!
					</a>
				</div>
			</div>
		</div>
	);
}

export default EngineeringInterests;
