import Menu from "../components/Menu";
import Homepage from "./home";
import Head from "next/head";

export default function Home() {
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
