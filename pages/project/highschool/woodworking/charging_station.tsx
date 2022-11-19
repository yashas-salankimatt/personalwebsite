import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function charging_station(props) {
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
					Creating a Charging Station for All of My Devices
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/highschool/woodworking/charging_station">
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
						src="/assets/images/projects/highschool/woodworking/charging_station/Model.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Being as into technology that I am, I have accumulated a decent
						amount of electronics that need to be charged on a daily basis, and
						what ended up happening before was that there was a massive mess of
						wires around the side of my desk, taking up a lot of valuable space
						as well as just looking messy.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						To solve this, I decided to custom build a charging station that
						would be able to charge my laptop, a small tablet like device, a
						battery bank, my Bluetooth speaker, my smartwatch, as well as my
						smartphone. I then created a 3D CAD model (as seen below) to check
						how I wanted my design to look as well as guide me while I cut the
						wood and put it together.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I also took advantage of the fact that I could make this my project
						for my AP Environmental Science class, letting me spend more time
						and effort on this project. This is why the video below showing the
						build methodology of the project is titled “Upcycle Project Video.”
					</a>
					<Link href="https://youtu.be/iNvWBT7SyJw">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							YouTube Link to Time Lapse of Build
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default charging_station;
