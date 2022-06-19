import React from "react";
import Template_component from "../pages/project/template_component";
import door_closer from "../pages/project/highschool/electronics/door_closer";
import light_switch_flipper from "../pages/project/highschool/electronics/light_switch_flipper";
import old_monitor from "../pages/project/highschool/electronics/old_monitor";
import science_bowl_app from "../pages/project/highschool/software/science_bowl_app";
import charging_station from "../pages/project/highschool/woodworking/charging_station";
import workbench from "../pages/project/highschool/woodworking/workbench";
import mosher from "../pages/project/cad/apartment_models/mosher";
import wells from "../pages/project/cad/apartment_models/wells";
import whitecreek from "../pages/project/cad/apartment_models/whitecreek";
import standard from "../pages/project/cad/apartment_models/standard";
import cnc_v1_build from "../pages/project/machinery/cnc_v1/cnc_v1_build";
import cnc_v2_build from "../pages/project/machinery/cnc_v2/cnc_v2_build";
import upgrades_1 from "../pages/project/machinery/cnc_v2/upgrades_1";
import fab_box_build from "../pages/project/machinery/fab_box/fab_box_build";
import brailleiant from "../pages/project/mechatronics/hackathons/brailleiant";
import magic_shelves from "../pages/project/mechatronics/hackathons/magic_shelves";
import light_bars from "../pages/project/mechatronics/misc/light_bars";
import monica from "../pages/project/mechatronics/misc/monica";
import init_progress from "../pages/project/mechatronics/robot_arm/init_progress";
import gearboxes from "../pages/project/mechatronics/robot_arm/gearboxes";
import first_completed_arm from "../pages/project/mechatronics/robot_arm/first_completed_arm";
import PersonalWebsite from "../pages/project/software/web/PersonalWebsite";
import light_up from "../pages/project/woodworking/decorations/light_up";
import mom_bracelet from "../pages/project/woodworking/decorations/mom_bracelet";
import mountains from "../pages/project/woodworking/decorations/mountains";
import plaques from "../pages/project/woodworking/decorations/plaques";
import catch_all_tray from "../pages/project/woodworking/furniture/catch_all_tray";
import shoe_stand from "../pages/project/woodworking/furniture/shoe_stand";
import pull_out_desk_extender from "../pages/project/woodworking/furniture/pull_out_desk_extender";
import love_sign from "../pages/project/woodworking/decorations/love_sign";
import tamuhacksign from "../pages/project/woodworking/decorations/tamuhacksign";
import gradient_descent_435 from "../pages/project/software/class_projects/435_gradient_descent";
import final_proj_315 from "../pages/project/software/class_projects/315_final_proj";
import survivor_buddy from "../pages/project/mechatronics/survivor_buddy/hardware_dev";
import senior_year_final from "../pages/project/mechatronics/survivor_buddy/senior_year_final";
import urs_403 from "../pages/project/software/urs/urs_403";
import urs_404 from "../pages/project/software/urs/urs_404";
import housewarming_gift1 from "../pages/project/woodworking/decorations/housewarming_gift1";

const projectsList = {
	Categories: [
		{
			name: "Mechatronics/Hardware",
			Subcategories: [
				{
					name: "Survivor Buddy Research Project",
					Projects: [
						{
							name: "Survivor Buddy Hardware Development",
							component: survivor_buddy,
						},
						{
							name: "Survivor Buddy 5.0 Final",
							component: senior_year_final,
						},
					],
				},
				{
					name: "Hackathons",
					Projects: [
						{
							name: "Braille-iant: A Braille Printer",
							component: brailleiant,
						},
						{
							name: "Magic Shelves: Item Carousel",
							component: magic_shelves,
						},
						{
							name: "Fab Box: A New Kind of Machine",
							component: fab_box_build,
						},
					],
				},
				{
					name: "Robot Arm",
					Projects: [
						{
							name: "Initial Progress on V1",
							component: init_progress,
						},
						{
							name: "Gearbox and Actuator Design",
							component: gearboxes,
						},
						{
							name: "First Completed Robot Arm",
							component: first_completed_arm,
						},
					],
				},
				{
					name: "Miscellaneous",
					Projects: [
						{
							name: "Creating RGB Light Bar Decorations",
							component: light_bars,
						},
						{
							name: "System to Track Body Kinematics without Cameras",
							component: monica,
						},
					],
				},
			],
		},
		{
			name: "Software",
			Subcategories: [
				{
					name: "Undergraduate Research Scholars",
					Projects: [
						{
							name: "Intro and First Sem Work",
							component: urs_403,
						},
						{
							name: "Second Sem Work, Conclusion",
							component: urs_404,
						},
					],
				},
				{
					name: "Web Dev",
					Projects: [
						{
							name: "Personal Website Development",
							component: PersonalWebsite,
						},
					],
				},
				{
					name: "Notable Class Projects",
					Projects: [
						{
							name: "Parallel Gradient Descent Algorithm",
							component: gradient_descent_435,
						},
						{
							name: "Music Editing and Recommendation API Project",
							component: final_proj_315,
						},
					],
				},
			],
		},
		{
			name: "Machinery",
			Subcategories: [
				{
					name: "CNC V1",
					Projects: [
						{
							name: "Initial Build",
							component: cnc_v1_build,
						},
					],
				},
				{
					name: "CNC V2",
					Projects: [
						{
							name: "Initial Build",
							component: cnc_v2_build,
						},
						{
							name: "Upgrades",
							component: upgrades_1,
						},
					],
				},
				{
					name: "Fab Box",
					Projects: [
						{
							name: "Initial Build",
							component: fab_box_build,
						},
					],
				},
			],
		},
		{
			name: "Woodworking",
			Subcategories: [
				{
					name: "Decorations and Gifts",
					Projects: [
						{
							name: "Intricate LOVE Design",
							component: love_sign,
						},
						{
							name: "TAMUhack Sign",
							component: tamuhacksign,
						},
						{
							name: "Light Up Decoration Gifts",
							component: light_up,
						},
						{
							name: "Mother's Day Bracelet from Brass",
							component: mom_bracelet,
						},
						{
							name: "Mountain Wall Decorations",
							component: mountains,
						},
						{
							name: "Name Plaques made for Friends",
							component: plaques,
						},
						{
							name: "Housewarming Decorations for Family Friends",
							component: housewarming_gift1,
						},
					],
				},
				{
					name: "Furniture",
					Projects: [
						{
							name: "CNC Wooden Catch All Tray",
							component: catch_all_tray,
						},
						{
							name: "CNC Wooden Shoe Stand",
							component: shoe_stand,
						},
						// {
						// 	name: "Pull Out Desk Extender",
						// 	component: pull_out_desk_extender,
						// },
					],
				},
			],
		},
		{
			name: "CAD Modeling",
			Subcategories: [
				{
					name: "Apartment Models",
					Projects: [
						{
							name: "Mosher Dorm Model",
							component: mosher,
						},
						{
							name: "Wells Dorm Model",
							component: wells,
						},
						{
							name: "Whitecreek Apartment Model",
							component: whitecreek,
						},
						{
							name: "Standard Apartment Model",
							component: standard,
						},
					],
				},
			],
		},
		{
			name: "High School",
			Subcategories: [
				{
					name: "Electronics",
					Projects: [
						{
							name: "Automatic Door Closer",
							component: door_closer,
						},
						{
							name: "Automatic Light Switch Flipper",
							component: light_switch_flipper,
						},
						{
							name: "Making a Monitor from an Old Laptop",
							component: old_monitor,
						},
					],
				},
				{
					name: "Software",
					Projects: [
						{
							name: "Science Bowl Points Tracker and Timer- My first Android Studio Project",
							component: science_bowl_app,
						},
					],
				},
				{
					name: "Woodworking",
					Projects: [
						{
							name: "Charging Station for All My Devices",
							component: charging_station,
						},
						{
							name: "Inexpensive Workbench",
							component: workbench,
						},
					],
				},
			],
		},
	],
};

export default projectsList;
