import React from "react";

const ScoreResetter = () => {
	return (
		<div className="ui inverted form">
			<div className="fields" style={{ marginBottom: "15px" }}>
				<div className="field">
					<label htmlFor="api-key">API Key</label>
					<input
						type="text"
						id="api-key"
						placeholder="You probably don't know"
					/>
				</div>
			</div>
			<div className="ui inverted submit button">Reset scores</div>
		</div>
	);
};

export default ScoreResetter;
