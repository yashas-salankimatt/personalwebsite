import React from "react";
import ModelViewer from "../../../components/ModelViewer";

function Template_component(props) {
	return (
		<div className=" h-screen">
			<ModelViewer
				objectFilePath={"/assets/CNC2.0.obj"}
				// autoRotate={false}
				// rotation={[0, 0, 0]}
				scale={4}
				autoRotateSpeed={0.5}
			></ModelViewer>
		</div>
	);
}

export default Template_component;
