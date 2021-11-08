import React from "react";

function ItemElement({ name, selected, bgColor, textColor, hoverColor = "" }) {
	return (
		<div className="cursor-pointer">
			{selected != name && (
				<div
					className={
						"pl-2 pt-1 pb-1 rounded-md hover:text-lg text-base ease-linear transition-all duration-10 " +
						hoverColor
					}
				>
					<a className={"font-semibold font-sans " + textColor}>{name}</a>
				</div>
			)}
			{selected == name && (
				<div className={"pl-2 pt-1 pb-1 rounded-md text-lg " + bgColor}>
					<a className={"font-semibold font-sans " + textColor}>{name}</a>
				</div>
			)}
		</div>
	);
}

export default ItemElement;
