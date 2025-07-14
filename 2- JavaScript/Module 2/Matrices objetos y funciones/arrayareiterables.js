// Arrays are iterable

var veggies = ['onion', 'parsley', 'carrot'];

console.log(veggies.length);

console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i])
}

// Strings are iterable, too

var greeting = 'Howdy';

console.log(greeting.length);

console.log(greeting[0]);
console.log(greeting[1]);

for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i])
}

// strings !== arrays

var greet = 'Hello ';
var user = 'Lisa';

// console.log(greet.pop()); // Este no funciona porque es una funcion para arrays

console.log( greet + user ); // Esto funciona con strings
console.log( greet.concat(user) ); // Esto funciona con strings

// Hoja de trucos métodos de strings
var greet = 'Hello, ';
var place = 'World';

greet.length; // retorna la longitud del string (O array)
greet.charAt(0) // 'H' lee el caracter individual
"wo". concat("rl").concat("d"); // 'world' une dos cadenas
"ho-ho-ho".indexOf('h') // 0  Devuelve la posicion de la
"ho-ho-ho".indexOf('o') // 1  posición que coincide con
"ho-ho-ho".indexOf('-') // 2  el carácter
                        // lastindexOf devuelve la ultima coincidencia
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho'] parte la cadena en una matriz de subcadenas
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

// Hoja de trucos métodos de objeto
var car = {};
car.color = 'red'; //Actualiza el valor de la propiedad
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnKey = function() { 
  console.log('engine running'); // Añade un metodo a una propiedad
}                                // la funcion se ouede llamar como car.turnKey()
car.lightsOn = function() {
    console.log("The lights are on.");
}
console.log(car);
car.turnKey();
car.lightsOn();