import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function survivor_buddy(props) {
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
					Survivor Buddy Hardware Development
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/mechatronics/survivor_buddy/hardware_dev">
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
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/survivor_buddy/SurvivorBuddy22.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I am working with the Raytheon Professor Dr. Robin R. Murphy on the
						NSF and Microsoft Research backed Survivor Buddy project.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						"The Survivor Buddy Project is a joint project between Texas A&M and
						Stanford developing a web-enabled search and rescue robot that can
						be retrofitted to any rescue robot (the Survivor Buddy “head”) while
						advancing our understanding of computers and robots as a social
						medium. It's not just what the Survivor Buddy transmits but how it
						does it that is important; to paraphrase Marshall McLuhan, the
						social medium is the message."- survivorbuddy.org. More info about
						the Survivor Buddy project can be found at the Survivor Buddy
						official website below.
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
							Survivor Buddy Official Website
						</a>
					</Link>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I was tasked with designing new iterations of the Survivor Buddy
						hardware and electronics for disaster relief. More specifically,
						with improving the hardware of the existing version of Survivor
						Buddy to improve its stability and make its movements more natural
						while still keeping the cost of the robot down.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						As such, I started by isolating the problem areas in the previous
						system. This mostly involved idenifying that each of the degrees of
						freedom of Survivor Buddy needed to be structurally supported by
						something other than the servo attachment point as the servo was
						taking load that it was not designed to handle properly. This meant
						that the heavier parts of the robot needed to be supported by
						bearings and the servos would simply provide the movement power and
						not support. This was done on axes one and two of the robot.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Then for axis 3, I fixed the mounting method as the previous group
						attached the servo to the structure with hot glue. I fixed this by
						adding mounting points for the axis 3 servo.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I was also inspired by a much earlier, more expensive version of
						Survivor Buddy with a neck axis to try and add this neck axis back
						as it provides more natural movements. The problem with this is that
						the addition of a neck axis in a similar implementation as the axis
						1 and 2 system would lead to a large increase of mass due to the
						large bearings that would be required.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						To solve this problem, I designed a 4th axis neck mechanism that
						would very simply attach to the 3rd axis and actuate the screen (a
						phone) through an RC plane aileron mechanism (as can be seen in the
						CAD model pictures below). This meant that no bearings were required
						and the system was plug and play. If heavier phones or screens need
						to be supported, this 4th axis can be removed due to its modularity.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Below are some photos relevant to the project and their
						descriptions.
					</a>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/survivor_buddy/SurvivorBuddy11.PNG"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Above is the previous version hardware for Survivor Buddy- created
						by a senior capstone team.
					</a>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/survivor_buddy/SurvivorBuddy21.PNG"
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
						src="/assets/images/projects/mechatronics/survivor_buddy/SurvivorBuddy22.PNG"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						The above 2 photos are the current iteration of the hardware for
						Survivor Buddy- designed, modeled, fabricated, assembled, and
						programmed by me. The photos below are of the CAD model for the
						current iteration of Survivor Buddy.
					</a>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/survivor_buddy/SurvivorBuddyCAD1.PNG"
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
						src="/assets/images/projects/mechatronics/survivor_buddy/SurvivorBuddyCAD2.PNG"
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

export default survivor_buddy;
