// function makeMysteryFunc () {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log('CONGRATS, I AM A GOOD FUNCTION!\nYOU WIN A MILLION DOLLARS!!');
//         }
//     }
//     else {
//         return function () {
//             alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS');
//         }
//     }
// }

// const mystery = makeMysteryFunc();

// mystery();

function makeBetweenFunc (min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);

isSenior(40);


// function isBetween (num) {
//     return num >= 50 && num <= 100;
// }

// function isBetween2 (num) {
//     return num >= 1 && num <= 10;
// }