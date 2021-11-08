import React, { useState } from "react";

function ImageGallery({ images, height, width }) {
	const [i, setI] = useState(0);

	return (
		<div className="flex flex-row">
			<div
				className="cursor-pointer h-full self-center text-center justify-center text-5xl font-bold font-sans"
				onClick={() => {
					setI(i - 1 >= 0 ? i - 1 : 0);
				}}
			>
				{"\u2b9c"}
			</div>
			<img
				src={images[i]}
				alt="image gallery"
				width="auto"
				height="auto"
				className="max-h-75vh max-w-30vw"
			/>
			<div
				className="cursor-pointer h-full self-center text-center justify-center text-5xl font-bold font-sans"
				onClick={() => {
					setI(i + 1 < images.length ? i + 1 : images.length - 1);
				}}
			>
				{"\u2b9e"}
			</div>
		</div>
	);
}

export default ImageGallery;
