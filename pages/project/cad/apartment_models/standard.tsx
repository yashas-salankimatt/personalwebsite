import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";
import ModelViewer from "../../../../components/ModelViewer";

function standard(props) {
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
					Creating Apartment Model at the Standard
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/cad/apartment_models/standard">
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
				<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
					Rotate and pan around the 3D model for this project below!
				</a>
				<div className="ModelViewer">
					<ModelViewer
						objectFilePath={
							"/assets/images/projects/cad/apartment_models/StandardApartmentModel.obj"
						}
						positionOffset={[13, -2, 0]}
						rotation={[0, 0, 0]}
						maxDistance={10}
						autoRotateSpeed={0.75}
						spotLightPosition={[50, 50, 20]}
					></ModelViewer>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/cad/apartment_models/StandardApartmentModel.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						After staying in the Whitecreek apartments for a year during my
						freshman year of college, me and my roommates decided to move into
						off campus apartments, eventually landing on a 6 bedroom, 6 bathroom
						unit in the Standard at College Station. Since I knew there was a
						possibility of me staying in this off campus apartment for more than
						one year, I created this 3D model in order to optimize the layout of
						the room and figure out if certain furniture would fit. The model
						and images above are the model of just the apartment model that I
						created, without the furniture in there.
					</a>
				</div>
			</div>
		</div>
	);
}

export default standard;
