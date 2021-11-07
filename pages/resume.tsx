import React, { useEffect } from "react";
import { useRouter } from "next/router";

function resume(props) {
	const router = useRouter();

	useEffect(() => {
		router.push(
			"https://drive.google.com/drive/folders/1Kl2E9ovSh4Jc3SCtzujBf4AANwhhYuMa?usp=sharing"
		);
	}, []);

	return <div></div>;
}

export default resume;
