import React, { useState, useEffect } from "react";
import experienceList from "./ExperienceProvider";
import ItemElement from "./ItemElement";
import Default_preview_component from "./default_preview_component";

function ExperienceExplorer(props) {
	const [categorySelected, setCategorySelected] = useState("");
	const [categoryIndex, setCategoryIndex] = useState(0);
	const [experience, setExperience] = useState(experienceList);
	const [previewComponent, setPreviewComponent] = useState(
		<Default_preview_component
			textColor="text-green-900"
			text="Click through the hierarchy to find out more about my work and experience!"
		/>
	);

	return (
		experience && (
			<div className="flex flex-col justify-center items-center h-3/4 sm:h-3/4 w-full">
				<div className="z-10 flex flex-col sm:flex-row justify-center items-center h-full w-full p-4">
					<div
						style={{
							border: "2px solid rgba(6, 78, 59, 1)",
							minWidth: "30vw",
							maxWidth: "90vw",
						}}
						className="mt-8 w-5/6 min-h-50vh sm:min-h-70vh sm:w-auto flex-1 flex flex-row overflow-auto"
					>
						<div
							className="flex flex-col flex-1"
							style={{ border: "1px solid rgba(6, 78, 59, 1)" }}
							onClick={(event) => {
								if (event.target == event.currentTarget) {
									setCategorySelected("");
									setCategoryIndex(0);
									setPreviewComponent(
										<Default_preview_component
											textColor="text-green-900"
											text="Click through the hierarchy to find out more about my work and experience!"
										/>
									);
								}
							}}
						>
							<a
								className="text-3xl font-bold font-sans self-center pt-4 pb-4 text-green-900"
								style={{ borderBottom: "2px solid rgba(6, 78, 59, 1)" }}
							>
								Categories
							</a>
							<ul className="mt-2">
								{experience.Categories.map((category) => {
									return (
										<div
											key={category.name}
											onClick={() => {
												setCategorySelected(category.name);
												setCategoryIndex(
													experience.Categories.indexOf(category)
												);
												setPreviewComponent(category.component);
											}}
										>
											<ItemElement
												name={category.name}
												selected={categorySelected}
												bgColor="bg-green-200"
												textColor="text-green-900"
												hoverColor="hover:bg-green-200"
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
							border: "3px solid rgba(6, 78, 59, 1)",
							borderLeft: "3px solid rgba(6, 78, 59, 1)",
							flex: "3.5",
						}}
						className="mt-8"
					>
						{previewComponent}
					</div>
				</div>
				<div
					className="absolute z-0 bg-gradient-to-b from-green-100 via-green-50 to-white rounded-3xl h-projectsboxsm md:h-99vh w-98vw"
					style={{
						left: "1vw",
						top: "1vh",
					}}
				></div>
			</div>
		)
	);
}

export default ExperienceExplorer;
