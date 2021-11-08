import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function magic_shelves(props) {
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
					Magic Shelves: An Item Carousel
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/mechatronics/hackathons/magic_shelves">
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
						src="/assets/images/projects/mechatronics/hackathons/magic_shelves/2.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						We wanted to create an innovative way to organize and store items
						specifically for people with limited mobility, such as the elderly.
						We also wanted it to be compact, able to be stored in a closet, and
						controllable via an iPad or Google Assistant. None of us had
						experience in website development and took it as a challenge to make
						a user friendly web interface.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Magic Shelves is an inventory system that allows potentially
						impaired persons to store items. It moves the shelf to the user in
						order to make all stored items easily accessible. This system allows
						the user to make full use of previously inaccessible space. The
						accompanying website and database make it easy for a user to store,
						manage, and retrieve items on the shelves without needing to
						physically reach for anything.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Initially, finding bike chains in stores. Walmart was the only place
						that had bike chains for some reason? So we bought 4. Also, fitting
						a bunch of wood from Home Depot into a rather small car. As for our
						device itself, one of the first issues was how the "A" arms were
						going to connect to the chain - we slotted rods through the chain
						which the arms would hold from. The arms also needed to articulate
						when going around the sprocket, and we needed to reduce the space
						between the arm legs, both due to clearance issues with the chain.
						These were some of the notable challenges we faced with our design;
						we also overcame several difficulties with manufacturing/assembly -
						tolerances, parts not being strong enough, etc.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						We are proud that the software and hardware were integrated very
						well, and that we were able to control when a shelf would be
						accessible to a user using only the website and the firebase
						database. This was our first time attempting web development using
						html5 / CSS and using a database to actively manage items. We are
						also proud of the python script that was written to send information
						from the database to the ESP32 and to manage the integrated Google
						Assistant support. We are also very proud of pushing the 3D printer
						to work 3x faster than normal (with surprisingly un-janky results).
						Our project was ambitious in scope, but we managed to build our
						product and get it to work.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						On the software side, we learned a surprising amount about website
						creation and styling. Writing code to enable functionality was no
						easy feat, but making everything look presentable was easily the
						most time consuming part of the website creation process.
						Determining how things should look and then how to make that happen
						took quite a bit of research and quite a bit more trial and error.
						By the end though, we had it down to a science!
					</a>
					<Link href="https://www.youtube.com/watch?v=WsUGXdb7l-4">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Project Demonstration: YouTube
						</a>
					</Link>
					<Link href="https://devpost.com/software/magic-shelves">
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
					</Link>
					<Link href="https://github.com/hrrsnpttr/MagicShelves">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							GitHub Repo for the Project
						</a>
					</Link>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/mechatronics/hackathons/magic_shelves/1.jpg"
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
						src="/assets/images/projects/mechatronics/hackathons/magic_shelves/2.jpg"
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
						src="/assets/images/projects/mechatronics/hackathons/magic_shelves/3.jpg"
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

export default magic_shelves;
