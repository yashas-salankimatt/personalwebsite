import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function door_closer(props) {
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
					Creating an Overcomplicated Door Closer for Lazy People
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/highschool/electronics/door_closer">
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
					className="max-w-lg mt-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/highschool/electronics/door_closer/Primary.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<Link href="https://www.youtube.com/watch?v=iB_ou9zzLIU">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							YouTube Video of Demo
						</a>
					</Link>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Having Indian parents, I found myself in a unique quandary. My
						parents would often come by into my room to ask me a question or
						roast me on my life choices real quick and they would leave the door
						open. I would then have to get up from my desk, my bean bag, my bed,
						or wherever else I was in my room and go and close the door myself.
						Even though this trek to the door was only a couple of feet away
						from wherever I was and only took a couple seconds, this task did
						eventually get cumbersome after doing it a couple times every hour.
						As an aspiring engineer and an enthusiast of being lazy, I thought
						to myself: there has to be a better way.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I got down to researching ways of making doors close. There were the
						automatic spring based ones that would default the door to a closed
						state, but there were times when I welcomed the ruckus that came
						with being in a busy household, so that was out. I then looked into
						automated solutions like the ones that you would find at hospitals
						with the button that you can press if you are in a wheelchair. When
						I looked into how these systems worked, I found that most of them
						used some sort of pneumatic or hydraulic system, or used a linear
						actuator. After seeing this, I realized that I was going to have to
						come up with a solution by myself and that it was going to be
						exceptionally sketchy.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I got to thinking, and eventually, I came up with a system where a
						motor would wind a loop of wire, which would pull the door either
						closed or open, and the loop of wire could then be released, with a
						counterweight on the other end, so that the wire could have slack so
						that the door could still function as a regular door. This system of
						motors could then be hooked up to an Arduino that was connected to a
						Bluetooth module so that I could control this entire system
						wirelessly from my phone. Once I uploaded the Arduino code and
						tested that, I built an Android app that connected via Bluetooth to
						the Arduino and sent commands to either close or open the door as I
						wanted. A video of the door closing can be found below, along with a
						couple of pictures of the electronics, wire system, as well a couple
						of pictures of the Android app I made to interface with the system.
					</a>
					<div
						className="max-w-lg mt-4 mb-4 rounded-2xl "
						style={{ boxShadow: imageDivStyle }}
					>
						<img
							src="/assets/images/projects/highschool/electronics/door_closer/Electronics.png"
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
							src="/assets/images/projects/highschool/electronics/door_closer/App.png"
							width="auto"
							height="auto"
							alt="main photo"
							className="rounded-2xl"
						></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default door_closer;
