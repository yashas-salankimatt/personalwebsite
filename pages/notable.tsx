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
			<div className="z-10 flex flex-col w-full">
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
							description="I had a need for a CNC router for some of my more involved hardware 
							projects that would require me to prototype either large pieces or pieces that would
							 need to be made from aluminum or other metals. This router can do all of the above 
							 for a fraction of the price as commercial products with the same capabilities."
						/>
						<NotableThumbnail
							title="Initial Progress on my Robotic Arm Project"
							linkPath="/project/mechatronics/robot_arm/init_progress"
							imagePath="/assets/images/projects/mechatronics/robot_arm/init_1.jpg"
							description="My initial attempt at making the first three axes of a seven axis robotic arm. 
							I learned a lot from this initial prototype and am currently working on a different approach. 
							This approach with the differential drive is unique- check out the demo!"
						/>
						<NotableThumbnail
							title="Progress Made on Search and Rescue Robot Research Project"
							linkPath="/project/mechatronics/survivor_buddy/hardware_dev"
							imagePath="/assets/images/projects/mechatronics/survivor_buddy/SurvivorBuddy2-2.PNG"
							description="This is the progress I've made on my Survivor Buddy research project to help with 
							telemedicine in search and rescue situations. This details the redesign that I did of the previous 
							version!"
						/>
						<NotableThumbnail
							title="Progress on Improving Robotic Indoor Navigation Systems"
							linkPath="/project/software/urs/urs_403"
							imagePath="/assets/images/projects/software/urs/mappingdemo.png"
							description="Shown is the progress on my capstone research project that aims to improve the perception 
							of indoor robotic systems to small scale high frequency changes in human environments."
						/>
						<NotableThumbnail
							title="My First CNC Router, made from a Hackathon Project"
							linkPath="/project/machinery/cnc_v1/cnc_v1_build"
							imagePath="/assets/images/projects/machinery/cnc_v1/2.png"
							description="This is my first CNC router made from parts from a hackathon project and a Dremel. This is 
							what inspired me and allowed me to make my bigger CNC machine that I now use. This machine is now retired."
						/>
						<NotableThumbnail
							title="This Personal Website: Made with React, Typescript, Tailwind, and Framer Motion, Built to Easily Explore My Projects section"
							linkPath="/project/software/web/PersonalWebsite"
							imagePath="/assets/images/projects/software/web/WebsiteHome.PNG"
							description="As a result of me being fascinated with hardware and robotics projects personally, I didn't have anything 
							to demonstrate my web development skills. This website is a demonstration of my familiarity with the technologies 
							mentioned above and to show my diversity of skills."
						/>
						<NotableThumbnail
							title="A Sensor Based System to Track Body Movements without Cameras"
							linkPath="/project/mechatronics/misc/monica"
							imagePath="/assets/images/projects/mechatronics/misc/monica1.PNG"
							description="This is a sensor based system that tracks the movements of a person's body without the use of cameras. 
							It uses inertial measurements units (IMUs) attached on the body to track body movements and provide a digitial replica. 
							This project was done for a high school science fair project and won a youth ambition grant."
						/>
						<NotableThumbnail
							title="A Braille Printer, made for a Hardware Hackathon"
							linkPath="/project/mechatronics/hackathons/brailleiant"
							imagePath="/assets/images/projects/mechatronics/hackathons/brailleiant/1.jpg"
							description="A machine capable of imprinting braille onto paper or cardstock. 
							Made to help blind people be able to receive physical cards that they can keep and treasure. 
							Created in 24 hours and won 1st place and the accessibility challenge at TAMUmake 2020 hackathon."
						/>
						<NotableThumbnail
							title="Some Cool Light Decorations I Made for My Room"
							linkPath="/project/mechatronics/misc/light_bars"
							imagePath="/assets/images/projects/mechatronics/misc/lightbar1.png"
							description="Some light decorations that I made to brighten up and spice up my room. Not super 
							technically impressive, but I think they look pretty cool and are a unique implementation."
						/>
					</div>
				</div>
			</div>
			<div
				className="absolute z-0 bg-gradient-to-b from-yellow-100 via-yellow-50 to-white rounded-3xl h-projectsboxsm md:h-screen w-98vw"
				style={{
					left: "1vw",
					top: "1vh",
				}}
			></div>
		</div>
	);
}

export default NotablePage;
