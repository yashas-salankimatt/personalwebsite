import React from "react";
import SOAR from "../pages/experiences/SOAR";
import nlp_cesg from "../pages/experiences/nlp_cesg";
import tamumake from "../pages/experiences/tamumake";
import engineering_inc from "../pages/experiences/engineering_inc";
import tamuhack from "../pages/experiences/tamuhack";
import urs_research from "../pages/experiences/urs_research";
import survivor_buddy from "../pages/experiences/survivor_buddy";

const experienceList = {
	Categories: [
		{
			name: "Survivor Buddy Research with Dr. Robin R. Murphy",
			component: survivor_buddy,
		},
		{
			name: "Mapping and Localization Research with Prof. Stavros Kalafatis",
			component: urs_research,
		},
		{
			name: "TAMUhack Hardware and Logistics Director",
			component: tamuhack,
		},
		{
			name: "Engineering Incubator Founder",
			component: engineering_inc,
		},
		{
			name: "TAMUmake Hackathon Tech Team Director",
			component: tamumake,
		},
		{
			name: "NLP Research at the Computer Engineering Systems Group",
			component: nlp_cesg,
		},
		{
			name: "SOAR Robotics: Drone Development",
			component: SOAR,
		},
	],
};

export default experienceList;
