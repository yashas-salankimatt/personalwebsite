import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function PersonalWebsite(props) {
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
					Personal Website Built Using React, Typscript, Next, Tailwind, and
					Framer Motion
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/software/web/PersonalWebsite">
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
						src="/assets/images/projects/software/web/WebsiteHome.PNG"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<Link href="https://github.com/yashas-salankimatt/personalwebsite">
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
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						This website was a personal desire of mine for a while. Previously,
						I had been using a website that I had made using Wordpress hosting
						and Wordpress tools. As such, I felt that I never really had any
						control over the styling of the website and I also didn't like how
						much scrolling was required to traverse all the projects.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						As a solution, I decided to make this website using React.js,
						Typescript, Next.js, Tailwind CSS, and using Framer Motion for
						animations.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						On this website, I was able to style my website more in line with my
						vision and I was also able to create a file directory type component
						that allows for very easy traversal of all of my projects since they
						are so varied. This can be seen in the Projects section. The About
						Me and Experience sections also follow similar styles, but with only
						1 top level directry.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I think this design and way of traversing projects and qualities is
						unique and exemplifies me. The vast majority of this website was
						made over the course of a weekend, with a few tweaks to styling and
						content additions afterwards.
					</a>
				</div>
			</div>
		</div>
	);
}

export default PersonalWebsite;
