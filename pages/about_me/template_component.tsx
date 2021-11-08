import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function Template_component(props) {
	const router = useRouter();
	const rgbaColor = "rgba(127, 29, 29, .6)";
	const textColor = "text-red-900";
	const buttonColor = "bg-red-200";

	const imageDivStyle = "1rem 1rem 0.25rem " + rgbaColor;

	return (
		<div style={{ overflow: "auto" }} className="flex flex-col max-h-full">
			{router.pathname != "/projects" &&
				router.pathname != "/about" &&
				router.pathname != "/experience" && <Menu></Menu>}
			<div className="flex flex-col items-center max-w-full p-8">
				<a className={"text-3xl font-bold font-sans " + textColor}>
					Template Component Title
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/template_component">
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
					className="max-w-lg mt-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/RingMilitaryWalk.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						This is where the text for the content of the thing would go.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
						fuga quod sit natus ipsam accusamus, accusantium consectetur
						eligendi recusandae perspiciatis vero illum vel. Consequatur ipsam
						explicabo libero voluptatibus, expedita harum!
					</a>
				</div>
			</div>
		</div>
	);
}

export default Template_component;
