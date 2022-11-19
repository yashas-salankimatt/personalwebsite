import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function science_bowl_app(props) {
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
					Science Bowl Points Tracker and Timer- My First Android Studio Project
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/highschool/software/science_bowl_app">
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
						src="/assets/images/projects/highschool/software/science_bowl_app/Primary.PNG"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						There isn’t much to talk about with this project. The problem came
						to my attention after one of the science bowl meetings when I was
						moderating. Since the science bowl club at our school had very few
						members, I, as president, wanted to make sure that as many members
						as possible could play and practice at a time. Since there were two
						full teams of four people and I was the only moderator, I had to do
						many jobs concurrently. I had to read the questions, keep time of
						each half round, keep time for each toss up question (a timer of 5
						seconds), keep time for each bonus question (a timer of 20 seconds),
						and all the while make sure that I am keeping score for each team.
						Before, this would involve using my laptop to both read the
						questions as well as keep time for each half round, using my phone
						for the toss up and bonus question times, and also using a piece of
						paper to keep track of score. Since I had recently gotten an Android
						phone for the purpose that it is easier to program, I decided to
						download Android studio and get to work.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						A couple YouTube videos and three hours later, I had a functional
						Android app to help me congregate all of these actions into one. The
						real purpose of this program was to help familiarize myself with
						Android studio through making a super simple app. I would then use
						the knowledge acquired from building this app to build apps later
						that would allow me to interface with my Arduino projects, apps that
						were much more complex than this one.
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

export default science_bowl_app;
