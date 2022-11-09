const clearLogBtn = document.querySelector('[data-action="clear"]');
const logList = document.querySelector(".log-list");
let keypressCounter = 1;

document.addEventListener("keydown", event => {
	event.preventDefault();

	if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
	    console.log("«Ctrl + s» or «Command + s» combo");
	  }

	if ((event.ctrlKey || event.metaKey) && event.code === "KeyI") {
	    console.log("ctrl I");
	  }  

});
	

document.addEventListener("keyup", logMessage);
clearLogBtn.addEventListener("click", reset);

function logMessage({ type, key, code}){
	const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML("afterbegin", markup);

  if(type === "keyup"){
  	incrementKeyPressCounter();
  }

}

function reset(){
	keypressCounter = 1;
	logList.innerHTML = "";
}

function incrementKeyPressCounter(){
	keypressCounter += 1;
}