import Menu from "../components/Menu";
import Homepage from "./home";

export default function Home() {
	return (
		<div style={{ overflow: "auto" }}>
			<div className="flex flex-col">
				<Menu />
				<Homepage />
			</div>
		</div>
	);
}
