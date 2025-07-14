// -----------------------Mapas---------------------------
// para crear un nuevo mapa se sigue la siguiente estructura
// new Map();
// Un mapa puede sentirse similar a un objeto pero los mapas
// no tienen herencia ni prototipos. Lo hace útil como almacenamiento
// ------------------------Ejemplo 1 -----------------------
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The Third place");

console.log(bestBoxers);

// Para obtener un valor especifico se utiliza el metodo get()
const getBestBoxers1 = bestBoxers.get(1);
console.log(getBestBoxers1);

// ---------------------Conjuntos-------------------------------
// Un conjunto es una coleccion de valores unicos
// new Set();
// Esto significa que podemos usarlo para filtrar rápidamente un 
// array en busca de miembros únicos.
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);