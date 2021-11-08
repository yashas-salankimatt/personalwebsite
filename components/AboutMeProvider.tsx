import React from "react";
import School from "../pages/about_me/school";
import EngineeringInterests from "../pages/about_me/engineering_interests";
import Skills from "../pages/about_me/skills";
import PersonalInterests from "../pages/about_me/personal_interests";

const aboutList = {
	Categories: [
		{
			name: "School",
			component: School,
		},
		{
			name: "Engineering Interests",
			component: EngineeringInterests,
		},
		{
			name: "Personal Interests and Hobbies",
			component: PersonalInterests,
		},
		{
			name: "Skills and Technologies",
			component: Skills,
		},
	],
};

export default aboutList;
