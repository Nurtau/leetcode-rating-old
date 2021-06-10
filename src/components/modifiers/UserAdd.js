import React, { useState } from "react";
import axios from "axios";

import messageTimer from "../../utils/messageTimer";

let timerId;

const UserAdd = () => {
	const [nickname, setNickname] = useState("");
	const [link, setLink] = useState("");
	const [message, setMessage] = useState("");
	const [btnDisabled, setBtnDisabled] = useState(false);

	const onButtonClick = async () => {
		if (btnDisabled) return;
		if (nickname === "" || link === "") {
			return (timerId = messageTimer(
				timerId,
				"The fields must be filled",
				setMessage
			));
		}
		try {
			setBtnDisabled(true);
			await axios.post("https://leetcode-rating.herokuapp.com/add-user", {
				username: nickname,
				link: link,
			});
			timerId = messageTimer(
				timerId,
				"User was successfully added",
				setMessage
			);
			setNickname("");
			setLink("");
			setBtnDisabled(false);
		} catch (error) {
			const { data, status } = error.response;
			console.log(error);
			if (status === 400) {
				timerId = messageTimer(timerId, data.message, setMessage);
			}
			setBtnDisabled(false);
		}
	};

	return (
		<div className="ui inverted form">
			<div className="fields" style={{ marginBottom: "11px" }}>
				<div className="field" style={{ marginBottom: "7px" }}>
					<label htmlFor="nickname">Leaderboard nickname</label>
					<input
						type="text"
						id="nickname"
						required
						value={nickname}
						onChange={(e) => setNickname(e.target.value.trim())}
					/>
				</div>
				<div className="field">
					<label htmlFor="leetcode-link">Link to leetcode</label>
					<input
						type="text"
						id="leetcode-link"
						placeholder="https://leetcode.com/"
						value={link}
						onChange={(e) => setLink(e.target.value.trim())}
					/>
				</div>
			</div>

			<div
				className={`ui inverted ${btnDisabled ? "loading" : ""} submit button `}
				onClick={onButtonClick}
			>
				Add User
			</div>
			<div>
				<p style={{ marginTop: "10px" }}  className="modifier-description">{message}</p>
			</div>
		</div>
	);
};

export default UserAdd;
