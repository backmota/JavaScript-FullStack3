/*
Debounce
La recepción debounce asegura que la función sólo será llamada si hay una pausa de N milisegundos entre eventos. Por ejemplo, mientras el usuario se desplaza por la página, la función no será llamada, pero en cuanto el usuario deje de desplazarse, la función será llamada después de 300 milisegundos. Si el desplazamiento se reanuda antes de 300 milisegundos después de la pausa, no se llamará a la función.
*/

const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const debouncedOutput = document.querySelector(".output.debounced");
const leadingOutput = document.querySelector(".output.leading");
const eventCounter = {
  vanilla: 0,
  throttled: 0,
  debounced: 0,
  leading: 0,
};

document.addEventListener("scroll", () => {
	eventCounter.vanilla += 1;
	vanillaOutput.textContent = eventCounter.vanilla;
});

document.addEventListener("scroll", _.throttle(() => {
	eventCounter.throttled += 1;
	throttledOutput.textContent = eventCounter.throttled;
	} ,300));
//https://lodash.com/docs/4.17.15#debounce
document.addEventListener(
  "scroll",
  _.debounce(() => {
    eventCounter.debounced += 1;
    debouncedOutput.textContent = eventCounter.debounced;
  }, 1000)
);

//Leading debounce
//En la práctica, el modo leading se puede utilizar, por ejemplo, cuando se quiere enviar una solicitud al servidor la primera vez que se hace clic en el botón y luego ignorar todos los clics posteriores hasta una pausa. En el ejemplo, debounce se implementa en ambos modos para el evento scroll.

document.addEventListener(
	"scroll",
	_.debounce(
		() => {
			eventCounter.leading += 1;
			leadingOutput.textContent = eventCounter.leading;
		}
		,300,{ trailing: false, leading: true}));

