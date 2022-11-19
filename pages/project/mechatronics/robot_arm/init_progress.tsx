import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function init_progress(props) {
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
					Initial Prototype Progress on My Robotic Arm Shoulder
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/mechatronics/robot_arm/init_progress">
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
						src="/assets/images/projects/mechatronics/robot_arm/init_1.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<Link href="https://www.youtube.com/watch?v=pr41tXtrE4A">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Project Demonstration: YouTube
						</a>
					</Link>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I’ve always thought that robotics should be accessible to a
						significantly larger audience seeing as how it’s going to be a large
						part of our future. While looking for ways that I could get access
						to robotics, more specifically a robotic arm, I found that many of
						these machines were extremely expensive and while they have a great
						degree of precision that is great for industrial work, I wanted a
						robot that could be inexpensive to build while also providing
						similar levels of torque as some of the industry standard robot
						arms. I got started on the design and so far have finished axes 1,
						2, and 3, modeling the reductions to exceed the torque of the
						Universal Robots’ UR3 robot. Below is my progress so far.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						The first axis uses a planetary gear reduction of around 15:1, and
						the subsequent two axes that I have completed use a differential
						system to control the final output platform. Each of the motors
						involved in the differential are subjected to a reduction ratio of
						12:1 with the gears that you see on the left and right sides of the
						differential and the bevel gear has a reduction of 1.5:1 and since
						both of the motors provide torque to the output platform, I am able
						to get a theoretical torque of around 96 Nm from this joint.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						My next plans are to model axes 4 and 5 as one differential and axes
						6 and 7 as another differential so that I get the maximum torque
						from each motor. While this method certainly has its drawbacks in
						terms of backlash and repeatability, I plan to address this in the
						future with some closed loop IMU control of the finished robotic arm
						and that should get me to where I would want to be.
					</a>
				</div>
			</div>
		</div>
	);
}

export default init_progress;
