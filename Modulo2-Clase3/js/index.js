let type;
let age = 17;


if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"


/*
condición ? expresion_si_la_condición_es_verdadera : expresion_si_la_condición_es_falsa
*/

const validate = age >= 18 ? age == 20 ? "tu edad es 20" : "eres adulto pero tu edad no es 20" : "child";

console.log(validate);

//Instrucciones switch

/*

let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost); // 500



switch (valor) {
  case valor:
    instrucción;
    break;

  case valor:
    instrucción;
    break;

  default:
    instrucción;
}
*/

let cost;
const subscription = "premium";

switch (subscription){
  case "free":
    cost = 0;
    console.log(`El costo de tus membresia es de ${cost}`);
    break;
  case "pro":
    cost = 100;
    console.log(`El costo de tus membresia es de ${cost}`);
    break;
  case "premium":
    cost = 500;
    console.log(`El costo de tus membresia es de ${cost}`);
    break;
  default:
    console.log("Tipo de membresia invalida");      
}

//Ámbito variable (variable scope) -
//Las variables var tienen un ambito mayor pero son peligrosas
//Siempre debemos usar variables con let

const user = "José Juan Mota";
let info = null;

if(true){
  const nickname = "Mota";
  info = nickname;
  console.log(nickname);
  console.log(user);
  //console.log(privateNickname); - No puede leer privateNickName

  if (true) {
    const privateNickname = "El chino";
    console.log(privateNickname);
    console.log(nickname);
    console.log(user);
  }
}

if (true) {
  //console.log(nickname); - Información fuera del bloque
  console.log(`El valor de nickname es ${info} en el bloque c`);
  console.log(user);
}

  //console.log(nickname); - No puede encontrar Nickname
   console.log(`El valor de nickname es ${info}`);

/*Ciclos

Ciclo while — Es un ciclo se ejecuta mientras alguna condición se especifica antes de que su inicio sea verdadero. Esta condición se comprueba antes de que se ejecute el cuerpo del mismo, por lo que es posible que el cuerpo no se ejecute en absoluto si la condición es falsa desde el principio.

while (condition) {
  // código, cuerpo del ciclo (statement)
}
*/

let counter = 9;

while (counter < 10){
  console.log("counter: ", counter);
  counter += 1;
  
}

 
let clientCounter = 18;
const maxClients = 25;

while (clientCounter <= maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}


/* Do...while
Ciclo do - Es un ciclo, en el que la condición se comprueba después de la ejecución del cuerpo del ciclo. De este modo se deduce que el cuerpo siempre se ejecuta al menos una vez.
*/

counter = 10;

do{
  console.log("counter: ", counter);
  counter += 1;
}while (counter < 10)


let password = "";

do {
  password = "default";
  console.log(password);
  //console.log("No tienes contraseña");
  //password = prompt("Introduzca una contraseña de más de 4 caracteres", "");
} while (password.length < 5);

console.log("Introduzca la contraseña: ", password);



/*
Ciclo for

Ciclo for - Es un ciclo, en el que alguna variable cambia su valor desde el valor inicial dado hasta el final en pasos y para cada valor de esta variable el cuerpo del ciclo se ejecuta una vez.

En la mayoría de los lenguajes de programación procedimental se implementa mediante una construcción for, en la que se especifica el contador, el número necesario de iteraciones y el paso en el que se modifica el contador.

for (initialization; condition; post-expression) {
  // statements
}

Los contadores de variables, por tradición, son las letras i, j y k.
*/

for (let i = 0; i <= 20; i +=1 ){
  console.log(i);
}

const target = 3;
let sum = 0;

for(let i=0; i <= target; i+=1){
  sum += 1;
  i = 3;
  console.log(`El valor de i es ${i} y el valor de sum es ${sum}`);
}

console.log(sum);

//Operador break

/*Puede interrumpir el ciclo en cualquier momento. Para eso existe el operador break, que termina el ciclo por completo y pasa el control a la línea que está detrás de su cuerpo.

Encuentre el número 3. En cuanto se cumpla la condición if, el ciclo se detendrá (se interrumpirá)
*/

for (let i = 0; i <= 5; i += 1){
  console.log(i);

  if (i == 3) {
    console.log("Encontramos el número 3, vamos interrumpir el ciclo");
    break;
  }

}

console.log("Registro fuera de ciclo");




