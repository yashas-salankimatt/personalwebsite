import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";
import ModelViewer from "../../../../components/ModelViewer";

function senior_year_final(props) {
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
					Survivor Buddy Second Semester Software and Electronics Development
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/mechatronics/survivor_buddy/senior_year_final">
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
				<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
					Rotate and pan around the 3D model for this project below!
				</a>
				<div className="ModelViewer">
					<ModelViewer
						objectFilePath={
							"/assets/images/projects/mechatronics/survivor_buddy/SurvivorBuddy.obj"
						}
						maxDistance={0.5}
						autoRotateSpeed={0.75}
						positionOffset={[0.09, 0, 0]}
					></ModelViewer>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/survivor_buddy/SBOverall.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I worked with the Raytheon Professor Dr. Robin R. Murphy on the NSF
						and Microsoft Research backed Survivor Buddy project. My involvement
						with this project is now complete and my work is detailed in my
						explanations below.
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
						While I was tasked with designing the new hardware for Survivor
						Buddy throughout this year, I had finished most of the development
						of the motion system last semester. This semester, I focused on
						polishing the design, improving the electronics, as well as writing
						some control code as well as some experimental face tracking code.
						The following two videos show close to the end result of my work on
						this project. I then detail more of the specifics of my work below
						the demos.
					</a>
					<iframe
						src="https://www.youtube.com/embed/zvSSzbAYg_I?rel=0"
						height={360}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
					<a className={"text-xl font-normal font-sans my-4 " + textColor}>
						Base movement demo above- manually controlled
					</a>
					<iframe
						src="https://www.youtube.com/embed/feYOtJn8_Bs?rel=0"
						height={360}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
					<a className={"text-xl font-normal font-sans my-4 " + textColor}>
						Face tracking and pose metching demo- it can be seen that Survivor
						Buddy is matching my face movements in the demo above. This is done
						with a Python script that sends GCode like commands to the Survivor
						Buddy after analyzing facial pose with the camera and OpenCV and
						matching the facial pose to the pose of the "face" or phone on the
						Survivor Buddy platform.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						For the electronics side, in order to clean up the system and make
						it easier to assemble and replicate, I designed and fabricated a
						custom PCB for this project that routed all the servo connections
						properly as well as integrating an Arduino Nano as the
						microcontroller instead of an Arduino Uno (like in the previous
						version). I also had to add a voltage regulator to the electronics
						system to give the servos the right voltage, which they weren't
						getting before. Below are some photos of the completed PCB, the PCB
						integrated into the electronics as well as the improvement that can
						be seen from the use of the PCB.
					</a>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/survivor_buddy/SBElectronics.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Above is the PCB integrated into the electronics box of the new
						Survivor Buddy.
					</a>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/survivor_buddy/SBElectronics-old.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Above is the old electronics, with an Arduino Uno and much more
						messy and unreliable wiring.
					</a>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Below are some various photos of the completed PCB as well as some
						pictures of the fabrication process on my homemade CNC.
					</a>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/survivor_buddy/PCB1.jpg"
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
						src="/assets/images/projects/mechatronics/survivor_buddy/PCB2.jpg"
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
						src="/assets/images/projects/mechatronics/survivor_buddy/PCB3.jpg"
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
						src="/assets/images/projects/mechatronics/survivor_buddy/PCB4.jpg"
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
						src="/assets/images/projects/mechatronics/survivor_buddy/PCB5.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Below is one of the first fails of trying to fabricate this PCB.
					</a>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/survivor_buddy/PCBFail.jpg"
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

export default senior_year_final;
