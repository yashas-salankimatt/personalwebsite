import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function engineering_inc(props) {
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
					Engineering Incubator Founder
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/experiences/engineering_inc">
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
						From December 2019 to December 2022.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Founder in the engineering focused business incubator at Texas A&M
						working on EasyTrack- automated part inspection for small scale
						machine shops and woodworking shops.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Developed an inexpensive 7-axis robot arm system based on stepper
						motors and hybrid cycloidal gearbox actuators for the automation of
						part inspection.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Conducted market analyses, customer interviews, and analyzed
						business feasibility.
					</a>
					<Link href="https://engineering.tamu.edu/student-life/eep/engineering-incubator/index.html">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Engineering Inc Website
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default engineering_inc;
