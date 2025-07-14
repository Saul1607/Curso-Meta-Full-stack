// Sin usar spread (...)
const top3 = ['The Coliseum', 'The Vatican', 'Torre de pizza'];
function showIntinerary(place1, place2, place3){
    console.log('First visit: ' + place1)
    console.log('Then visit: ' + place2)
    console.log('And finnaly visit: ' + place3)
}
showIntinerary(top3[0], top3[1], top3[2]);

// Usando el spread (...)
// spread pasa todos los valores de un array sin tener que escribirlos
showIntinerary(...top3);

// Usando rest
const top7 = [
    "The Coliseum",
    "The Roman Forum",
    "The vatican",
    "Trevi Fountain",
    "The Pantheon",
    "Piazza Venezia",
    "The Palatine Hill"
]

// Destructuramos el array
// const [] = top7;
// Usamos el rest para agarrar las 3 variables que queremos y se usa
// ...secondVisit para crear otro Array con lo que sobra del Array
// Rest
const [first, second, third, ...secondVisit] = top7;

// Unir arrays
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array

// Unir objetos
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = {...flying, ...car};
console.log(flyingCar); // {wings: 2, wheels: 4}

// Añadir miembros a un Array existente
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Convertir una string en array
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// Copiar un objeto o array en otro distinto
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};

car1.speed = 201;

console.log(car1.speed, car2.speed);

const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);