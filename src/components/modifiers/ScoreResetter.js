import React, { useState } from "react";
import axios from "axios";

import "../Settings.css";

import messageTimer from "../../utils/messageTimer";

let timerId;

const ScoreResetter = () => {
	const [key, setKey] = useState("");
	const [message, setMessage] = useState("");
	const [btnDisabled, setBtnDisabled] = useState(false);

	const onButtonClick = async () => {
		if (btnDisabled) return;
		try {
			setBtnDisabled(true);
			await axios.patch(
				"https://leetcode-rating.herokuapp.com/reset-scores",
				{},
				{
					Authorization: key,
				}
			);
			setBtnDisabled(false);
		} catch (error) {
			timerId = messageTimer(timerId, "Wrong API Key", setMessage);
			setBtnDisabled(false);
		}
	};

	return (
		<div className="ui inverted form">
			<div className="fields" style={{ marginBottom: "15px" }}>
				<div className="field">
					<label htmlFor="api-key" id="label-api-key">
						API Key
					</label>
					<input
						type="text"
						id="api-key"
						placeholder="You probably don't know"
						value={key}
						onChange={(e) => setKey(e.target.value)}
					/>
				</div>
			</div>
			<div
				className={`ui inverted ${btnDisabled ? "loading" : ""} submit button `}
				onClick={onButtonClick}
			>
				Reset scores
			</div>
			<div>
				<p style={{ marginTop: "10px" }} className="modifier-description">
					{message}
				</p>
			</div>
		</div>
	);
};

export default ScoreResetter;
