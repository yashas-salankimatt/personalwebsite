import React from "react";
import diy_wooden_plaques from "../pages/project/woodworking/general/diy_wooden_plaques";
import Template_component from "../pages/project/template_component";

const projectsList = {
	Categories: [
		{
			name: "Woodworking",
			Subcategories: [
				{
					name: "General",
					Projects: [
						{
							name: "Creating Wooden Plaques",
							component: Template_component,
						},
					],
				},
			],
		},
	],
};

export default projectsList;
