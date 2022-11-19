import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import ExperienceExplorer from "../components/ExperienceExplorer";
import Head from "next/head";

function ExperiencePage() {
	return (
		<div className="overflow-auto">
			<Head>
				<title>Yashas/Experience</title>
			</Head>
			<Menu />
			<div className="flex flex-col m-4">
				<div className="z-10 self-center">
					<Header
						HeaderText="Experience"
						FontColor="text-green-900"
						UnderlineColor="border-green-900"
						UnderlineWeight="12"
					/>
				</div>
				<div>
					<ExperienceExplorer />
				</div>
			</div>
		</div>
	);
}

export default ExperiencePage;
