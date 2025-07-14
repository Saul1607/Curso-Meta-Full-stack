// If else condition

var result = 30;

if (result > 40) {
    console.log("Congratulations you passed. ")
} else {
    console.log("Unfortunately you did not pass. ")
}

// if, else if, else

var place = 'first';

if (place == 'first'){
    console.log('Gold')
} else if (place == 'second') {
    console.log('Silver')
} else if (place == 'third') {
    console.log('Bronze')
} else {
    console.log('No medal')
}

// switch statement

var place2 = 'first';

switch(place2) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}