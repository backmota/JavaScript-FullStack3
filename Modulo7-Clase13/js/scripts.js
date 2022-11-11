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

//Evento change
/*
Se produce después de que se haya modificado un elemento del formulario. Para los campos de texto o textarea, el evento no se producirá cada vez que se introduzca un carácter, sino cuando se pierda el enfoque, lo que no siempre es conveniente. Por ejemplo, mientras estás escribiendo algo en un campo de texto no hay ningún evento, pero tan pronto como se pierda el enfoque, se producirá el evento change. Para otros elementos, como select, casillas de verificación y botones de radio, el evento change se activa inmediatamente cuando se selecciona un valor.
*/

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

setOutput();

select.addEventListener("change", setOutput);

function setOutput() {
	const selectedOptionValue = select.value;
	const selectedOptionIndex = select.selectedIndex;
	const selectedOptionText = select.options[selectedOptionIndex].text;

	textOutput.textContent = selectedOptionText;
  	valueOutput.textContent = selectedOptionValue;
}

//Evento input
/*Ocurre sólo en los campos de texto y textarea, y se crea cada vez que se cambia el valor de un elemento, sin esperar a que se pierda el enfoque. En la práctica, input es el evento más importante para trabajar con los campos de texto de los formularios.*/

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
	console.log("Lllamada de la función");
	output.textContent = event.currentTarget.value;
});






