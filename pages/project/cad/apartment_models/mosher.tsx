import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function mosher(props) {
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
					Creating Mosher Residence Hall 3D Model
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/cad/apartment_models/mosher">
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
						src="/assets/images/projects/cad/apartment_models/mosherModel.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						As the prospect of going to college became more and more real, I
						realized that one of the many major worries I had was about my
						living situation at college and how I would adjust to it. How would
						I decide what stuff I could bring and what furniture would fit? One
						could always tour the residence halls and record videos and take
						measurements, but videos and measurements aren’t totally precise and
						can sometimes lead to buying furniture or appliances that don’t
						quite fit. I then realized that there was an easy solution for this.
						I could just 3D model the living space and then make simple
						rectangular prisms to model appliances and to test if furniture
						would fit or not. This 3D model would also help me get a good feel
						for the scale of the living space without having to ever go there
						and see it in person. I first started by modeling a dorm room in
						Mosher hall, the residence hall that I thought that I would be
						staying in originally. This model was made in SketchUp, and was hard
						to work with after making it, due to the difficulties with creating
						parts and keeping things organized. This first model was
						instrumental in helping me understand how to get started modeling
						the space however, and a picture of it can be found below.
					</a>
					<a className={"text-xl font-semibold font-sans mt-4 " + textColor}>
						Made in Sketchup.
					</a>
					{/* <Link href="https://cesg.tamu.edu/faculty/stavros-kalafatis/">
						<a
							target="_blank"
							className={
								"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							CESG Website
						</a>
					</Link> */}
				</div>
			</div>
		</div>
	);
}

export default mosher;
