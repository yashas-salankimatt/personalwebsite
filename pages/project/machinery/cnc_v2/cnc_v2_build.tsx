import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function cnc_v2_build(props) {
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
					Creating a Powerful, Inexpensive, Large Format CNC Router
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/machinery/cnc_v2/cnc_v2_build">
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
						src="/assets/images/projects/machinery/cnc_v2/1.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						As I used the CNC router that I had made previously, I started to
						run into problems very quickly. First and foremost was the speed.
						Since the older machine was using a Dremel as a spindle, it wasn’t
						very powerful, and as such, it could not be pushed very hard. This
						meant that even the simplest cuts in aluminum took forever and I
						could almost forget about steel and other harder metals. The second
						problem was the size. Since the old machine was made using linear
						rails from a hackathon project, it was confined in size by those
						linear rails that I already had. This made it extremely difficult to
						cut larger pieces of wood and aluminum.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						To solve both of these problems, I realized that I wanted to create
						another CNC router, but this time the design goals would be
						different. The first and foremost design goal was rigidity. While
						the old CNC machine was rigid enough to make most cuts in wood and
						basic cuts in aluminum, it was limited both by its rigidity as well
						as its spindle. I wanted this newer machine to be rigid enough to
						push a more powerful spindle. To achieve this rigidity, I went with
						SBR20 linear rails on all of my axes in combination with a ball
						screw and NEMA 23 stepper motor drive system. With the rails
						attached to double layered plywood, this system would provide as
						much if not more stability than most other hobby CNC machines out
						there like the X-Carve or the Shapeoko 3. The NEMA 23 stepper motors
						would ensure that this machine had more than enough torque to cut
						through whatever I needed and the ball screws ensure that I had
						almost very little backlash. The second design goal was speed. I
						wanted to be able to get parts much quicker than my old machine. To
						achieve this, I used a 1.25 HP Makita palm router as the spindle
						since this is the router that many other small shop CNC routers use.
						The final design constraint was price. As a college student, I
						couldn’t really afford to drop well over a thousand dollars on a CNC
						router, and this was the main motivator for me building my own
						machine instead of buying a kit.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I believe that I achieved all of my design goals quite well for this
						project. My machine is extremely rigid, it is quite fast, and all
						in, it only cost me around $500 for the parts for this project. This
						$500 price tag is much better than the $1500+ it would cost me to
						get a comparable machine of the same size and power.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I cut all of the wood parts to precise dimensions at the A&M
						architecture woodshop, and where I needed more precise woodworking,
						I used my old CNC router to create many of the wooden parts needed
						for this project. I also used my 3D printer to create the spindle
						and motors mounts and for various testing jigs, clamps, etc.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Images of the Fusion360 model are below, along with actual pictures
						of the machine.
					</a>
					{/* <Link href="https://devpost.com/software/the-maker-box">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Devpost Submission Link
						</a>
					</Link> */}
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/machinery/cnc_v2/2.png"
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
						src="/assets/images/projects/machinery/cnc_v2/3.png"
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
						src="/assets/images/projects/machinery/cnc_v2/4.jpg"
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
						src="/assets/images/projects/machinery/cnc_v2/5.jpg"
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
						src="/assets/images/projects/machinery/cnc_v2/6.jpg"
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

export default cnc_v2_build;
