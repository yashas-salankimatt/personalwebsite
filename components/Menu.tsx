import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const dropInBg = {
	hidden: { opacity: 0, y: "-100vh" },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 100,
			stiffness: 1500,
		},
	},
	exit: { opacity: 0, y: "-100vh" },
};

const dropInTxt = {
	hidden: { opacity: 0, y: "-100vh" },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			type: "spring",
			damping: 25,
			stiffness: 200,
		},
	},
	exit: { opacity: 0, y: "-100vh" },
};

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
				setPageColor("bg-white");
				setMenuTextColor("text-black");
				break;
		}
	}, [router.pathname]);

	return (
		<div>
			<div className="w-full h-24">
				<div className="w-full h-full flex items-center">
					<div
						className={
							"z-10 mt-4 rounded-t-2xl h-full flex items-center " +
							(menuOpened
								? "ml-2 w-homeboxsm md:w-98-5vw " + pageColor
								: "ml-1vw w-98vw ")
						}
					>
						<p
							className={
								"text-4xl font-bold font-sans h-18 ml-12 cursor-pointer hover:underline hover:text-5xl ease-linear transition-all duration-100 " +
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
			<AnimatePresence exitBeforeEnter={true}>
				{menuOpened && (
					<motion.div
						className={
							"ml-2 z-50 absolute top-24 rounded-b-2xl flex flex-col w-homeboxsm md:w-98-5vw h-projectsboxsm md:h-89vh " +
							pageColor
						}
						variants={dropInBg}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<Link href="/">
							<motion.a
								className={
									"mt-8 cursor-pointer ml-16 text-6xl md:text-7xl font-bold font-sans mb-16 md:hover:text-8xl hover:text-7xl  ease-linear transition-all duration-100 " +
									menuTextColor +
									(router.pathname == "/" ? " underline " : " ")
								}
								onClick={() => {
									setMenuOpened(false);
								}}
								variants={dropInTxt}
								initial="hidden"
								animate="visible"
								exit="exit"
							>
								Home
							</motion.a>
						</Link>
						<Link href="/notable">
							<motion.a
								className={
									"cursor-pointer ml-16 text-6xl md:text-7xl font-bold font-sans mb-16 md:hover:text-8xl hover:text-7xl  ease-linear transition-all duration-100 " +
									menuTextColor +
									(router.pathname == "/notable" ? " underline " : " ")
								}
								onClick={() => {
									setMenuOpened(false);
								}}
								variants={dropInTxt}
								initial="hidden"
								animate="visible"
								exit="exit"
							>
								Notable Projects
							</motion.a>
						</Link>
						<Link href="/projects">
							<motion.a
								className={
									"cursor-pointer ml-16 text-6xl md:text-7xl font-bold font-sans mb-16 md:hover:text-8xl hover:text-7xl  ease-linear transition-all duration-100 " +
									menuTextColor +
									(router.pathname == "/projects" ? " underline " : " ")
								}
								onClick={() => {
									setMenuOpened(false);
								}}
								variants={dropInTxt}
								initial="hidden"
								animate="visible"
								exit="exit"
							>
								Projects
							</motion.a>
						</Link>
						<Link href="/experience">
							<motion.a
								className={
									"cursor-pointer ml-16 text-6xl md:text-7xl font-bold font-sans mb-16 md:hover:text-8xl hover:text-7xl  ease-linear transition-all duration-100 " +
									menuTextColor +
									(router.pathname == "/experience" ? " underline " : " ")
								}
								onClick={() => {
									setMenuOpened(false);
								}}
								variants={dropInTxt}
								initial="hidden"
								animate="visible"
								exit="exit"
							>
								Experience
							</motion.a>
						</Link>
						<Link href="/about">
							<motion.a
								className={
									"cursor-pointer ml-16 text-6xl md:text-7xl font-bold font-sans mb-16 md:hover:text-8xl hover:text-7xl  ease-linear transition-all duration-100 " +
									menuTextColor +
									(router.pathname == "/about" ? " underline " : " ")
								}
								onClick={() => {
									setMenuOpened(false);
								}}
								variants={dropInTxt}
								initial="hidden"
								animate="visible"
								exit="exit"
							>
								About Me
							</motion.a>
						</Link>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default Menu;
