import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import AboutMeExplorer from "../components/AboutMeExplorer";

function AboutMePage() {
	return (
		<div className="overflow-auto">
			<Menu />
			<div className="flex flex-col m-4">
				<div className=" self-center">
					<Header
						HeaderText="About Me"
						FontColor="text-red-900"
						UnderlineColor="border-red-900"
						UnderlineWeight="12"
					/>
				</div>
				<div>
					<AboutMeExplorer />
				</div>
			</div>
		</div>
	);
}

export default AboutMePage;
