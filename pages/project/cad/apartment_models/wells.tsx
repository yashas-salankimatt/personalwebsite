import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function wells(props) {
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
					Creating Wellk Residence Hall 3D Model
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/cad/apartment_models/wells">
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
						src="/assets/images/projects/cad/apartment_models/WellsModel.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						After seeing the scale of Mosher hall, I decided that it was too
						small for me and that there was a much better option in the Wells
						Residence halls, so I decided to model a dorm in Wells, but this
						time using Fusion 360 with its optimization for parts and overall
						more features. One mistake I made during both the Mosher and Wells
						models was that I chose to use the floor plan that was provided to
						me by the university just as a guide for measurements. This made the
						entire process of creating the model much longer and more arduous as
						can be seen in the time lapse below. Regardless, the model ended up
						looking decently okay, as can be seen below.
					</a>
					<a
						className={"text-xl font-semibold font-sans mt-4 " + textColor}
					></a>
					<Link href="https://www.youtube.com/watch?v=P78hWBFILPs">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Wells Hall 3D Model Time Lapse
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default wells;
