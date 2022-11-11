/*
https://cdnjs.com/libraries/lodash.js
https://cdnjs.com/libraries
https://lodash.com/docs/4.17.15
https://lodash.com/docs/4.17.15#throttle
*/
const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const eventCounter = {
  vanilla: 0,
  throttled: 0
};

document.addEventListener("scroll", () => {
  eventCounter.vanilla += 1;
  vanillaOutput.textContent = eventCounter.vanilla;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter.throttled += 1;
    throttledOutput.textContent = eventCounter.throttled;
  }, 300)
);