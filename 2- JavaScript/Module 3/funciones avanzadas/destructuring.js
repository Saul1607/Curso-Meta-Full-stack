// Obtengo una copia de la propiedad PI de Math
let {PI} = Math;
console.log(PI);

// Solo funcionará si se escribe correctamente la propiedad (PI), Pi o pi no es valido
// let {pi} = Math; // undefined

console.log(PI === Math.PI); // Esto devuelve true

// Puedo modificar aghora esa copia de la propiedad
PI = 1; // Variable destructurada
console.log(PI === Math.PI); //Ahora dará false