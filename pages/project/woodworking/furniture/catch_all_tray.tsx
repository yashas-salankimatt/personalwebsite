import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function catch_all_tray(props) {
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
					Making a CNC Catch All Tray
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/woodworking/decorations/catch_all_tray">
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
						src="/assets/images/projects/woodworking/furniture/CatchAllTray.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Here, I make a catch-all tray using my CNC to organize the stuff I
						need to grab when I'm leaving my apartment.
					</a>
					{/* <Link href="https://cesg.tamu.edu/faculty/stavros-kalafatis/">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							CESG Website
						</a>
					</Link> */}
				</div>
				{/* <div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/woodworking/decorations/TAMUhackSignRough.jpg"
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

export default catch_all_tray;
