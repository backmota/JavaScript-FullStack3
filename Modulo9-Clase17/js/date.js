//Fecha y hora
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
/*La clase Date abstrae la mayor parte del trabajo con las fechas directamente. Nos permite representar momentos en el tiempo como objetos y manipularlos mediante métodos predefinidos. Utilizando el poder de la clase Date, podemos crear relojes, contadores, calendarios y otros elementos interactivos de interfaz.

Una instancia de un objeto Date es un objeto que representa un punto concreto en el tiempo. Al crear una fecha sin argumentos, devuelve un objeto que almacena la fecha y la hora en el momento de inicialización, es decir, la fecha y la hora actuales. En la transformación de cadena, el objeto devuelve el resultado de una llamada al método toString(), por lo que en el primer registro obtenemos una cadena, y no un objeto.
*/

const date = new Date();

console.log(date);

console.log(date.toString());

//Tiempo Unix
//https://es.wikipedia.org/wiki/GNU
//https://es.wikipedia.org/wiki/Unix
//https://es.wikipedia.org/wiki/Tiempo_Unix
/*Las fechas internas son representadas en milisegundos transcurridos desde la medianoche del 1 de enero de 1970 año en la zona horaria UTC. Para un ordenador esta es la fecha de inicio de todo el tiempo, Tiempo Unix. Por lo tanto, cuando se inicializa una fecha con un número, representa número de milisegundos transcurridos.
*/
const unixTime = new Date(0);

console.log(unixTime);

const unixTimeGoogle = new Date(1234567890000);

console.log(unixTimeGoogle);

console.log(date.getTime()); 
console.log(new Date(1669168127861));


//Fijación de la fecha

const teamMeetingDate = new Date("November 24, 2022 18:30:00");

console.log(Date.parse("November 24, 2022 18:30:00"));

console.log(new Date(1669336200000));

//Al establecer la hora como cadena, se llama internamente al método Date.parse(), que convierte la cadena en un número que es el número de milisegundos. Por ello, el formato de la cadena pasada es muy flexible. Por ejemplo, es posible no especificar el cero para los días y el mes. Veamos algunos ejemplos que conducen al mismo resultado.

new Date("2030-03-16");
new Date("2030-03");
new Date("2018");
new Date("03/16/2030");
new Date("2030/03/16");
new Date("2030/3/16");
new Date("March 16, 2030");
new Date("March 16, 2030 14:25:00");
new Date("2030-03-16 14:25:00");
new Date("2030-03-16T14:25:00");
new Date("16 March 2030");

//Otra forma de crear nuevos objetos es pasar siete números que describen el año, el mes (empezando por 0), el día, las horas, los minutos, los segundos y milisegundos. Sólo los tres primeros son obligatorios.

const march16 = new Date(2030,2,16,14,25,0,0);
console.log(march16);

//Métodos
/*Una instancia de la clase Date tiene muchos métodos para leer y escribir valores de fecha y hora. Los métodos devuelven o asignan el año, el mes, el día del mes o de la semana, la hora, el minuto, el segundo y el milisegundo para cada instancia. Estos datos pueden representarse como una cadena, teniendo en cuenta el calendario o el idioma local.*/
//const date = new Date();
//
// Regrese el día del mes del 1 al 31
console.log("getDate(): ", date.getDate());

// Regrese el día de la semana del 0 al 6
console.log("getDay(): ", date.getDay());

// Regrese los meses del 0 al 11
console.log("getMonth(): ", date.getMonth());

// Regrese el año en 4 cifras
console.log("getFullYear(): ", date.getFullYear());

// Regrese la hora
console.log("getHours(): ", date.getHours());

// Regrese los minutos
console.log("getMinutes(): ", date.getMinutes());

// Regrese los segundos
console.log("getSeconds(): ", date.getSeconds());

// Regrese los milisegundos
console.log("getMilliseconds(): ", date.getMilliseconds());

//Existen versiones equivalentes de estos métodos que devuelven valores en formato UTC (Coordinated Universal Time) en lugar de adaptarse a la zona horaria actual del usuario.

// Regrese el día del mes del 1 al 31
console.log("getUTCDate(): ", date.getUTCDate());

// Regrese el día de la semana del 0 al 6
console.log("getUTCDay(): ", date.getUTCDay());

// Regrese los meses del 0 al 11
console.log("getUTCMonth(): ", date.getUTCMonth());

// Regrese el año en 4 cifras
console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Regrese la hora
console.log("getUTCHours(): ", date.getUTCHours());

// Regrese los minutos
console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Regrese los segundos
console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Regrese los milisegundos

//Setters
//Cualquier cosa que pueda ser leída puede ser escrita, los métodos para escribir también se llaman Getters pero comienzan con el prefijo set. También existe su equivalente en UTC para todos los métodos.

console.log(date);

//date.setMinutes(30);

console.log(date);

date.setFullYear(2040,10,22);

console.log(date);


date.toLocaleTimeString();
console.log(date);


console.log(new Date(1669336200000).toLocaleTimeString());

console.log(date.getTime());


date.toString();
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toTimeString();
// "14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toLocaleTimeString();
// "2:25:00 PM"

date.toUTCString();
// "Sat, 16 Mar 2030 12:25:00 GMT"

date.toDateString();
// "Sat Mar 16 2030"

date.toISOString();
// "2030-03-16T12:25:00.000Z"

date.toLocaleString();
// "3/16/2030, 2:25:00 PM"

date.getTime();
// 1899894300000

