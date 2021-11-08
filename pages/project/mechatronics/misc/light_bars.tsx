import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function light_bars(props) {
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
					Creating Addressable LED Light Bars as Decorations
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/mechatronics/misc/light_bars">
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
						src="/assets/images/projects/mechatronics/misc/lightbar1.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						After the end of my first semester, I realized that I wanted more
						light in my room, especially near my desk and I did not want to buy
						a lamp that would take up precious real estate on my desk. To get
						around this fact, I started the process to create my own
						decorations. I decided that I wanted some wall mountable, defused
						lights, and to also make them RGB because why not. When choosing LED
						strips, I went ahead and chose an individually addressable LED strip
						with RGBW LEDs in each big LED so that my white light for studying
						would be pure and not tinted. I also made sure to pick the strips
						with the highest LED density so that the most light would be
						emitted. I then decided to pick photo diffuser cloth since it was
						the cheapest way to diffuse such a large area of light well and
						consistently while also preserving the type of canvas aesthetic that
						I wanted the light bars to have when they were not powered on.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Once I did this, the creation of the actual light bar was quite
						easy, I took some wood and made a long U shape so that the LED strip
						could stay in the crook of the U and the diffuser would go on the
						top part of the U. Once the U shapes were created, I cut the LED
						strips to size, making sure that the same number of LEDs were in
						each light bar and glued them into the bottom of the U shape. I then
						soldered connectors onto the ends of each of the light bars so that
						they could be easily connected to a controller board that I would
						make later.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Once the wood-LED assembly was completed, I hooked it up to power
						and figured out that I wanted 3 layers of diffuser on top so that
						there would be a good amount of diffusion and that it would emit a
						good amount of light. I then measured and figured out the dimensions
						that each strip of diffuser had to be to cover all of the sides
						besides the back while still wrapping over the back to be fastened.
						I then took these measurements, cut the diffuser into strips and
						then one by one fastened the diffuser to the wood using a stapler,
						making sure that each layer was taut and that there were no
						wrinkles. I also made sure that the top and bottom looked acceptable
						while also ensuring that the connectors were protruding out the
						bottom.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Finally, I created a little controller board with an Arduino (to
						control the lights and handle all logic), a couple of buttons (to
						switch through patterns, color temperature, etc), a potentiometer
						(to control brightness), a power plug (to connect the ample 5V 3A
						power supply), the male and female connectors necessary to connect
						to the light bars easily, and a Bluetooth module to control the
						strip from the phone. A picture of this is included below.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						While I have not created the phone app yet because of the COVID-19
						crisis, once I install these light strips into my new apartment in
						the Fall of 2020, I will write the program to control these light
						bars from my phone. Another improvement that is in the works is to
						cut the perfboard to the proper length and then create a 3D printed
						housing for the control board so that it looks better than the bare
						components.
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
							Progress Video: YouTube
						</a>
					</Link>
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
							Final Result Video: YouTube
						</a>
					</Link>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/misc/lightbar2.jpg"
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

export default light_bars;
