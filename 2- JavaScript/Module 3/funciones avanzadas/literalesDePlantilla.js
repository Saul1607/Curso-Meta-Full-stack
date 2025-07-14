// Hasta ES6, la única forma de construir cadenas en JavaScript era 
// delimitarlas con comillas simples o dobles:
// 'Hello, World!'
// "Hello, World!"

// ES6 introdujo el uso de caracteres de contracomilla como delimitadores: 
// `Hello, World!`
// Esto es una string de plantilla o literal de plantilla

// Interpolacion de variables
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`);

// Permite incrustar variables directamente entre las comillas sin necesidad
// de usar el operador + y las comillas simples o dobles
console.log(greet + " " + place + " !");

// Las literales de plantilla pueden abarcar varias lineas
console.log(`Hello,
World
!
`);

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`)

// ES5 strings

let noMultiLine = "No multi-line strings in ES5";
console.log("Did you know? " + noMultiLine);

// ES6 multi-line template literals

let multiLine = `
    Using ES6
    backticks,
    multi-line
    strings are
    possible!
`;

console.log(multiLine);

let first = `He said, "Don't you know? ES6, it's got some great features!"`;
let second = `"Wouldn't you want to learn more?", he asked.`;

console.log(`${first} - and I got curious. ${second}`);