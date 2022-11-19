import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function urs_403(props) {
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
					Creating a Software System to Localize, Map, and Remap Environments in
					spite of changes
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/software/urs/urs_403">
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

				<Link href="https://www.youtube.com/watch?v=qJp8XyhPQ_o">
					<a
						target="_blank"
						className={
							"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
							buttonColor +
							" " +
							textColor
						}
					>
						Mapping System Demo Video
					</a>
				</Link>
				<Link href="https://www.youtube.com/watch?v=Tg-mSti8fpk">
					<a
						target="_blank"
						className={
							"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
							buttonColor +
							" " +
							textColor
						}
					>
						Localization with Environment Changes Demo Video
					</a>
				</Link>
				<Link href="https://www.youtube.com/watch?v=2kdwm_7KHEs">
					<a
						target="_blank"
						className={
							"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
							buttonColor +
							" " +
							textColor
						}
					>
						Environment Remapping (Map Updating) System Demo Video
					</a>
				</Link>
				<Link href="https://github.com/yashas-salankimatt/URS-Project">
					<a
						target="_blank"
						className={
							"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
							buttonColor +
							" " +
							textColor
						}
					>
						Partial GitHub Repo for Project
					</a>
				</Link>
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
						URS Program Website
					</a>
				</Link>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						This is a research project done for the Undergraduate Research
						Scholars program at Texas A&M University. This project is also my
						senior capstone project for ECEN 403 and 404 at Texas A&M
						University.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						The problem trying to be solved here is that robots currently
						commonly have a relatively poor understanding and perception of
						small indoor spaces. They often can't remember the small changes to
						indoor environments like furniture moving as people use them and put
						them back in place or doors changing positions. To solve these
						problems currently many robotic systems employ static map generation
						and localization systems and then add obstacle avoidance systems on
						top of that to move through changed environments.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						In this project, I developed software systems to localize a small
						robotic agent in an indoor environment irrespective of small changes
						in the environment. The software system also revises the ground
						truth map with the environment changes, thus keeping the map up to
						date. These things were first done in simulation, using the Robot
						Operating System (ROS) and the Gazebo simulation software. The above
						specifications were the goal of the first semester's work.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						The goal after the simulation portion is complete is to implement
						the above systems in an actual robot, namely the Husarion ROSbot
						2.0, account for all of the imperfections and problems that come
						with implementing robotic systems and algorithms in the real world,
						and then to test the final robot and software system working
						together. I will then write my undergradute research scholar thesis
						on this.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						For demos of the progress that I have made, check the links at the
						top of the page. I cannot currently publicly post the other
						materials for this project due to the nature of the Undergraduate
						Research Scholars program and the fact that I am going to write a
						thesis about this. The GitHub link to some of my work is provided
						above however.
					</a>
				</div>
			</div>
		</div>
	);
}

export default urs_403;
