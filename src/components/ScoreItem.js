import React from "react";

const ScoreItem = ({ username, link, score, place }) => {
	return (
		<div className="item" style={{fontSize: "19px"}}>
			<div class="content">
				<div class="header" style={{marginBottom:"15px", fontStyle: "italic"}}>{place}</div>
				<div className="ui left floated">
					<a href={link}>{username}</a>
				</div>
			</div>
			<div className="ui right floated">{score} points</div>
		</div>
	);
};

export default ScoreItem;
