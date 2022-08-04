import Menu from "../components/Menu";
import Homepage from "./home";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		if (window.location.href.includes("proprio")) {
			router.push(
				"https://proprio.notion.site/Proprio-Robotics-Making-Robotics-Automation-Available-for-All-2e969e20f0ce4cd4b6e304d9c833edc4"
			);
		}
	}, []);

	return (
		<div style={{ overflow: "auto" }}>
			<Head>
				<title>Yashas Salankimatt</title>
			</Head>
			<div className="flex flex-col">
				<Menu />
				<Homepage />
			</div>
		</div>
	);
}
