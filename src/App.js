import logo from "./logo.svg";
import "./App.css";
import MainRouter from "./components/routing/routers/MainRouter";
import { Router } from "react-router-dom";
import Store from "./components/contexts/Store";

function App() {
	return (
		<Router>
			{/* <Notification /> */}
			<Store>
				<MainRouter />
			</Store>
		</Router>
	);
}

export default App;
