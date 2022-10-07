let lemon = 3;
let water = false;
let sugar = true;
let jar = 1;
let ice = 10;
let glass = 4;

/*
while(lemon >= 4){
	console.log("agua en proceso");
	lemon = lemon - 4;
}


do{
	console.log("agua en proceso");
	lemon = lemon - 4;
}while(lemon >= 4);
*/



//Proceso agua de limon

let validateLemon = lemon >= 4 ? "Cuentas con los suficientes limones, puedes continuar con el proceso" : "No Cuentas con los suficientes limones, puedes continuar con el proceso";

console.log(validateLemon);

if(lemon >= 4){
	lemon = lemon - 4;
	
	console.log("Cuentas con los suficientes limones, puedes continuar con el proceso");
	console.log(`Te quedan ${lemon} limon`);
	if (water == true) {
			console.log(`agregamos agua`);

	}else{
		console.log(`No cuentas con agua`);
	}

}else{
	console.log(`Cuentas con ${lemon} limones y para realizar el agua es necesario 4`);
}

if(lemon >= 4){
	console.log("Cuentas con los suficientes limones, puedes continuar con el proceso");
	if (water == true) {

	}else{
		console.log(`No cuentas con agua`);
	}

}else{
	console.log(`Cuentas con ${lemon} limon y para realizar el agua es necesario 4`);
}