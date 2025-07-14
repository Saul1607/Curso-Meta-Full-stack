// --------------try-catch block-----------

// try {
//     console.log(c + d);
// } catch(err) {
//     console.log('error inesperado'); //Si hubiera algun error en el try, catch. Este se queda
// }                                    // aquí y las siguientes lineas no se detienen
// 
// console.log('This line now runs')
// 
// --------------- throw-----------------------------
// 
// try {
//     throw new Error();
// } catch(err) {
//     console.log(err)
// }
// 
// console.log('This line now runs')

// ----------throw new ReferenceError()-------------

// console.log(a + b);
// console.log('This line is never reached');

try {
    // console.log(a + b)
    throw new ReferenceError();
} catch(err) {
    console.log(err);
    console.log('There was an error');
    console.log('The error was saved in the error log')
}

console.log("The program don't stop");

console.log(typeof(5))