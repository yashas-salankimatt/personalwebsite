import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";
import ModelViewer from "../../../../components/ModelViewer";

function cnc_v1_build(props) {
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
					Creating a Small CNC Router to Mill Wood, Aluminum, and Plastic
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/machinery/cnc_v1/cnc_v1_build">
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
				<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
					Rotate and pan around the 3D model for this project below!
				</a>
				<div className="ModelViewer">
					<ModelViewer
						objectFilePath={
							"/assets/images/projects/machinery/cnc_v1/cncv1.obj"
						}
						rotation={[0, 0, 0]}
						positionOffset={[0.14, 0, 0.216]}
						maxDistance={0.5}
						autoRotateSpeed={0.75}
					></ModelViewer>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/machinery/cnc_v1/1.jpeg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						While the project that I had made for TAMUmake 2020 was great, I
						can’t do much with a Braille printer anymore, so I decided that it
						would be a great addition to my maker tools if I were to have a CNC
						to mill parts out of wood and aluminum. Below is a picture of
						version 1 of my machine and a 3D model for a significantly changed
						and more rigid version that I am working on putting together.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						The main focus with this build is to be able to cut aluminum with
						mostly parts that I had around me, keeping the cost as low as
						possible. This meant using NEMA 17 motors to drive it, 3D printing
						couplers, using standard 8MM rods and lead screws. The most
						significant compromise however, is using a Dremel as the spindle,
						but when proper CNC spindles are upwards of $100, I realized that I
						would use the Dremel as the spindle for the first couple of versions
						until I found that it was not suited to the task anymore.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Initially I built the first version with just the linear rail as the
						guide and lead screws as the drive mechanism but I quickly realized
						that without anything else supporting the X axis, there would be way
						too much deflection to lead to good surface finishes.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Thus in the second version, I added smooth 8 mm rods along with
						linear bearings on the X and Y axes and made a slew of other
						rigidity improvements. With this done, I’m quite happy with the cut
						quality. The picture of this version as well as some cuts can be
						found below. Now, I can make parts quickly and cheaply for my robot
						arm and other projects out of wood, acrylic, and aluminum.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Some of the things that I have cut using these can be seen in the
						Projects section under Woodworking/Decorations!
					</a>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/machinery/cnc_v1/1.jpeg"
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
						src="/assets/images/projects/machinery/cnc_v1/2.png"
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
						src="/assets/images/projects/machinery/cnc_v1/3.png"
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
						src="/assets/images/projects/machinery/cnc_v1/4.jpg"
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
						src="/assets/images/projects/machinery/cnc_v1/5.jpg"
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
						src="/assets/images/projects/machinery/cnc_v1/6.jpg"
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

export default cnc_v1_build;
