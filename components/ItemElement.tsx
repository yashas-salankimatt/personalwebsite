import React from "react";

function ItemElement({ name, selected, bgColor, textColor }) {
	return (
		<div className="cursor-pointer">
			{selected != name && (
				<div className="pl-2 pt-1 pb-1 rounded-md">
					<a className={" text-base font-semibold font-sans " + textColor}>
						{name}
					</a>
				</div>
			)}
			{selected == name && (
				<div className={"pl-2 pt-1 pb-1 rounded-md " + bgColor}>
					<a className={" text-base font-semibold font-sans " + textColor}>
						{name}
					</a>
				</div>
			)}
		</div>
	);
}

export default ItemElement;
