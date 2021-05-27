import React from "react";
import ScoreList from "./ScoreList";

const App = () => {
	return (
		<div
			className="ui inverted segment"
			style={{ padding: "15px", minHeight: "100vh", borderRadius: "0px" }}
		>
			<div className="ui inverted container">
				<ScoreList />
			</div>
		</div>
	);
};

export default App;
