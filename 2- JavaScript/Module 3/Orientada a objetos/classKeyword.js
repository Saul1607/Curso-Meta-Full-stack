// Las clases se usan para no hacer tantos objetos
// las funciones no necesitan la palabra function

class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log('Turbo is on!')
    }
}

const car1 = new Car("red", 120);
const car2 = new Car("blue", 150);
console.log(car1);
console.log(car2);