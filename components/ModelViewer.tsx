import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, Html, useProgress } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Box3, Vector3 } from "three";

function Loader() {
	const { progress } = useProgress();
	return (
		<Html center>
			<h1 className=" text-white font-bold font-sans text-xl">
				{progress} % loaded
			</h1>
		</Html>
	);
}

function Model({
	position = [-1, -1, -1],
	positionOffset,
	rotation,
	objectFilePath,
	scale = 1,
}) {
	const [obj, setObj] = useState(useLoader(OBJLoader, objectFilePath));
	const [posState, setPosState] = useState(position);
	const [rotState, setRotState] = useState(rotation);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		let box3 = new Box3().setFromObject(obj);
		let size = new Vector3();
		box3.getSize(size);
		console.log(size);
		if (position[0] == -1) {
			position = [
				(-size.x / 2) * scale + positionOffset[0],
				-(size.z / 3) * scale + positionOffset[1],
				(-size.y / 2) * scale + positionOffset[2],
			];
			setPosState(position);
		}
	}, []);

	useEffect(() => {
		console.log(posState);
		if (posState[0] != -1 && posState[1] != -1 && posState[2] != -1) {
			setLoaded(true);
		}
	}, posState);

	return (
		loaded && (
			<primitive
				object={obj}
				position={posState}
				rotation={rotState}
				scale={[scale, scale, scale]}
			/>
		)
	);
}

function ModelViewer({
	position = [-1, -1, -1],
	positionOffset = [0, 0, 0],
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
	maxDistance = 3,
	scale = 1,
}) {
	const [modelComponent, setModelComponent] = useState(<div></div>);
	const [orbitComponent, setOrbitComponent] = useState(<div></div>);

	useEffect(() => {
		// console.log("3D load");
		setModelComponent(
			<Model
				position={position}
				positionOffset={positionOffset}
				rotation={rotation}
				objectFilePath={objectFilePath}
				scale={scale}
			/>
		);
		setOrbitComponent(
			<OrbitControls
				minDistance={minDistance}
				maxDistance={maxDistance}
				autoRotate={autoRotate}
				autoRotateSpeed={autoRotateSpeed}
			/>
		);
	}, []);
	return (
		<div className="w-full h-full bg-black">
			<Canvas>
				{orbitComponent}
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
				<Suspense fallback={<Loader />}>{modelComponent}</Suspense>
			</Canvas>
		</div>
	);
}

export default ModelViewer;
