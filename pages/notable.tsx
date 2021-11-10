import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Head from "next/head";
import NotableThumbnail from "../components/NotableThumbnail";

interface Props {}

function NotablePage(props: Props) {
	return (
		<div className="overflow-auto">
			<Head>
				<title>Yashas/Notable Projects</title>
			</Head>
			<Menu />
			<div className="z-10 flex flex-col w-full" style={{ height: "90vh" }}>
				<div className="z-10 self-center items-center justify-center  flex flex-row flex-wrap">
					<Header
						HeaderText="Notable"
						FontColor="text-yellow-600"
						UnderlineColor="border-yellow-600"
						UnderlineWeight="12"
					/>
					<div className="">
						<Header
							HeaderText="-"
							FontColor="text-transparent"
							UnderlineColor="border-yellow-600"
							UnderlineWeight="12"
						/>
					</div>
					<Header
						HeaderText="Projects"
						FontColor="text-yellow-600"
						UnderlineColor="border-yellow-600"
						UnderlineWeight="12"
					/>
				</div>
				<div className="z-10 self-center mt-4 text-center">
					<a className="text-2xl text-yellow-600 font-bold font-sans">
						Click or hover over any project for more info!
					</a>
				</div>
				<div className="z-10 self-center justify-center flex flex-col ">
					<div className="w-5/6 justify-center items-center flex flex-col sm:flex-row flex-wrap m-8">
						<NotableThumbnail
							title="A Heavy Duty, Inexpensive CNC Router for my Apartment Machine Shop"
							linkPath="/project/machinery/cnc_v2/upgrades_1"
							imagePath="/assets/images/projects/machinery/cnc_v2/upgrades/1.jpg"
						/>
						<NotableThumbnail
							title="Initial Progress on my Robotic Arm Project"
							linkPath="/project/mechatronics/robot_arm/init_progress"
							imagePath="/assets/images/projects/mechatronics/robot_arm/init_1.jpg"
						/>
						<NotableThumbnail
							title="My First CNC Router, made from a Hackathon Project"
							linkPath="/project/machinery/cnc_v1/cnc_v1_build"
							imagePath="/assets/images/projects/machinery/cnc_v1/2.png"
						/>
						<NotableThumbnail
							title="This Personal Website: Made with React, Typescript, Tailwind, and Framer Motion, Built to Easily Explore My Projects section"
							linkPath="/project/software/web/PersonalWebsite"
							imagePath="/assets/images/projects/software/web/WebsiteHome.PNG"
						/>
						<NotableThumbnail
							title="A Sensor Based System to Track Body Movements without Cameras"
							linkPath="/project/mechatronics/misc/monica"
							imagePath="/assets/images/projects/mechatronics/misc/monica1.PNG"
						/>
						<NotableThumbnail
							title="A Braille Printer, made for a Hardware Hackathon"
							linkPath="/project/mechatronics/hackathons/brailleiant"
							imagePath="/assets/images/projects/mechatronics/hackathons/brailleiant/1.jpg"
						/>
						<NotableThumbnail
							title="Some Cool Light Decorations I Made for My Room"
							linkPath="/project/mechatronics/misc/light_bars"
							imagePath="/assets/images/projects/mechatronics/misc/lightbar1.png"
						/>
					</div>
				</div>
			</div>
			<div
				className="absolute z-0 bg-gradient-to-b from-yellow-100 via-yellow-50 to-white rounded-3xl h-projectsboxsm md:h-screen w-homeboxsm md:w-98vw"
				style={{
					left: "1vw",
					top: "0vh",
				}}
			></div>
		</div>
	);
}

export default NotablePage;
