const messageTimer = (timerId, message, setMessage) => {
	clearTimeout(timerId);
	setMessage(message);
	return setTimeout(() => {
		setMessage("");
	}, 7000);
};

export default messageTimer;