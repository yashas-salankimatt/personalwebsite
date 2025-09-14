import { useRouter } from "next/router";
import React, { useEffect } from "react";

function reflection(props) {
	const router = useRouter();

	useEffect(() => {
		router.push(
			"https://www.notion.so/proprio/Mirror-Rewiring-Your-Brain-for-Peak-Productivity-and-Happiness-2329618527ed80abb0c5d0af794be906?source=copy_link"
		);
	}, []);

	return <div></div>;
}

export default reflection;
