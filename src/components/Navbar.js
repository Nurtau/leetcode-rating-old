import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [path, setPath] = useState(window.location.pathname);

	const onLinkClick = (newPath) => setPath(newPath);

	return (
		<div
			className="ui container"
			style={{ marginBottom: "3vh", marginTop: "1vh" }}
		>
			<div className="ui inverted secondary menu">
				<div className="right menu">
					<Link
						to="/"
						className={`item ${path === "/" ? "active" : ""}`}
						style={{ fontSize: "18px", marginRight: "3px" }}
						onClick={() => onLinkClick("/")}
					>
						Leaderboard
					</Link>
					<Link
						to="/settings"
						className={`item ${path === "/settings" ? "active" : ""}`}
						style={{ fontSize: "18px" }}
						onClick={() => onLinkClick("/settings")}
					>
						Settings
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
