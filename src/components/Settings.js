import React from "react";

import SettingsItem from "./SettingsItem";
import UserAdd from "./modifiers/UserAdd";
import ScoreUpdater from "./modifiers/ScoreUpdater";
import ScoreResetter from "./modifiers/ScoreResetter";

import "./Settings.css";

const modifiers = [
	{
		title: "Add User",
		Form: UserAdd,
	},
	{
		title: "Update Scores",
		Form: ScoreUpdater,
	},
	{
		title: "Reset Scores",
		Form: ScoreResetter,
	},
];

const Settings = () => {


	const renderModifiers = modifiers.map(({ title, Form }) => {
		return (
			<div key={title} style={{ marginBottom: "10px"}}>
				<SettingsItem title={title}>
					<Form/>
				</SettingsItem>
			</div>
		);
	});

	return (
		<div className="ui inverted container">
			<div className="ui inverted accordion">{renderModifiers}</div>
		</div>
	);
};

export default Settings;
