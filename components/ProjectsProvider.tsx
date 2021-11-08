import React from "react";
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
				{
					name: "Decorations",
					Projects: [
						{
							name: "Doing the other thing",
							component: Template_component,
						},
					],
				},
			],
		},
	],
};

export default projectsList;
