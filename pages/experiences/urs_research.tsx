import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function urs_research(props) {
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
					<Link href="/experiences/urs_research">
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
						src="/assets/images/projects/software/urs/mappingdemo.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						From August 2021 to current.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Creating a system to localize a robotic system based on landmarks,
						filtering our everyday changes to indoor environments.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Programming a model to update pre-existing indoor maps with new data
						on changes to indoor environments such as doors or furniture moving.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Implementing the above systems on a physical robot with LIDAR and an
						RGB-D camera, making use of ROS and the Gazebo simulator to quickly
						iterate on the SLAM models and algorithms.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						This research is done as a part of the Undergraduate Research
						Scholars program as well as for senior capstone.
					</a>
					<Link href="https://launch.tamu.edu/Undergraduate-Research/URS">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							URS Website
						</a>
					</Link>
					<Link href="/project/software/urs/urs_403">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Link to More Info About My Work
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default urs_research;
