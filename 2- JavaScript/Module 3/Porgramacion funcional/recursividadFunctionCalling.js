// ----------sin recursividad----------------
// function example() {
//    console.log('line one');
//    console.log('line two');
//    console.log('line three');
//    example()                     Bucle infinito
// }

// example();

// ----------------Con recursividad------------
let counter = 3;
function example() {
    console.log(counter);
    counter = counter - 1;
    if(counter === 0) return;
    example()
}

example();