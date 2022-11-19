import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function cmu_2022(props) {
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
					Robotics Research Intern at Carnegie Mellon University, Biorobotics
					Lab under Dr. Howie Choset
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/experiences/cmu_2022">
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
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						From June 2022 to August 2022.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Working on a hardware in loop (HIL) test stand for simulation of
						satellite docking systems
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Iterating on a bimanual test stand used to simulate spacecraft
						docking hardware for Northrop Grumman
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Implementing impedance matching algorithms on the HIL test stand for
						space physics simulation
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Improving the controllers, estimators, trajectory planning, and
						optimization systems for satellite docking
					</a>
				</div>
			</div>
		</div>
	);
}

export default cmu_2022;
