// El bucle trabaja con tipos de datos iterables, por lo que un for of
// no puede trabajar sobre un objeto

const car = {
    speed:100,
    color:"blue"
}

// for(prop of car) {
//    console.log(prop)          // Uncaught TypeError: car is no iterable
// }

// Las matrices sí son iterables
const colors = ['red', 'orange','yellow'];
for (var color of colors) {
    console.log(color);
}

// Sin embargo el bucle for of se puede ejecutar en matrices para iterar un objeto

// ----------------Object.keys(obj)---------------------
// Devuelve un array de strings donde cada string es una propiedad del objeto
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

// ----------------Object.values(obj)--------------------
// Este método devuelve un array de strings donde cada string es cada valor de 
// cada propiedad de un objeto
const car3 = {
    speed:300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, ''yello']

// ----------------Object.entries(obj)-------------------
// Se obtiene un array de arrays, donde cada elemento del array tiene dos
// miembros, siendo el primero la clave de una propiedad, y el segundo el 
// valor de una propiedad.
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); // [['speed', 400], ['color', 'magenta']]


// -------------------Ejemplo 1---------------------------
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for(const key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key]);
}

// -------------------Ejemplo 2----------------------------
function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
        dynamicKey = 'speed';
    } else {
        dynamicKey = 'color';
    }

    var drone = {
        speed: 15,
        color: 'orange'
    }

    console.log(drone[dynamicKey]);
}

testBracketsDynamicAccess();

// Si se usa el for in en este codigo es más facil
const coche = {
    speed:100,
    color:'azul'
}

for (let key in coche) {
    console.log(key);
}
