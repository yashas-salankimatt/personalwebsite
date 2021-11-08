import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Menu(props) {
	// var [currPage, setCurrPage] = React.useState("");
	const router = useRouter();
	const [menuOpened, setMenuOpened] = useState(false);
	const [pageColor, setPageColor] = useState("");
	const [menuTextColor, setMenuTextColor] = useState("");

	useEffect(() => {
		console.log(router.pathname);
		switch (router.pathname) {
			case "/":
				setPageColor("bg-blue-100");
				setMenuTextColor("text-blue-900");
				break;
			case "/projects":
				setPageColor("bg-purple-100");
				setMenuTextColor("text-purple-900");
				break;
			case "/about":
				setPageColor("bg-red-100"); // should be maroon
				setMenuTextColor("text-red-900");
				break;
			case "/experience":
				setPageColor("bg-green-100");
				setMenuTextColor("text-green-900");
				break;
			case "/notable":
				setPageColor("bg-yellow-100"); //should be gold
				setMenuTextColor("text-yellow-600");
				break;

			default:
				break;
		}
	}, [router.pathname]);

	return (
		<div>
			<div className="w-full h-24">
				<div className="w-full h-full flex items-center">
					<div
						className={
							"mt-4 ml-4 rounded-t-2xl h-full flex items-center " +
							(menuOpened ? pageColor : "")
						}
						style={{ width: "98.5vw" }}
					>
						<p
							className={
								"text-4xl font-bold font-sans h-18 ml-12 cursor-pointer hover:underline ease-linear transition-all duration-150 " +
								menuTextColor
							}
							onClick={() => {
								setMenuOpened(!menuOpened);
							}}
						>
							MENU
						</p>
					</div>
				</div>
			</div>
			{/* ANIMATE THE OPENING OF THE MENU */}
			{/* Animate the hover on menu items */}
			{menuOpened && (
				<div
					className={
						"ml-4 z-50 absolute top-24 rounded-b-2xl flex flex-col " + pageColor
					}
					style={{ height: "89vh", width: "98.5vw" }}
				>
					<Link href="/">
						<a
							className="mt-8 ml-16 text-6xl font-bold font-sans mb-16 text-blue-900"
							onClick={() => {
								setMenuOpened(false);
							}}
						>
							Home
						</a>
					</Link>
					<Link href="/projects">
						<a
							className="ml-16 text-6xl font-bold font-sans mb-16 text-purple-900"
							onClick={() => {
								setMenuOpened(false);
							}}
						>
							Projects
						</a>
					</Link>
					<Link href="/about">
						<a
							className="ml-16 text-6xl font-bold font-sans mb-16 text-red-900"
							onClick={() => {
								setMenuOpened(false);
							}}
						>
							About Me
						</a>
					</Link>
					<Link href="/experience">
						<a
							className="ml-16 text-6xl font-bold font-sans mb-16 text-green-900"
							onClick={() => {
								setMenuOpened(false);
							}}
						>
							Experience
						</a>
					</Link>
					<Link href="/notable">
						<a
							className="ml-16 text-6xl font-bold font-sans mb-16 text-yellow-600"
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
