import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import ProjectsExplorer from "../components/ProjectsExplorer";

function ProjectPage(props) {
	return (
		<div className="overflow-auto">
			<Menu />
			<div className="flex flex-col m-4">
				<div className=" self-center">
					<Header
						HeaderText="Projects"
						FontColor="text-purple-900"
						UnderlineColor="border-purple-900"
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
