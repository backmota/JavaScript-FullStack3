const form = document.querySelector(".register-form");

console.log(form);

form.addEventListener("submit", (event) => {
//https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault
	event.preventDefault();
	const {
		elements: { username, password}
	} = event.currentTarget;
	console.log(`Email: ${username.value}, Password: ${password.value}`);
});