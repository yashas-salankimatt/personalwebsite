import React from "react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Link from "next/link";

function Template_component(props) {
	const router = useRouter();

	return (
		<div style={{ overflow: "auto" }} className="flex flex-col max-h-full">
			{router.pathname != "/projects" && <Menu></Menu>}
			<div className="flex flex-col items-center max-w-full p-8">
				<a className="text-3xl font-bold font-sans">Template Component Title</a>
				{router.pathname == "/projects" && (
					<Link href="/project/template_component">
						<a
							target="_blank"
							className="mt-4 text-lg font-semibold font-sans bg-gray-400 p-2 rounded-md"
						>
							Click to open project page in new tab
						</a>
					</Link>
				)}
				<div className="max-w-lg mt-4">
					<img src="/assets/images/RingMilitaryWalk.jpg"></img>
				</div>
				<div className=" max-w-5xl mt-8">
					<a className="text-xl font-normal font-sans mt-4">
						This is where the text for the content of the thing would go.
					</a>
					<a className="text-xl font-normal font-sans mt-4">
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
