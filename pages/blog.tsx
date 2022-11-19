import React, { useEffect } from "react";
import { useRouter } from "next/router";

function blog(props) {
	const router = useRouter();

	useEffect(() => {
		router.push("/projects");
	}, []);
	return <div></div>;
}

export default blog;
