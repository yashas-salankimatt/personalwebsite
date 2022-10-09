import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";
import ModelViewer from "../../../../components/ModelViewer";

function first_completed_arm(props) {
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
					My First Completed Robot Arm
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/mechatronics/robot_arm/first_completed_arm">
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
						src="/assets/images/projects/mechatronics/robot_arm/Arm1.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
					Rotate and pan around the 3D model for this project below!
				</a>
				<div className="ModelViewer">
					<ModelViewer
						objectFilePath={
							"/assets/images/projects/mechatronics/robot_arm/RobotArm.obj"
						}
						maxDistance={1.5}
						autoRotateSpeed={0.75}
						positionOffset={[0.21, 0, 0.13]}
					></ModelViewer>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						This is the first completed version of my 3D printed 7-axis robot
						arm. The design specs of this project were to create an inexpensive
						7-axis robot arm that has a reach of at least 750mm and a payload
						capacity of at least 2 kg at full extension.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						The way I went about meeting these specifications is by first
						calculating the torque necessary at each of the joints to lift up 2
						kg at full extension. I then selected the respective size of stepper
						motors (since stepper motors are cheap) and then designed a 20:1 3D
						printed cycloidal gearbox that would work with all of my motors to
						multiply their torque by quite a bit. For each of the joints besides
						the base, I also combined the torque of two motors by using a
						differential system. I also made each of the joints hollow shafted
						so that cable management would be easier in the end. I also made a
						servo based parallel end effector to grab small objects easily for
						initial testing.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						There are many changes that I would implement in the next versions
						of the robot arm, such as IMU based backlash compensation and
						gravity compensation, a fully featured ROS interface, as well as
						smarter 3D printing and material choices for the shoulder joints
						since they bear the most load and are the most failure prone
						currently. However, I am quite happy with my progress so far!
					</a>
					<a className={"text-xl font-normal font-sans mt-4 mb-8 " + textColor}>
						Below are some demos of the robot arm, along with some photos of the
						arm at various angles.
					</a>
				</div>
				<iframe
					src="https://www.youtube.com/embed/R8w6lmD2OhM?rel=0"
					height={360}
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<a className={"text-xl font-normal font-sans my-4 " + textColor}>
					Short Demo of Robot Arm
				</a>
				<iframe
					src="https://www.youtube.com/embed/EC-g7LI56Ec?rel=0"
					height={360}
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<a className={"text-xl font-normal font-sans my-4 " + textColor}>
					Longer Demo of Robot arm
				</a>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/robot_arm/Arm1.jpg"
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
						src="/assets/images/projects/mechatronics/robot_arm/Arm2.jpg"
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
						src="/assets/images/projects/mechatronics/robot_arm/Arm3.jpg"
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

export default first_completed_arm;
