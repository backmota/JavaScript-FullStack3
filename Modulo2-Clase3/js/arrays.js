/*
Array - Es una estructura de datos para almacenar y manipular una colección de valores indexados. Se utiliza para almacenar colecciones ordenadas de datos, por ejemplo, listas de estaciones, productos, clientes de hoteles, etc.
*/

const clients = ["Mango","Poly", "Ajax"];

console.log(clients);
console.log(clients[1]);
console.log(clients[0]);
console.log(clients[5]);

clients[0] = "kiwi";
console.log(clients[0]);
console.log(clients);

const lastElementIndex = clients.length -1;
console.log(`El ultimo index del array clients es ${lastElementIndex}`);
console.log(clients[2]);