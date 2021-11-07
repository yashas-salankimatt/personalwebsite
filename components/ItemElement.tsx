import React from "react";

function ItemElement({ name, selected }) {
	return (
		<div className="cursor-pointer">
			{selected != name && (
				<div className="pl-2 pt-1 pb-1 rounded-md">
					<a className=" text-base font-semibold font-sans">{name}</a>
				</div>
			)}
			{selected == name && (
				<div className="pl-2 pt-1 pb-1 rounded-md bg-gray-400">
					<a className="text-base font-semibold font-sans">{name}</a>
				</div>
			)}
		</div>
	);
}

export default ItemElement;
