import React from "react";

interface Props {
	HeaderText: string;
	FontColor: string; // must be a tailwind correct color
	UnderlineColor: string; // must be a tailwind correct color
	UnderlineWeight: string; // must be a tailwind correct weight
}

function Header({
	HeaderText,
	FontColor,
	UnderlineColor,
	UnderlineWeight,
}: Props) {
	return (
		<div className="flex">
			<p
				className={
					"text-6xl md:text-7xl font-bold font-sans h-24 " +
					FontColor +
					" " +
					UnderlineColor
				}
				style={{ borderBottomWidth: UnderlineWeight + "px" }}
			>
				{HeaderText}
			</p>
		</div>
	);
}

export default Header;
