import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Link from "next/link";
import Head from "next/head";

interface Props {}

function NotablePage(props: Props) {
	return (
		<div className="overflow-auto">
			<Head>
				<title>Yashas/Notable Projects</title>
			</Head>
			<Menu />
			<div className="z-10 flex flex-col w-full" style={{ height: "90vh" }}>
				<div className="z-10 self-center">
					<Header
						HeaderText="Notable Projects"
						FontColor="text-yellow-600"
						UnderlineColor="border-yellow-600"
						UnderlineWeight="12"
					/>
				</div>
				<div className="z-10 self-center ">
					<div className="flex flex-col sm:flex-row flex-wrap w-full m-8">
						<div className="m-2 w-96 h-96">
							<Link href="/project/template_component">
								<div className="grid w-full h-full rounded-2xl cursor-pointer bg-black">
									<div style={{ gridArea: "1 / 1" }}>
										{/* This image must be square */}
										<img
											className=" rounded-2xl"
											src="/assets/images/RingMilitaryWalk.jpg"
										></img>
									</div>
									<div
										className="rounded-2xl flex h-full justify-center text-center text-transparent hover:text-white hover:backdrop-blur-md hover:backdrop-brightness-50 ease-linear transition-all duration-100 "
										style={{ gridArea: "1 / 1" }}
									>
										<a className="self-center text-sans text-lg font-bold">
											This is just a test to see what goes on
										</a>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div
				className="absolute z-0 bg-gradient-to-b from-yellow-100 via-yellow-50 to-white rounded-b-3xl h-projectsboxsm md:h-87.5vh w-homeboxsm md:w-98vw"
				style={{
					left: "1vw",
					top: "10vh",
				}}
			></div>
		</div>
	);
}

export default NotablePage;
