/*
function function_name(argument) {
	// body...
}
*/

multiply();
sum();

function multiply(x, y) {
	console.log(`Argumentos recibidos: ${x} ${y}`); 
	console.log(`El resultado de la multiplicación es igual a ${x * y}`);
	/*El operador return se usa para pasar un valor del cuerpo de la función al código externo. Cuando el intérprete encuentra return, sale inmediatamente de la función (termina su ejecución), y devuelve el valor especificado al lugar del código donde se llamó a la función.*/
	return x * y;
	
}

function sum(x,y){
	console.log(`Argumentos recibidos: ${x} ${y}`); 
	console.log(`El resultado de la multiplicación es igual a ${x + y}`);
	return x + y;
}


multiply(2,4);
multiply(4,4);
sum(20,30);
sum(40,60);

let result = multiply(2,4);

console.log(result);

result = sum(2,4);
console.log(result);

