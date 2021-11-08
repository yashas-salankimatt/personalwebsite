import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function monica(props) {
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
					Creating a System to Track Body Kinematics Without Using Cameras
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/mechatronics/misc/monica">
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
						src="/assets/images/projects/mechatronics/misc/monica1.PNG"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						One of the more impactful, substantial projects that I have been
						working on for a little while now is a new type of system to track
						body kinematics without using cameras. This system uses tiny IMUs,
						or inertial measurement units, placed all around your body to track
						the orientation of each body segment and to stitch all of that data
						back together into a 3D model. This data can not only be used to
						make a 3D model, but can also be used to track relative joint
						positions in 3 dimensions. With the data about joint position in 3
						dimensions, eventually, this system will be able to determine
						accelerations and forces acting on individual joints, helping sports
						medicine and physical therapy greatly. The main benefit of this
						system however, is the fact that it is completely portable. Since
						there are no bulky camera setups necessary, this system has the
						potential to fit into a small body suit that one can wear during
						workouts to track their form, or wear during run sessions to track
						their gait in real time throughout the entire run. There are many
						more applications for this technology, and I have only been working
						on it for a little while now, but I have plans to pursue these
						applications in the future. Below will be videos about the progress
						made on this so far. The videos below were made as an aide to help
						our team (consisting of Shobha Dasari, Andrew Yu, and I) compete in
						science fair competitions, going on to win 3rd at the Texas State
						Engineering Fair.
					</a>
					<Link href="https://www.youtube.com/watch?v=jzXKDNldJtc">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							V1 Demo Video: YouTube
						</a>
					</Link>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Version one of the idea involved developing this technology from
						almost the ground up, trying to make sure that this was a feasible
						idea. This video demonstrates this proof of concept that something
						like this could work. The fact that this was the MVP stage is why
						the sensors are taped onto my body.
					</a>
					<Link href="https://www.youtube.com/watch?v=Dfm-TY5Fdog">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							V2 Demo Video: YouTube
						</a>
					</Link>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Version two of the idea involved not too much more progress was made
						on the idea visually from the last time. Here, however, you can see
						the addition of the legs into the 3D model, and a model from the
						Kinect is shown to the side as a comparison because a staggering
						number of sports therapy and physical therapy facilities use
						technologies close to the ones found in an Xbox Kinect sensor to
						diagnose their patients.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						One next step is to try to calibrate the system more accurately,
						trying to fix some of the errors in angles that can be seen in some
						of the arm positions in these two videos. Another goal to hit is to
						add many more sensors, including ones for hands, feet, neck, head,
						and 2 more sensors for the back (in order to sense how the back is
						tilted). Once this is done, we can go about trying to get this
						system to be more friendly towards consumer-like applications.
					</a>
				</div>
			</div>
		</div>
	);
}

export default monica;
