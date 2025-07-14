// La variable que se define fuera de la función es global y se puede
// utilizar de nuevo, pero la que está declarada en la función
// solo se podrá usar dentro de esa función porque es local

var num1 = 10;  // Global scope

function score() {        //Local scope
    var num2 = 20;
    console.log(num2);
}


var globalVar = "I'm in the globasl scope";

function scopeTest() {
    var localVar = "I'm scoped to the function";
}