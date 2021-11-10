import React, { useState, useEffect } from "react";
import aboutList from "./AboutMeProvider";
import ItemElement from "./ItemElement";
import Default_preview_component from "./default_preview_component";

function AboutMeExplorer(props) {
	const [categorySelected, setCategorySelected] = useState("");
	const [categoryIndex, setCategoryIndex] = useState(0);
	const [about, setAbout] = useState(aboutList);
	const [previewComponent, setPreviewComponent] = useState(
		<Default_preview_component
			textColor="text-red-900"
			text="Click through the hierarchy to find out more about me!"
		/>
	);

	return (
		about && (
			<div className="flex flex-col justify-center items-center h-3/4 sm:h-3/4 w-full">
				<div className="z-10 flex flex-col sm:flex-row justify-center items-center h-full w-full p-4">
					<div
						style={{
							border: "2px solid rgba(127, 29, 29,1)",
							minWidth: "30vw",
							maxWidth: "90vw",
						}}
						className="mt-8 w-5/6 min-h-40vh sm:min-h-70vh sm:w-auto flex-1 flex flex-row overflow-auto"
					>
						<div
							className="flex flex-col flex-1"
							style={{ border: "1px solid rgba(127, 29, 29,1)" }}
							onClick={(event) => {
								if (event.target == event.currentTarget) {
									setCategorySelected("");
									setCategoryIndex(0);
									setPreviewComponent(
										<Default_preview_component
											textColor="text-red-900"
											text="Click through the hierarchy to find out more about me!"
										/>
									);
								}
							}}
						>
							<a
								className="text-3xl font-bold font-sans self-center pt-4 pb-4 text-red-900"
								style={{ borderBottom: "2px solid rgba(127, 29, 29,1)" }}
							>
								Categories
							</a>
							<ul className="mt-2">
								{about.Categories.map((category) => {
									return (
										<div
											key={category.name}
											onClick={() => {
												setCategorySelected(category.name);
												setCategoryIndex(about.Categories.indexOf(category));
												setPreviewComponent(category.component);
											}}
										>
											<ItemElement
												name={category.name}
												selected={categorySelected}
												bgColor="bg-red-200"
												textColor="text-red-900"
												hoverColor="hover:bg-red-200"
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
							border: "3px solid rgba(127, 29, 29,1)",
							borderLeft: "3px solid rgba(127, 29, 29,1)",
							flex: "3.5",
						}}
						className="mt-8"
					>
						{previewComponent}
					</div>
				</div>
				<div
					className="absolute z-0 bg-gradient-to-b from-red-100 via-red-50 to-white rounded-b-3xl h-projectsboxsm md:h-87.5vh w-homeboxsm md:w-98vw"
					style={{
						left: "1vw",
						top: "10vh",
					}}
				></div>
			</div>
		)
	);
}

export default AboutMeExplorer;
