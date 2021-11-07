import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import ProjectsExplorer from "../components/ProjectsExplorer";

interface Props {}

function ProjectPage(props: Props) {
	return (
		<div className="overflow-auto">
			<div className="flex flex-col">
				<Menu />
				<div className=" self-center">
					<Header
						HeaderText="Projects"
						FontColor="text-black-300"
						UnderlineColor="border-black"
						UnderlineWeight="12"
					/>
				</div>
				<div>
					<ProjectsExplorer />
				</div>
			</div>
		</div>
	);
}

export default ProjectPage;
