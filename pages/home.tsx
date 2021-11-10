import React, { useEffect } from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import Link from "next/link";
import ImageGallery from "../components/ImageGallery";

interface Props {}

function Homepage(props: Props) {
	const router = useRouter();
	const [homeAnimate, setHomeAnimate] = React.useState(false);

	useEffect(() => {
		if (router.pathname == "/home") {
			router.push("/");
		}
		setHomeAnimate(true);
	}, []);

	return (
		<div className="flex flex-col-reverse md:flex-row">
			<div className="flex flex-col flex-1 z-10">
				<div className="ml-16 mb-4 mt-4">
					<Header
						HeaderText="Yashas"
						FontColor="text-blue-900 "
						UnderlineColor="border-blue-900"
						UnderlineWeight="12"
					/>
				</div>
				<div className="ml-20 sm:ml-24 mb-4 mt-4">
					<Header
						HeaderText="Salankimatt"
						FontColor="text-blue-900"
						UnderlineColor="border-blue-900"
						UnderlineWeight="12"
					/>
				</div>
				<div className="ml-16 mt-4">
					<a className="text-4xl text-blue-900 font-bold font-sans">
						Student, Maker, Entrepreneur
					</a>
				</div>
				<div className="ml-16 mt-6">
					<a className="text-2xl font-normal font-sans text-blue-900">
						Howdy! I'm Yashas- a senior computer engineering major at Texas A&M
						University. I'm passionate about robotics and software engineering.
						Check out some of my projects at the link below!
					</a>
				</div>
				<div className="ml-16 mt-8">
					<a className="text-3xl text-blue-900 font-bold font-sans">
						Quick Links
					</a>
				</div>
				<div className="ml-16 mt-8 flex items-center mb-4">
					<Link href="/resume">
						<button
							className="text-blue-900 bg-blue-100 border-l border-t border-b border-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase text-md px-6 py-3 rounded-l outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
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
					</Link>
					<a href="https://www.linkedin.com/in/yashas-s/" target="_blank">
						<button
							className="text-blue-900 bg-blue-100 border-r border-solid border-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase text-md px-6 py-3 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
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
					<a
						href="https://www.youtube.com/channel/UCzRbWFLJMChAwbcXnut-Qog"
						target="_blank"
					>
						<button
							className="text-blue-900 bg-blue-100 border-solid border-t border-b border-r border-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase text-md px-6 py-3 rounded-r outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
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
							className="text-blue-900 bg-blue-100 hover:bg-blue-900 hover:text-white font-bold uppercase text-md px-6 py-3 rounded-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
							type="button"
							style={{ border: "1px solid black" }}
						>
							Check out my projects!
						</button>
					</Link>
				</div>
			</div>
			<div className="flex-1 z-10">
				<div className="relative w-full h-full flex flex-row items-center justify-center rounded">
					<div className="p-16">
						<div
							className="rounded-2xl text-blue"
							style={{ boxShadow: "1rem 1rem 0.25rem rgba(30, 58, 138, .6)" }}
						>
							<img
								src="/assets/images/RingMilitaryWalk.jpg"
								width="auto"
								height="auto"
								className="rounded-2xl max-h-75vh"
							></img>
							{/* <ImageGallery
								images={["/assets/images/RingMilitaryWalk.jpg", "/favicon.ico"]}
								width="75vh"
								height="30vw"
							></ImageGallery> */}
						</div>
					</div>
				</div>
			</div>
			<div
				className="absolute z-0 bg-gradient-to-b from-blue-100 via-blue-50 to-white rounded-3xl h-homeboxsm md:h-99vh w-98vw"
				style={{
					left: "1vw",
					top: "1vh",
				}}
			></div>
		</div>
	);
}

export default Homepage;
