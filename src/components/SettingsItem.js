import React, { useState } from "react";

const SettingsItem = ({ title, children }) => {
	const [isActive, setIsActive] = useState(false);

	const activeClass = isActive ? "active" : "";

	const onItemClick = () => {
		setIsActive(!isActive);
	};

	return (
		<>
			<div

				className={`title ${activeClass}`}
				onClick={onItemClick}
			>
				<i className="dropdown icon"></i>
				{title}
			</div>
			<div
				className={`content ${activeClass}`}
				style={{ marginLeft: "33px" }}
			>
				<p className={`transition ${activeClass}`}>{children}</p>
			</div>
		</>
	);
};

export default SettingsItem;
