// -------------------------forEach------------------------
// El método forEach acepta una funcion que trabajará sobre cada elemento
// del array. El primer parámetro de esa función es el elemento actual del 
// array, y el segundo parámetro (opcional) es el índice.
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

//Muy a menudo, la función que el métodoforEach() necesita utilizar se pasa 
// directamente en la llamada al método, como en este caso:
const veggies = ['oinion', 'garlic', 'potato'];
veggies.forEach(function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

//-------------------------filter---------------------------
// Filtra tus arraysbasándose en un test específico. Se devuelven los 
// elementos del array que superan la prueba.
const nums = [0,10,20,30,40,50];
const result = nums.filter(function(num) {
    return num > 20;
})
console.log(result)

// -----------------------map--------------------------------
// Este método se utiliza para mapear cada elemento del array a otro 
// elemento del array, basándose en el trabajo realizado dentro de la 
// función que se pasa al mapa como parámetro. 
const nums2 = [0, 10, 20, 30, 40, 50];
const result2 = nums2.map(function(num){
    return num / 10;
})
console.log(result2);