const button = document.querySelector(".object");

const eventHandleClick = (event) => {
	console.log("event: ", event);
	console.log("event type: ", event.type);
	console.log("currentTarget: ", event.currentTarget);
};


button.addEventListener("click", eventHandleClick);