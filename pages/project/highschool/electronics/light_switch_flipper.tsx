import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function light_switch_flipper(props) {
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
					Creating a Remote Light Switch Flipper for Lazy People
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/highschool/electronics/light_switch_flipper">
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
						src="/assets/images/projects/highschool/electronics/light_switch_flipper/Primary.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						After having created my automated door closer, and being very
						satisfied with the fact that I now no longer have to get up to close
						my door. I was looking for other things to automate, when one night
						it hit me. In this case, “it” is a 25 pound dumbbell that I had left
						on the ground. I had then went to turn off the lights and go to bed
						when, in the dark, I tripped over this dumbbell and almost fell face
						first into the ground. I then realized that I could just figure out
						a way to control my lights from bed. I thought of ways that I could
						do this, and realized that mounting a small servo to my light switch
						and controlling it via Bluetooth was the best option.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Thus, for the first version of this project, I had made a mount for
						the servo using popsicle sticks layered over one another and hot
						glued, and I had run a wire that routed the servo control wires to
						the electronics mounted on the back of my door for the door closer
						project, where that same Arduino-Bluetooth system would control both
						the door closing mechanism and the light switch flipper. This
						system, however kept on failing. The servo for the light switch
						flipper would sometimes refuse to flip, and the Bluetooth connection
						to my phone was very finnicky, so I realized that there was a lot of
						headroom for improvement in a lot of areas.
					</a>
					<div
						className="max-w-lg mt-4 mb-4 rounded-2xl "
						style={{ boxShadow: imageDivStyle }}
					>
						<img
							src="/assets/images/projects/highschool/electronics/light_switch_flipper/V1.png"
							width="auto"
							height="auto"
							alt="main photo"
							className="rounded-2xl"
						></img>
					</div>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						The first area I tackled was the way that I mounted the servo to the
						wall itself. I realized that the popsicle sticks, while functional,
						were just straight up ugly, and prone to failure over time. So I
						went into Fusion 360 and created a housing for the servo, and also
						created a box off to the side, where all of the electronics for the
						light switch flipper could be self contained, with only wires for
						power coming out of the box. Below are pictures of the 3D model as
						well as the finished result that was printed using my friend’s 3D
						printer.
					</a>
					<div
						className="max-w-lg mt-4 mb-4 rounded-2xl "
						style={{ boxShadow: imageDivStyle }}
					>
						<img
							src="/assets/images/projects/highschool/electronics/light_switch_flipper/Model.png"
							width="auto"
							height="auto"
							alt="main photo"
							className="rounded-2xl"
						></img>
					</div>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						The next area that I decided to tackle was the connectivity issue.
						The signal kept flickering on and off and I often had to go and
						reboot the Arduino and move some wires around to get the system to
						work again because of the fact that the Bluetooth connection would
						terminate unexpectedly when I left with my phone. Another issue that
						I was running into was that I was not happy about the fact that I
						could not control either my light switch or the door closer using
						Google Assistant or Cortana. The way that I got around both of these
						problems ended up being pretty simple. I used a Raspberry Pi 3B+
						running a simple script that would connect the RPi to the Bluetooth
						module of the Arduino and then monitor a remote MQTT server. This
						way, the RPi would always stay connected to the Bluetooth module and
						wait for a new value on the MQTT server. When a new value was
						received, the RPi would do a bit of processing to determine of the
						data was okay to send, and then send that command over the the
						Arduino Bluetooth module, telling it to flip the light on or off.
						This solution made it so that the connectivity issues are
						nonexistent since the RPi is always connected to the Arduino, and it
						also makes it so that all I have to do in order to turn my lights on
						or off is to update a value in the MQTT server. For this, I created
						a super simple Android app, but I also made use of IFTTT to send the
						values to the Adafruit IO MQTT server once a voice assistant has
						heard me tell it to either turn on or turn off the lights. If I
						didn’t explain that well enough, or you would like code or 3D models
						for this project, contact me using the Contact page. Below you will
						find a video of the light switch flipper in, a demonstration of the
						backend, pictures of the Android app, as well as an IFTTT recipe
						that I use to turn my lights on through Google Assistant.
					</a>
					<Link href="https://www.youtube.com/watch?v=rhiH2zoVZT8">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Using Siri to Trigger Light Switch Flipper
						</a>
					</Link>
					<Link href="https://www.youtube.com/watch?v=4jVl8eDFXeI">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Manually Adding Value to Light Switch Flipper
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default light_switch_flipper;
