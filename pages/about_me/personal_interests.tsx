import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function PersonalInterests(props) {
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
				<a className={"text-3xl font-bold font-sans " + textColor}>
					Personal Interests
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/about_me/personal_interests">
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
						src="/assets/images/about/Running2.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						In my free time, I enjoy woodworking and making things for myself
						and friends with my CNC machine, 3D printer, and other tools. I love
						experimenting with different technologies, methods, and materials to
						create unique products.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						When I'm not making stuff, you'll find me running, cooking, reading,
						and playing frisbee, basketball, badminton, or Valorant.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						So far, I have run a half-marathon as well as a marathon (picture
						above).
					</a>
					<a className={"text-xl font-bold font-sans mt-4 " + textColor}>
						More information my woodworking and miscellaneous projects in my{" "}
						<Link href="/projects">Projects </Link> section!
					</a>
				</div>
			</div>
		</div>
	);
}

export default PersonalInterests;
