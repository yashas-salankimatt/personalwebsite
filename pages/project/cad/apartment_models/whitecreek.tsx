import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function whitecreek(props) {
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
					Creating Whitecreek Apartmente Hall 3D Model
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/cad/apartment_models/whitecreek">
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
						src="/assets/images/projects/cad/apartment_models/WhiteCreekModelFront.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						After creating even this model and through more research, I realized
						that apartments may be the right way to go, so I decided instead to
						stay in the Whitecreek apartments at A&M, and got to work one last
						time making a model for the 4 bed, 2 bath apartment model using the
						resources that were provided to me by the A&M website. This time
						around, I used the floor plan like a canvas, and that made making
						the base floor plan infinitely faster, and generally expedited the
						whole process, as can be seen in the time lapse below. Due to the
						complexity and scale of this model however, this took me multiple
						days, and somewhere in the neighborhood of 6-8 hours to design,
						which is significantly longer than I spent on either of the two
						previous models. The end result however is much better and is much
						more accurate and usable when compared to the previous models. The
						time lapse for me creating this 3D model, a couple of angles of the
						finished model, as well as the link to the files can be found below.
					</a>
					<div
						className="max-w-lg mt-4 mb-4 rounded-2xl "
						style={{ boxShadow: imageDivStyle }}
					>
						<img
							src="/assets/images/projects/cad/apartment_models/WhiteCreekModelBack.png"
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
							src="/assets/images/projects/cad/apartment_models/WhiteCreekModelSide.png"
							width="auto"
							height="auto"
							alt="main photo"
							className="rounded-2xl"
						></img>
					</div>
					<Link href="https://www.youtube.com/watch?v=FjH7PmW4bxY">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Whitecreek Model Time Lapse
						</a>
					</Link>
					<Link href="https://www.youtube.com/watch?v=bo5_qN2Qyas">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Whitecreek Model Overview
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default whitecreek;
