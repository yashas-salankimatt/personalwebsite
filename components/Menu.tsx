import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Menu(props) {
	// var [currPage, setCurrPage] = React.useState("");
	const router = useRouter();
	const [menuOpened, setMenuOpened] = useState(false);
	const [pageColor, setPageColor] = useState("");

	useEffect(() => {
		console.log(router.pathname);
		switch (router.pathname) {
			case "/":
				setPageColor("blue-500");
				break;
			case "/projects":
				break;
			case "/about":
				setPageColor("red-500"); // should be maroon
				break;
			case "/experience":
				break;
			case "/notable":
				setPageColor("yellow-300"); //should be gold
				break;

			default:
				break;
		}
	}, [router.pathname]);

	return (
		<div>
			<div className="w-full h-24">
				<div className="w-full h-full flex items-center">
					<p
						className={
							"text-4xl font-bold font-sans h-18 ml-16 cursor-pointer hover:underline ease-linear transition-all duration-150"
						}
						onClick={() => {
							setMenuOpened(!menuOpened);
						}}
					>
						MENU
					</p>
				</div>
			</div>
			{/* ANIMATE THE OPENING OF THE MENU */}
			{/* Animate the hover on menu items */}
			{menuOpened && (
				<div
					className="w-full z-50 absolute top-24 flex flex-col bg-white"
					style={{ height: "90vh" }}
				>
					<Link href="/">
						<a
							className="ml-16 text-6xl font-bold font-sans mb-12"
							onClick={() => {
								setMenuOpened(false);
							}}
						>
							Home
						</a>
					</Link>
					<Link href="/projects">
						<a
							className="ml-16 text-6xl font-bold font-sans mb-12"
							onClick={() => {
								setMenuOpened(false);
							}}
						>
							Projects
						</a>
					</Link>
					<Link href="/about">
						<a
							className="ml-16 text-6xl font-bold font-sans mb-12"
							onClick={() => {
								setMenuOpened(false);
							}}
						>
							About Me
						</a>
					</Link>
					<Link href="/experience">
						<a
							className="ml-16 text-6xl font-bold font-sans mb-12"
							onClick={() => {
								setMenuOpened(false);
							}}
						>
							Experience
						</a>
					</Link>
					<Link href="/notable">
						<a
							className="ml-16 text-6xl font-bold font-sans mb-12"
							onClick={() => {
								setMenuOpened(false);
							}}
						>
							Notable Projects
						</a>
					</Link>
				</div>
			)}
		</div>
	);
}

export default Menu;
