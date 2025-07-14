const car = {
    engine: true,
    steering: true,
    speed: "slow"
}
const sportsCar = Object.create(car)
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);


// For-in itera en las propiedades del objeto y sus 
// prototipos (propiedades heredadas tambien)
console.log('------ for-in is unrealible ------');
for (prop in sportsCar) {
    console.log(prop)
}
console.log('🤔', "Iterating over object AND its prototype!");


// For-of itera solo en las propiedades del objeto
console.log('------ for-of is reliable------');
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}
console.log('🎯', "Iterating over object's OWN PROPIERTIES only!")