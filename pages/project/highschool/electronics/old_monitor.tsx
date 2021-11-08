import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function old_monitor(props) {
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
					Making a Monitor from an Old Laptop
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/highschool/electronics/old_monitor">
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
						src="/assets/images/projects/highschool/electronics/old_monitor/MonitorModel.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						If you’ve been alive through the early 2000’s, chances are that you
						most likely have some old technology lying around from that time
						period. Due to the rapid advance of technology, most of the time,
						these old pieces of technology like phones, network devices, and
						many computers will be useless for their intended purpose. This
						doesn’t mean however that they can’t be repurposed for something
						better.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						As a freshman with an increasing love for technology and two
						monitors already, I wanted to have a third monitor off to the side
						for “productivity reasons” but mostly it was just because I thought
						that having three monitors was really cool. That being said, my
						parents weren’t going to spend more money for no reason just so that
						I could have a third monitor, so I had to get creative. I looked
						online for ways that I could get a monitor for cheap, and the option
						of getting a used monitor was available, but most of the used
						monitors that I found were way too old and cost too much for what
						they provided.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						After some research, I stumbled across some videos that showed some
						people using the screens of their old laptops for secondary monitors
						(links to which will be at the bottom of this post). When I checked
						the price for the components necessary to make this work, I realized
						that it was just $15 dollars for the display driver and that I
						already had an unused power supply that could power the driver. That
						being said, I convinced my parents to order the display driver, and
						got to work designing a stand that I could use to keep the screen
						upright on my desk.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						With my rudimentary knowledge of 3D design, I got to work, and I
						eventually came up with a 3D model that looked serviceable enough to
						work as a base for all of the components. (Shown Above)
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Due to the fact that 3D printing wasn’t as popular and still wildly
						expensive in my freshman year, I decided that I could make this
						rudimentary stand with scrap wood that I had lying around from
						building my corner desk. Armed with nothing but a drill, a couple of
						screws, a handsaw, and some sandpaper, I got to work and in the end,
						I ended up with a stand that did its job well enough. (Shown Below)
					</a>
					<div
						className="max-w-lg mt-4 mb-4 rounded-2xl "
						style={{ boxShadow: imageDivStyle }}
					>
						<img
							src="/assets/images/projects/highschool/electronics/old_monitor/MonitorFront.jpg"
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
							src="/assets/images/projects/highschool/electronics/old_monitor/MonitorBack.jpg"
							width="auto"
							height="auto"
							alt="main photo"
							className="rounded-2xl"
						></img>
					</div>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						After that, all that was left to do was use the thing, and until I
						got better monitors in senior year, I used this jank creation that
						was poorly designed and very likely to shock someone. The thing is,
						this project has the most sentimental value to me because the very
						reason that the donor laptop broke in the first place was because I
						was trying to fix it when I was 8 years old. To me, being able to
						fix it and make it into something that could be used again was a
						victory that showed my transformation and the evolution of my
						interests and passions. This project also served as a springboard
						for the rest of my DIY projects.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Links: https://www.youtube.com/watch?v=CfirQC99xPc;
						https://www.youtube.com/watch?v=Ze2fC6w9r7M
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
			</div>
		</div>
	);
}

export default old_monitor;
