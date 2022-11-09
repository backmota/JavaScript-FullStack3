const form = document.querySelector(".register-form");

form.addEventListener("submit", registerSubmit);

function registerSubmit(event){
	event.preventDefault();
	const {
		elements: {username, password}
	} = event.currentTarget;

	if(username.value === "" || password.value === ""){
		return console.log("Falta información");
	}

	console.log(`Email: ${username.value}, Password: ${password.value}`);
	event.currentTarget.reset();
}	



/*
form.addEventListener("submit", (event) => {
//https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault
	event.preventDefault();
	const {
		elements: { username, password}
	} = event.currentTarget;
	console.log(`Email: ${username.value}, Password: ${password.value}`);
});
*/