// ---------------------forEach---------------------------
// Aunque esto es posible, significa que no has elegido la estructura
// de datos correcta
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result); // ['speed',100,'color','yellow']