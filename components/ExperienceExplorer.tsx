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
				<div className="flex flex-col sm:flex-row justify-center items-center h-full w-full p-4">
					<div
						style={{
							minHeight: "70vh",
							border: "2px solid black",
							minWidth: "30vw",
							maxWidth: "90vw",
						}}
						className="mt-8 w-5/6 sm:w-auto flex-1 flex flex-row overflow-auto"
					>
						<div
							className="flex flex-col flex-1"
							style={{ border: "1px solid black" }}
							onClick={(event) => {
								if (event.target == event.currentTarget) {
									setCategorySelected("");
									setCategoryIndex(0);
									setPreviewComponent(
										<Default_preview_component
											textColor="text-red-900"
											text="Click through the hierarchy to find out more about my work and experience!"
										/>
									);
								}
							}}
						>
							<a
								className="text-2xl font-bold font-sans self-center pt-4 pb-4 text-green-900"
								style={{ borderBottom: "2px solid black" }}
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
							border: "3px solid black",
							borderLeft: "3px solid black",
							flex: "3.5",
						}}
						className="mt-8"
					>
						{previewComponent}
					</div>
				</div>
			</div>
		)
	);
}

export default ExperienceExplorer;
