import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function School(props) {
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
				<a className={"text-3xl font-bold font-sans " + textColor}>School</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/about_me/school">
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
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Howdy, my name is Yashas Salankimatt and I am an honors senior
						computer engineering: electrical engineering track student at Texas
						A&M University.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I am also a Brockman Scholar and am graduating with my bachelor's
						degree in 3 years, with plans to finish a fast track masters in EE
						in one more year after that under Dr. Robin R. Murphy.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Currently, I am a part of 2 main student organizations here on
						campus.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						The first is TAMUhack. TAMUhack is the organization that is in
						charge of holding two of the software-primary hackathons here on
						campus and is also responsible for hosting the biggest hackathon in
						Texas. In this team, I am the primary hardware director, and also
						take care of logistics as well as hacker experience for the events.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						The second is the Engineering Incubator. This is a business
						incubator that is hosted in the engineering school that focuses on
						teaching engineering students the primary tenets of entrepreneurship
						through helping them launch their own startups. Through this
						incubator, I am currently working on a startup to automate part
						inspection for smaller machine shops with the use of a custom
						robotic arm in conjunction with CV and a custom probe tool.
					</a>
					<a className={"text-xl font-bold font-sans mt-4 " + textColor}>
						More information about these and other research projects and
						organizations I have been a part of can be found in my{" "}
						<Link href="/experience">Experience </Link>
						section!
					</a>
				</div>
			</div>
		</div>
	);
}

export default School;
