import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";

interface Props {}

function NotablePage(props: Props) {
	return (
		<div style={{ overflow: "auto" }}>
			<div className="flex flex-col">
				<Menu />
				<div className=" self-center">
					<Header
						HeaderText="Notable Projects"
						FontColor="text-black-300"
						UnderlineColor="border-black-300"
						UnderlineWeight="12"
					/>
				</div>
			</div>
		</div>
	);
}

export default NotablePage;
