import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";
import Image from "next/image";

function final_proj_315(props) {
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
					Music Editing and Recommendations API Project
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/software/class_projects/315_final_proj">
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
				{/* <div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<Image
						src={
							"/assets/images/projects/software/class_projects/315_final_project/home.PNG"
						}
						layout="fill"
						alt="main photo"
						className="rounded-2xl"
					></Image>
				</div> */}
				<Link href="https://github.com/yashas-salankimatt/315_final_project">
					<a
						target="_blank"
						className={
							"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
							buttonColor +
							" " +
							textColor
						}
					>
						GitHub Repo for this Project
					</a>
				</Link>
				<Link href="https://drive.google.com/file/d/1-HT4pH05TQ2HJ_rKoAkodA8VkKTF4iWk/view?usp=sharing">
					<a
						target="_blank"
						className={
							"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
							buttonColor +
							" " +
							textColor
						}
					>
						Link to demo video
					</a>
				</Link>
				<Link href="https://github.com/yashas-salankimatt/315_final_project/blob/main/Final%20Presentation.pdf">
					<a
						target="_blank"
						className={
							"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
							buttonColor +
							" " +
							textColor
						}
					>
						Link to final presentation PDF
					</a>
				</Link>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						This is the work done for my group final project for my programming
						studio class at Texas A&M University. The group members for this
						project include: me, Jackson West, Ryan Deloney, and Khoi Dao.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						For this final project, each team was tasked with creating a
						software application that would use APIs to develop a piece of
						software that would help ceratin group of people or solve a real
						problem. We were also tasked to use the Agile software development
						methodology while developing this project.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Our team decided to go with a music editing and recommendation
						software since we had a shared passion for music. This application
						would allow a user, like a DJ, to upload their music files, and then
						be able to quickly cut the song as well as seeing the lyrics for the
						song and seeing what other songs would go well with a chosen song
						set.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						We therefore implemented the following APIs: Lyrics.Ovh, Songsterr,
						TasteDive, and JavaSound. I was responsible primarily for the
						JavaSound implementation as well as the song uploading and helped
						with various other features on the website.
					</a>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/software/class_projects/315_final_project/home.PNG"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				{/* <div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/software/class_projects/315_final_project/MusworksUpload.png"
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
						src="/assets/images/projects/software/class_projects/315_final_project/MusworksEdit.png"
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
						src="/assets/images/projects/software/class_projects/315_final_project/MusworksLyrics.png"
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
						src="/assets/images/projects/software/class_projects/315_final_project/MusworksRecommendations1.png"
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
						src="/assets/images/projects/software/class_projects/315_final_project/MusworksRecommendations2.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div> */}
			</div>
		</div>
	);
}

export default final_proj_315;
