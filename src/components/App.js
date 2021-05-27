import React from "react";
import ScoreList from "./ScoreList";

const App = () => {
	return (
		<div
			className="ui inverted segment"
			style={{ padding: "30px", minHeight: "100vh", borderRadius: "0px" }}
		>
			<ScoreList />
		</div>
	);
};

export default App;
