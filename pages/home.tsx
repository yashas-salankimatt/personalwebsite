import React, { useEffect } from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

interface Props {}

function Homepage(props: Props) {
	const router = useRouter();

	useEffect(() => {
		if (router.pathname == "/home") {
			router.push("/");
		}
	}, []);

	return (
		<div className="flex flex-col-reverse sm:flex-row">
			<div className="flex flex-col flex-1">
				<div className="ml-16 mb-4 mt-4">
					<Header
						HeaderText="Yashas"
						FontColor="text-black-300 "
						UnderlineColor="border-black"
						UnderlineWeight="12"
					/>
				</div>
				<div className="ml-24 mb-4 mt-4">
					<Header
						HeaderText="Salankimatt"
						FontColor="text-black-300 "
						UnderlineColor="border-black"
						UnderlineWeight="12"
					/>
				</div>
				<div className="ml-16 mt-4">
					<a className="text-4xl font-semibold font-sans">
						Student, Maker, Entrepreneur
					</a>
				</div>
				<div className="ml-16 mt-6">
					<a className="text-2xl font-normal font-sans">
						Howdy! I'm Yashas- a senior computer engineer at Texas A&M
						University. I'm passionate about robotics and software engineering.
						Check out some of my projects at the link below.
					</a>
				</div>
				<div className="ml-16 mt-8">
					<a className="text-3xl font-medium font-sans">Quick Links</a>
				</div>
				<div className="ml-16 mt-8 flex items-center mb-4">
					<a
						href="https://drive.google.com/drive/folders/1Kl2E9ovSh4Jc3SCtzujBf4AANwhhYuMa?usp=sharing"
						target="_blank"
					>
						<button
							className="text-black-400 bg-gray-200 border-l border-t border-b border-black hover:bg-gray-500 hover:text-white font-bold uppercase text-md px-6 py-3 rounded-l outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
							type="button"
							style={{
								borderBottom: "1px solid black",
								borderTop: "1px solid black",
								borderRight: "1px solid black",
								borderLeft: "1px solid black",
							}}
						>
							Resume
						</button>
					</a>
					<a href="https://www.linkedin.com/in/yashas-s/" target="_blank">
						<button
							className="text-black-400 bg-gray-200 border border-solid border-black hover:bg-gray-500 hover:text-white font-bold uppercase text-md px-6 py-3 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
							type="button"
							style={{
								borderBottom: "1px solid black",
								borderTop: "1px solid black",
								borderRight: "1px solid black",
							}}
						>
							LinkedIn
						</button>
					</a>
					<a href="https://www.youtube.com" target="_blank">
						<button
							className="text-black-400 bg-gray-200 border-t border-b border-r hover:bg-gray-500 hover:text-white font-bold uppercase text-md px-6 py-3 rounded-r outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
							type="button"
							style={{
								borderBottom: "1px solid black",
								borderTop: "1px solid black",
								borderRight: "1px solid black",
							}}
						>
							YouTube
						</button>
					</a>
				</div>
				<div className="ml-16">
					<Link href="/projects">
						<button
							className="text-black-400 bg-gray-200 hover:bg-gray-500 hover:text-white font-bold uppercase text-md px-6 py-3 rounded-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
							type="button"
							style={{ border: "1px solid black" }}
						>
							Check out my projects!
						</button>
					</Link>
				</div>
			</div>
			<div className="flex-1">
				<div className="relative w-full h-full flex flex-row items-center justify-center">
					<div className="p-16">
						<Image
							src="/assets/images/RingMilitaryWalk.jpg"
							width="561rem"
							height="748rem"
						></Image>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
