import React, { useEffect } from "react";
import projectsList from "./ProjectsProvider";
import ItemElement from "./ItemElement";
import Default_preview_component from "./default_preview_component";

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

	return (
		projects && (
			<div className="flex flex-col justify-center items-center h-3/4 sm:h-3/4 w-full">
				<div className="flex flex-col sm:flex-row justify-center items-center h-full w-full p-4">
					<div
						style={{
							minHeight: "70vh",
							border: "2px solid purple",
							maxWidth: "90vw",
						}}
						className="mt-8 flex-1 flex flex-row overflow-auto"
					>
						<div
							className="flex flex-col flex-1"
							style={{ border: "1px solid purple" }}
							onClick={(event) => {
								if (event.target == event.currentTarget) {
									setCategorySelected("");
									setCategoriesIndex(0);
									setSubcategorySelected("");
									setSubCategoriesIndex(0);
									setProjectSelected("");
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
								className="text-2xl font-bold font-sans self-center pt-4 pb-4  text-purple-900"
								style={{ borderBottom: "2px solid black" }}
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
												textColor="text-black"
											/>
										</div>
									);
								})}
							</ul>
						</div>
						<div
							className="flex flex-col flex-1"
							style={{ border: "1px solid purple" }}
							onClick={(event) => {
								if (event.target == event.currentTarget) {
									setSubcategorySelected("");
									setSubCategoriesIndex(0);
									setProjectSelected("");
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
								className="text-2xl font-bold font-sans self-center pt-4 pb-4  text-purple-900"
								style={{ borderBottom: "2px solid black" }}
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
														textColor="text-black"
													/>
												</div>
											);
										}
									)}
							</ul>
						</div>
						<div
							className="flex flex-col flex-1"
							style={{ border: "1px solid purple" }}
							onClick={(event) => {
								if (event.target == event.currentTarget) {
									setProjectSelected("");
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
								className="text-2xl font-bold font-sans self-center pt-4 pb-4 text-purple-900"
								style={{ borderBottom: "2px solid black" }}
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
													textColor="text-black"
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
							border: "3px solid purple",
							borderLeft: "3px solid purple",
						}}
						className="mt-8 flex-1"
					>
						{previewComponent}
					</div>
				</div>
			</div>
		)
	);
}

export default ProjectsExplorer;
