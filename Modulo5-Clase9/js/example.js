//this en las funciones de flecha
/*Las funciones de flecha no tienen su this propio.
 A diferencia de las funciones normales,
  no se puede cambiar el valor de this dentro de una flecha una vez
   que se ha declarado.

El contexto dentro de la flecha se define por el lugar de su declaración,
 no su llamada, y se refiere al contexto de la función parental.

Las funciones de flecha también ignoran la presencia de un modo estricto.
 Si la flecha ha recordado el contexto global, 
 entonces this en ella contendrá una referencia a window independientemente
  de si el script se está ejecutando en modo estricto o no.
*/

function showName(){
  console.log(this.username);
}

const showThis = (object) => {
  console.log(object);
  console.log("this in showThis: ", this);
};

//showThis(); // this in showThis: window

const user = {
  username: "Mango",
};

const fruit = {
  username: "Apple",
};

showThis(user);
showThis(fruit);

user.showName = showName;

user.showName();

user.showContext = showThis;

user.showContext(); // this in showThis: window

/*
Al limitar las funciones de flecha a un contexto constante,
 los motores de JavaScript pueden optimizarlas mejor, 
 a diferencia de las funciones normales en donde el valor this puede cambiarse.

Este ejemplo no es práctico, pero muestra bien cómo funciona el contexto
 de las flechas. El valor del contexto se toma del ámbito parental.
 */

 const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      // Las flechas recuerdan el contexto durante el anuncio,
      // desde el ámbito principal
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};


hotel.showThis();


// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}