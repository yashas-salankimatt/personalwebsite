import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../components/Menu";
import Link from "next/link";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, Html, useProgress } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import ModelViewer from "../../../components/ModelViewer";

function Scene() {
	const obj = useLoader(OBJLoader, "/assets/RobotArm.obj");
	return (
		<primitive
			object={obj}
			position={[0, -0.25, 0]}
			rotation={[-Math.PI / 2, 0, 0]}
		/>
	);
}

function Template_component(props) {
	return (
		<div className=" h-screen">
			<ModelViewer
				objectFilePath={"/assets/RobotArm.obj"}
				// autoRotate={false}
				scale={4}
				autoRotateSpeed={0.5}
			></ModelViewer>
		</div>
	);
}

export default Template_component;
