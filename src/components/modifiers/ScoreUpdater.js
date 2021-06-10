import React from "react";

const ScoreUpdater = () => {
	return (
		<div className="ui form">
			<div className="field">
				<p className="modifier-description">Only one update of scores in one hour is allowed (NOT WORKING)</p>
			</div>
			<div className="ui inverted submit button">Update scores</div>
		</div>
	);
};

export default ScoreUpdater;
