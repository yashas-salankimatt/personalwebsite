import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function brailleiant(props) {
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
					Braille-iant: A Braille Printer
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/mechatronics/hackathons/brailleiant">
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
						src="/assets/images/projects/mechatronics/hackathons/brailleiant/1.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<Link href="https://www.youtube.com/watch?v=ccOsy5Q9hx4">
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
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						This is my project for TAMUMake 2020, Texas A&M’s annual hardware
						hackathon.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						This project originally started out as a way to help people with
						broken arms or other arm impairments to be able to write on physical
						paper. We had a friend who had broken his collarbone right before AP
						Exams, and because of this, he wasn’t able to write for them and had
						to have someone transcribe what he was saying onto the paper. This
						was fine for most of his exams, but for math and physics, it became
						a lot more difficult when it became apparent that the person who was
						set to transcribe for him didn’t really know too much about math or
						physics so he had to spend a significant amount of time explaining
						what Greek symbols were so that the transcriber could actually write
						them rather than thinking about the actual problems presented in the
						exams.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						We set out with this idea, but once we got to the hackathon and
						started talking to other people and mentors, it became obvious that
						there were better options like just using voice to LaTeX or
						something similar and just allowing a printer into the exam if they
						would allow a device like ours. So because of this feedback, we
						pivoted to a different idea. Since this hackathon was on the weekend
						after Valentine’s day, this was our inspiration. We figured that a
						big part of Valentine’s day is reading all of the nice things that
						people give you like notes, cards, etc, and that blind people don’t
						really have a way of experiencing the same thing. Sure they can be
						told “I love you” or something similar in the moment, but those
						things aren’t as lasting as something like a physical note. Thus, we
						set out to create something that could solve this problem.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Our solution was to create a system that would use stepper motors
						and traverse over a physical page while moving a tool over it, much
						like a 3D printer, except with no Z axis movement. Then, there would
						be a tool that would come down and make indentations in the page to
						create the actual Braille markings. To make this whole experience
						more user friendly, a website was designed that can help someone
						create a card and converts it to text for them, and the demo of this
						can be found in the YouTube video below.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						After it was all said and done, we won the hackathon outright, and
						also won the accessibility challenge. It was a ton of fun to make
						this project and to work with such amazing teammates!
					</a>

					<Link href="https://devpost.com/software/braille-iant-o1gcya">
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
					<Link href="https://github.com/anooj-shah/TAMUMake">
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
						src="/assets/images/projects/mechatronics/hackathons/brailleiant/1.jpg"
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
						src="/assets/images/projects/mechatronics/hackathons/brailleiant/2.jpg"
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

export default brailleiant;
