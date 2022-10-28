const car = {
	color: "red",
	speed: 0,
	startEngine(){
		console.log("El motor se encendio");
	},
	moveUp(){
		console.log("El carro dio un paso hacía adelante");
		this.speed = 5
	},
	rever(){

	},
	pedalBreak(){
		console.log("El carro redujo su velocidad");
	},
	stop(){

	},
	showSpeed(){
		console.log(`${this.speed}km/h`);
	},
	
};

car.startEngine();
car.showSpeed();
car.moveUp();
car.showSpeed();