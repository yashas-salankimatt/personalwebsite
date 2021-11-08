import React, { useEffect } from "react";
import Menu from "../components/Menu";

function resume(props) {
	return (
		<div className="w-full h-screen">
			<Menu></Menu>
			<iframe width="100%" height="90%" src="/assets/YSResume.pdf"></iframe>
		</div>
	);
}

export default resume;