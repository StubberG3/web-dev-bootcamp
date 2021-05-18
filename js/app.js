// Rest Params

// function sum () {
//     console.log(arguments);
// }

// function sum () {
//     return arguments.reduce((total, el) => total + el);
// }

function sum (...nums) { // collect the rest of the values
    return nums.reduce((total, el) => total + el);
}

// note: spread doesn't work with arrow functions
function raceResults (gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`ELSE GOES TO: ${everyoneElse}`);
}