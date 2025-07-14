// Programacion funcional
var shoes = 100;
var stateTax = 1.1;
function totalPrice(price, tax) {
    return price * tax;
}
var toPay = totalPrice(shoes, stateTax);
console.log(toPay);

// ejemplo

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);