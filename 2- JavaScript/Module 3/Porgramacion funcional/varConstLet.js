// ---------------var keyword---------------

// 1. We can acces a var variable before initialization ...
    // ... as long as the var variable is eventually initialized
    // ... anywhere in our code
// console.log(user)

// 2. We can declare and redeclare the same var variable without errors
// var user = "Mary";
// var user = "Joanna";
// var user = "Mark";

// console.log(user);

// var user;

// ------------- let keyword------------------

// 1. We cannot access a let variable before we declare it
// console.log(user); // Error!
// let user;

// 2. We can declare an unassigned variable with let
// let user;
// console.log(user);

// 3. We can't redeclare a let variable
// let user = "Anna";

// 4. But we can re-assign it 
// user = "Anna";
// console.log(user);

// ---------------const keyword------------------

// 1. The const variable must be initialized
// console.log(user); // Error!
// const user;

// 2. We can't acces the const variable before initialization
// console.log(user); // Unexpected token error
// const user = "Andrew";

// 3. We can't re-assing a const variable
// user = "Anna";
