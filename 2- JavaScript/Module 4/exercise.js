// Listing information about dishes available in the Little Lemon Restaurant
const dishes = {
    'Italian Pasta':9.55,
    'Rice With Veggies': 8.65,
    'Chicken With Potatoes': 15.55,
    'Vegetarian Pizza': 6.45,
}

const calc = {
    tax: 1.20,
    withTax: true,
    showDishes: function() {
        if(this.withTax === true) {
            console.log('------Showing dishes with taxes:------')
            for(let dish of Object.keys(dishes)) {
                console.log('Dish:', dish, 'Price: $', dishes[dish] * this.tax)
            }
        } else {
            console.log('------Showing dishes without taxes:------')
            for(let dish of Object.keys(dishes)) {
                console.log('Dish:', dish, 'Price (excl.tax): $', dishes[dish])
            }
        }
    }
}

calc.showDishes();
calc.withTax = !calc.withTax;
calc.showDishes();