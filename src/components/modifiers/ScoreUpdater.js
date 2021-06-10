import React, { useState } from "react";
import axios from "axios";

import messageTimer from "../../utils/messageTimer";

let timerId;

const ScoreUpdater = () => {
	const [message, setMessage] = useState("");
	const [btnDisabled, setBtnDisabled] = useState(false);

	const onButtonClick = async () => {
		try {
			if (btnDisabled) return;
			setBtnDisabled(true);
			await axios.patch("https://leetcode-rating.herokuapp.com/update-scores");
			setBtnDisabled(false);
		} catch (error) {
			if (error.response) {
				timerId = messageTimer(
					timerId,
					error.response.data.message,
					setMessage
				);
			} else {
				timerId = messageTimer(
					timerId,
					"Update of all users may take up to 5 minutes",
					setMessage
				);
			}
			setBtnDisabled(false);
		}
	};

	return (
		<div className="ui form">
			<div className="field">
				<p className="modifier-description">
					Only one update of scores in one hour is allowed
				</p>
			</div>
			<div
				className={`ui inverted ${btnDisabled ? "loading" : ""} submit button `}
				onClick={onButtonClick}
			>
				Update scores
			</div>
			<div>
				<p style={{ marginTop: "10px" }} className="modifier-description">
					{message}
				</p>
			</div>
		</div>
	);
};

export default ScoreUpdater;
