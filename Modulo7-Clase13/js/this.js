////
//Palabra clave this
/*
Si el callback es una función que utiliza this, por defecto el contexto dentro de ella hará referencia al elemento del DOM del que cuelga el oyente.
*/

const mango = {
  username: "Mango",
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btnJs = document.querySelector(".js-btn");

console.log(btn);

mango.showUsername();

//// ❌ 'this' hará referencia al botón si se utiliza 'showUsername' como callback.
//btnJs.addEventListener("click", mango.showUsername);

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

btnJs.addEventListener("click", mango.showUsername.bind(mango));




