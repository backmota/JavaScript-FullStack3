const output = document.querySelector(".output");
let scrollEventCounter = 0;

document.addEventListener("scroll", () => {
	scrollEventCounter += 1;
	output.textContent = scrollEventCounter;
});