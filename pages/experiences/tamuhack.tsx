import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function tamuhack(props) {
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
					TAMUhack Hardware and Logistics Director
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/experiences/tamuhack">
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
					className="max-w-lg mt-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/TAMUhack22.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						From Mar 2020 to April 2022.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Recruited sponsorships and maintained sponsor relations for our
						hackathons, HowdyHack and TAMUhack.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Organized logistics including prizes, venue, food, live streaming,
						scheduling, etc.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Occasionally create custom decorations like the one seen below.
					</a>
					<Link href="https://tamuhack.com/">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							TAMUhack Website
						</a>
					</Link>
				</div>
				<div
					className="max-w-lg mt-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/TAMUhackSign.jpg"
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

export default tamuhack;
