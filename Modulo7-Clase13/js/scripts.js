const addListenerBtn = document.querySelector('[data-action="add"]');

const removeListenerBtn = document.querySelector('[data-action="remove"]');

const btn = document.querySelector("#btn");

const handleClick = () => {
	console.log("click event listener callback");
};

addListenerBtn.addEventListener("click", () => {
	btn.addEventListener("click", handleClick);
	console.log("click event listener was added to btn");
});
//https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener
removeListenerBtn.addEventListener("click", () => {
	btn.removeEventListener("click", handleClick);
	console.log("click event listener was removed from btn");
});








