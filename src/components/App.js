import React from "react";
import ScoreList from "./ScoreList";

const App = () => {
	return (
		<div className="ui inverted segment">
			<div
				className="ui inverted container"
				style={{ padding: "30px", minHeight: "100vh", borderRadius: "0px" }}
			>
				<ScoreList />
			</div>
		</div>
	);
};

export default App;
