import { useRouter } from "next/router";
import React, { useEffect } from "react";

function proprio(props) {
	const router = useRouter();

	useEffect(() => {
		router.push(
			"https://proprio.notion.site/Proprio-Robotics-Making-Robotics-Automation-Available-for-All-2e969e20f0ce4cd4b6e304d9c833edc4"
		);
	}, []);

	return <div></div>;
}

export default proprio;
