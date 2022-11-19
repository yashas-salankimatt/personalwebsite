import React from "react";

function Default_preview_component({ textColor, text }) {
	return (
		<div className="p-8 flex flex-col items-center justify-center min-h-full h-100">
			<a
				className={"text-4xl font-sans font-extrabold text-center " + textColor}
			>
				{text}
			</a>
		</div>
	);
}

export default Default_preview_component;
