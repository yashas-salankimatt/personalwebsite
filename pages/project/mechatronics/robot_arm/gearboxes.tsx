import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";
import ModelViewer from "../../../../components/ModelViewer";

function gearboxes(props) {
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
					Creating a 3D Printed Gearbox for a Stepper Motor Actuator
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/mechatronics/robot_arm/gearboxes">
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
						src="/assets/images/projects/mechatronics/robot_arm/nema17gearbox.png"
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
							"/assets/images/projects/mechatronics/robot_arm/nema17gearbox.obj"
						}
						maxDistance={0.2}
						autoRotateSpeed={0.75}
						position={[0, 0, 0]}
					></ModelViewer>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						After creating the first three axes of my very first attempt at a
						robot arm using sequential gearing, I realized that this method was
						not going to create a professional robot arm and it was also
						infeasible to design different gears and differential models for
						each of the joints that I wanted to implement. As such, I went about
						trying to design a 3D printed gearbox with a 20:1 reduction that
						would have as little backash as possible, be backdrivable, and be
						able to be used with a wide variety of motors.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						In this process, I ended up prototyping many different types of
						gearboxes, from traditional gearboxes with straight and bevel gears
						in sequences, to 3D printed planetary gearboxes, and strain wave
						gearboxes. The problem that I came across with all of these methods
						was that they all depended on 3D printed gear teeth to transmit the
						torque from the motor to the output. With a 20:1 reduction, it was
						not entirely possible keep the gearbox strong as well as small.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						In the end, I landed on trying to make a cycloidal gearbox with a
						20:1 reduction that was extremely versatile with a lot of mount
						points and a shaft that could adapt to many motors. The picture and
						models above are of the gearbox on top of a NEMA 17 motor. I then
						used this gearbox with other motors in order to create my first 7
						axis robot arm that is both cheap as well as strong.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Below are some pictures of the finished gearbox as well as a demo of
						the temporary testing setup I used to test its performance and
						torque.
					</a>
				</div>
				<iframe
					src="https://www.youtube.com/embed/0ySzS__5j8w?rel=0"
					height={360}
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<a className={"text-xl font-normal font-sans my-4 " + textColor}>
					Gearbox Torque Testing with a NEMA23 Motor
				</a>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/robot_arm/nema17gearbox.png"
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
						src="/assets/images/projects/mechatronics/robot_arm/Gearbox1.jpg"
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
						src="/assets/images/projects/mechatronics/robot_arm/Gearbox2.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Below are just some of the many test prints of all the various
						gearboxes and gearbox iterations I created and tested.
					</a>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/robot_arm/GearboxTest1.jpg"
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
						src="/assets/images/projects/mechatronics/robot_arm/GearboxTest2.jpg"
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
						src="/assets/images/projects/mechatronics/robot_arm/GearboxTest3.jpg"
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
						src="/assets/images/projects/mechatronics/robot_arm/GearboxTest4.jpg"
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

export default gearboxes;
