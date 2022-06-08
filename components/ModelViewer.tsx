import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, Html, useProgress } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Box3, Vector3 } from "three";

function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress} % loaded</Html>;
}

function Model({
	position = [-1, -1, -1],
	rotation,
	objectFilePath,
	scale = 1,
}) {
	const obj = useLoader(OBJLoader, objectFilePath);
	let box3 = new Box3().setFromObject(obj);
	let size = new Vector3();
	box3.getSize(size);
	console.log(size);
	if (position[0] == -1) {
		position = [0, -(size.z / 3) * scale, 0];
	}

	return (
		<primitive
			object={obj}
			position={position}
			rotation={rotation}
			scale={[scale, scale, scale]}
		/>
	);
}

function ModelViewer({
	position = [-1, -1, -1],
	rotation = [-Math.PI / 2, 0, 0],
	objectFilePath,
	autoRotate = true,
	autoRotateSpeed = 1.0,
	ambientLightIntensity = 0.1,
	spotLightPosition = [10, 15, 10],
	spotLightAngle = 0.3,
	spotLightIntensity = 0.2,
	backSpotlight = true,
	stars = true,
	minDistance = 0,
	maxDistance = 5,
	scale = 1,
}) {
	return (
		<div className="w-full h-full bg-black">
			<Canvas>
				<Suspense fallback={<Loader />}>
					<OrbitControls
						minDistance={minDistance}
						maxDistance={maxDistance}
						autoRotate={autoRotate}
						autoRotateSpeed={autoRotateSpeed}
					/>
					{stars && <Stars />}
					<ambientLight intensity={ambientLightIntensity} />
					<spotLight
						position={spotLightPosition}
						angle={spotLightAngle}
						intensity={spotLightIntensity}
					/>
					{backSpotlight && (
						<spotLight
							position={[
								spotLightPosition[0],
								spotLightPosition[1],
								-spotLightPosition[2],
							]}
							angle={spotLightAngle}
							intensity={spotLightIntensity}
						/>
					)}
					<Model
						position={position}
						rotation={rotation}
						objectFilePath={objectFilePath}
						scale={scale}
					/>
				</Suspense>
			</Canvas>
		</div>
	);
}

export default ModelViewer;
