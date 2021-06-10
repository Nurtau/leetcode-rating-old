import React, { useState, useEffect } from "react";
import axios from "axios";
import ScoreItem from "./ScoreItem";
import Loader from "./Loader";

const ScoreList = () => {
	const [scores, setScores] = useState([]);

	useEffect(() => {
		const getScores = async () => {
			let ratingScores;
			do {
				ratingScores = await axios.get(
					"https://leetcode-rating.herokuapp.com/rating"
				);
			} while (ratingScores.status !== 200);
			setScores(ratingScores.data);
		};
		getScores();
	}, []);

	const scoresToRender = scores.map((scoreObj, index) => {
		return (
			<ScoreItem
				key={scoreObj.id}
				link={scoreObj.link}
				username={scoreObj.username}
				score={scoreObj.score}
				place={index + 1}
			/>
		);
	});

	return (
		<>
			<h1 styles={{ fontSize: "30px" }}>Rating</h1>
			<hr style={{ marginBottom: "30px" }} />
			{scores.length === 0 ? (
				<div style={{ marginTop: "70px" }}>
					<Loader />
				</div>
			) : (
				<>
					<div className="ui inverted relaxed divided list">
						{scoresToRender}
					</div>
				</>
			)}
		</>
	);
};

export default ScoreList;
