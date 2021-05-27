import React from "react";
import "./Winners.css";

const ScoreItem = ({ username, link, score, place }) => {
	let winnerWrapperClass;
	switch (place) {
		case 1:
			winnerWrapperClass = "gold";
			break;
		case 2:
			winnerWrapperClass = "silver";
			break;
		case 3:
			winnerWrapperClass = "bronze";
			break;
		default:
			winnerWrapperClass = "";
	}
	return (
		<div className={`item ${winnerWrapperClass}`} style={{ fontSize: "19px" }}>
			<div class="content">
				<div
					className="header"
					style={{ marginBottom: "15px", fontStyle: "italic" }}
				>
					<p className={winnerWrapperClass}>{place}</p>
				</div>
				<div className="ui left floated">
					<a href={link}>
						<p className={winnerWrapperClass}>{username}</p>
					</a>
				</div>
			</div>
			<div className="ui right floated">{score} points</div>
		</div>
	);
};

export default ScoreItem;
