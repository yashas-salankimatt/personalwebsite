import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function workbench(props) {
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
					Making an Inexpensive Woodworking Workbench from MDF
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/highschool/woodworking/workbench">
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
						src="/assets/images/projects/highschool/woodworking/workbench/Primary.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						As I continued in my journey of learning to make things by myself, I
						found myself learning to woodwork more and more, using the simple
						tools and resources along with the limited budgets that I had to
						work with.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						The problem came from the fact that I was woodworking on a small
						desk that I used to work on as a child. This however was not optimal
						as this was made of plastic, not level, and was at an elevation of
						around 2 feet, meaning that I had to work on my knees in order to
						get anything done on that surface. At the time, I decided to embark
						on a relatively ambitious project as compared to my previous
						projects, my charging station. In order to do this with any
						semblance of quality, I realized that I would need a workbench.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Since I was working with a limited budget, I was forced to just use
						one sheet of 1/2″ thick MDF that had the dimensions of 4’x8′ that I
						was able to buy from Home Depot for $25. I chose this sheet because
						this was the cheapest sheet of lumber that I could get that I could
						work with easily with my limited tools. I also had to choose this
						MDF because I also had to make the charging station itself from this
						sheet of MDF.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						As I started work, I realized how difficult this situation is. I had
						to use a jig saw, a couple cheap clamps, and a few other odds and
						ends to make a workbench with material that wasn’t built to be a
						workbench. To make sure that I didn’t completely mess this up, I
						created a 3D model of what I wanted the workbench to look like in
						Fusion 360, as shown below.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						From that 3D model, I was able to confirm the proportions that I
						wanted and I was able to break up my build into easy to follow parts
						and measurements to cut. I then took my laptop with this 3D model
						into the garage and I used the easy measurements and cut and got to
						building. Eventually, the process was done, and I had a decently
						functional workbench for future woodworking projects. Time lapse
						video of how I built this below.
					</a>
					<Link href="https://youtu.be/VqRmL0l_MHU">
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

export default workbench;
