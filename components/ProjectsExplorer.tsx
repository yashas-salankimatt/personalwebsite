import React, { useEffect } from "react";
import projectsList from "./ProjectsProvider";
import ItemElement from "./ItemElement";
import Default_preview_component from "./default_preview_component";
var ReactDOM = require("react-dom");

function ProjectsExplorer(props) {
	const [categorySelected, setCategorySelected] = React.useState("");
	const [categoriesIndex, setCategoriesIndex] = React.useState(0);
	const [subcategorySelected, setSubcategorySelected] = React.useState("");
	const [subcategoriesIndex, setSubCategoriesIndex] = React.useState(0);
	const [projectSelected, setProjectSelected] = React.useState("");
	const [projectsIndex, setProjectsIndex] = React.useState(0);
	const [projects, setProjects] = React.useState(projectsList);
	const [previewComponent, setPreviewComponent] = React.useState(
		<Default_preview_component
			textColor="text-purple-900"
			text="Click through the hierarchy to find a project to preview here!"
		/>
	);
	const [prevProjectSelected, setPrevProjectSelected] = React.useState("");
	const [prevPreviewComponent, setPrevPreviewComponent] =
		React.useState(previewComponent);
	const [refreshedComponent, setRefreshedComponent] = React.useState("");

	useEffect(() => {
		if (projectSelected == "" && prevProjectSelected != "") {
			// console.log("Refreshing");
			setRefreshedComponent(prevProjectSelected);
			setPreviewComponent(prevPreviewComponent);
			setProjectSelected(prevProjectSelected);
		}
		if (projectSelected != "") {
			// console.log("setting");
			setPrevProjectSelected(projectSelected);
			setPrevPreviewComponent(previewComponent);
		}
		if (projectSelected != "" && projectSelected != refreshedComponent) {
			setPreviewComponent(
				<Default_preview_component
					textColor="text-purple-900"
					text="Click through the hierarchy to find a project to preview here!"
				/>
			);
			setProjectSelected("");
		}
	}, [projectSelected]);

	return (
		projects && (
			<div className="flex flex-col justify-center items-center h-3/4 sm:h-3/4 w-full">
				<div className="z-10 flex flex-col md:flex-row justify-center items-center h-full w-full p-4">
					<div
						style={{
							minHeight: "70vh",
							border: "2px solid rgba(76, 29, 149,1)",
							maxWidth: "90vw",
						}}
						className="mt-8 flex-1 flex flex-col lg:flex-row overflow-auto"
					>
						<div
							className="flex flex-col flex-1 min-w-75vw md:min-w-0"
							style={{
								border: "1px solid rgba(76, 29, 149,1)",
								minHeight: "30vh",
							}}
							onClick={(event) => {
								if (event.target == event.currentTarget) {
									setCategorySelected("");
									setCategoriesIndex(0);
									setSubcategorySelected("");
									setSubCategoriesIndex(0);
									setProjectSelected("");
									setPrevProjectSelected("");
									setProjectsIndex(0);
									setPreviewComponent(
										<Default_preview_component
											textColor="text-purple-900"
											text="Click through hierarchy to find a project to preview here!"
										/>
									);
								}
							}}
						>
							<a
								className="text-3xl font-bold font-sans self-center pt-4 pb-4  text-purple-900"
								style={{ borderBottom: "2px solid rgba(76, 29, 149,1)" }}
							>
								Categories
							</a>
							<ul className="mt-2">
								{projects.Categories.map((category) => {
									return (
										<div
											key={category.name}
											onClick={() => {
												setCategorySelected(category.name);
												setCategoriesIndex(
													projects.Categories.findIndex((cat) => {
														return cat.name == category.name;
													})
												);
												setSubcategorySelected("");
												setSubCategoriesIndex(0);
												setProjectSelected("");
												setPrevProjectSelected("");
												setProjectsIndex(0);
												setPreviewComponent(
													<Default_preview_component
														textColor="text-purple-900"
														text="Click through the hierarchy to find a project to preview here!"
													/>
												);
											}}
										>
											<ItemElement
												name={category.name}
												selected={categorySelected}
												bgColor="bg-purple-200"
												textColor="text-purple-900"
												hoverColor="hover:bg-purple-200"
											/>
										</div>
									);
								})}
							</ul>
						</div>
						<div
							className="flex flex-col flex-1 min-w-75vw md:min-w-0"
							style={{
								border: "1px solid rgba(76, 29, 149,1)",
								minHeight: "30vh",
							}}
							onClick={(event) => {
								if (event.target == event.currentTarget) {
									setSubcategorySelected("");
									setSubCategoriesIndex(0);
									setProjectSelected("");
									setPrevProjectSelected("");
									setProjectsIndex(0);
									setPreviewComponent(
										<Default_preview_component
											textColor="text-purple-900"
											text="Click through the hierarchy to find a project to preview here!"
										/>
									);
								}
							}}
						>
							<a
								className="text-3xl font-bold font-sans self-center pt-4 pb-4  text-purple-900"
								style={{ borderBottom: "2px solid rgba(76, 29, 149,1)" }}
							>
								Subcategories
							</a>
							<ul className="mt-2">
								{categorySelected != "" &&
									projects.Categories[categoriesIndex].Subcategories.map(
										(subcategory) => {
											return (
												<div
													key={subcategory.name}
													onClick={() => {
														setSubcategorySelected(subcategory.name);
														setSubCategoriesIndex(
															projects.Categories[
																categoriesIndex
															].Subcategories.findIndex((subcat) => {
																return subcat.name == subcategory.name;
															})
														);
														setProjectSelected("");
														setPrevProjectSelected("");
														setProjectsIndex(0);
														setPreviewComponent(
															<Default_preview_component
																textColor="text-purple-900"
																text="Click through the hierarchy to find a project to preview here!"
															/>
														);
													}}
												>
													<ItemElement
														name={subcategory.name}
														selected={subcategorySelected}
														bgColor="bg-purple-200"
														textColor="text-purple-900"
														hoverColor="hover:bg-purple-200"
													/>
												</div>
											);
										}
									)}
							</ul>
						</div>
						<div
							className="flex flex-col flex-1 min-w-75vw md:min-w-0"
							style={{
								border: "1px solid rgba(76, 29, 149,1)",
								minHeight: "40vh",
							}}
							onClick={(event) => {
								if (event.target == event.currentTarget) {
									setProjectSelected("");
									setPrevProjectSelected("");
									setProjectsIndex(0);
									setPreviewComponent(
										<Default_preview_component
											textColor="text-purple-900"
											text="Click through the hierarchy to find a project to preview here!"
										/>
									);
								}
							}}
						>
							<a
								className="text-3xl font-bold font-sans self-center pt-4 pb-4 text-purple-900"
								style={{ borderBottom: "2px solid rgba(76, 29, 149,1)" }}
							>
								Projects
							</a>
							<ul className="mt-2">
								{categorySelected != "" &&
									subcategorySelected != "" &&
									projects.Categories[categoriesIndex].Subcategories[
										subcategoriesIndex
									].Projects.map((project) => {
										return (
											<div
												key={project.name}
												onClick={() => {
													setProjectSelected(project.name);
													setProjectsIndex(
														projects.Categories[categoriesIndex].Subcategories[
															subcategoriesIndex
														].Projects.findIndex((proj) => {
															return proj.name == project.name;
														})
													);
													setPreviewComponent(project.component);
												}}
											>
												{/* <a>{project.name}</a> */}
												<ItemElement
													name={project.name}
													selected={projectSelected}
													bgColor="bg-purple-200"
													textColor="text-purple-900"
													hoverColor="hover:bg-purple-200"
												/>
											</div>
										);
									})}
							</ul>
						</div>
					</div>
					<div
						style={{
							height: "70vh",
							border: "3px solid rgba(76, 29, 149,1)",
							borderLeft: "3px solid rgba(76, 29, 149,1)",
						}}
						className="mt-8 flex-1"
					>
						{previewComponent}
					</div>
				</div>
				<div
					className="absolute z-0 bg-gradient-to-b from-purple-100 via-purple-50 to-white md:bg-purple-100 rounded-3xl h-projectsboxsm md:h-99vh w-98vw"
					style={{
						left: "1vw",
						top: "1vh",
					}}
				></div>
			</div>
		)
	);
}

export default ProjectsExplorer;
