import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import ScoreList from "./ScoreList";
import Settings from "./Settings";

const App = () => {
	return (
		<div
			className="ui inverted segment"
			style={{ padding: "15px", minHeight: "100vh", borderRadius: "0px" }}
		>
			<BrowserRouter>
				<Navbar />
				<Route path="/" exact>
					<div className="ui inverted container">
						<ScoreList />
					</div>
				</Route>
				<Route path="/settings" exact>
					<Settings/>
				</Route>
			</BrowserRouter>
		</div>
	);
};

export default App;
