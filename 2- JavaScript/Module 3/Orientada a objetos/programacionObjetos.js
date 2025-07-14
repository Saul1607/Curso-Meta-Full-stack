// Los cuatro principios fundamentales de la programación orientada
// a objetos son la herencia, la encapsulación, la abstracción
// y el polimorfismo.


// Herencia:
// class Animal {... code here ....}
// class Mammal extends Animal {... code here ...}
// class Elephant extends Mammal {... code here ...}

// Encapsulación:
// "abc".toUpperCase()
// En este ejemplo yo uso la función incluso si no sé
// como funciona, pero no tengo que preocuparme de lo que hace
// solo que funcione y no rompa mi codigo. La encapsulación 
// consiste en no tener acceso o no preocuparse por cómo funciona
//  internamente una implementación.

// Abstracción:
// La abstracción consiste en extraer el concepto de lo que estás 
// intentando hacer, en lugar de tratar con una manifestación 
// específica de ese concepto. 

// Polimorfismo:
// la misma función produciendo diferentes resultados,basados 
// en el contexto en el que se utiliza.
// Se comporta de forma diferente en función del contexto.

// --------------------Ejemplo polimorfismo--------------------
class Bird {
    useWings() {
        console.log("Flying!");
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings();
        console.log("Barely flapping!");
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

// -----------------------------------------------------------

 // Ejemplo 1
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total Price: ', calculation)
    }
}
purchase1.totalPrice();

// Ejemplo 2
var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total Price: ', calculation)
    }
}
purchase2.totalPrice();

// Ejemplo 3 usando this
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price: ', calculation)
    }
}
purchase1.totalPrice();

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price: ', calculation)
    }
}
purchase2.totalPrice();