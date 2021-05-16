/**
 * REDUCE
 * Executes a reducer function on each element of the array,
 * resulting in a single value
 * ways to boil things down: math, comparison, etc
 */

const array1 = [1, 2, 3, 4];

/**
 *
 * @param {*} accumulator - total, holds the sum
 * @param {*} currentValue - each individual element
 * @returns value used for next iteration's accumulator
 */
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// const total = prices.reduce((total, price) => {
//     return total + price;
// });

console.log(prices.reduce((total, price) => total + price));
// expected output: 111.97

// get most expensive price
console.log(prices.reduce((min, price) => {
    return price > min ? price : min;
}));
// expected output: 49.99

// get cheapest price
console.log(prices.reduce((min, price) => {
    return price < min ? price : min;
}));
// expected output: 1.50

const evens = [2, 4, 6, 8];
console.log(evens.reduce((sum, num) => sum + num, 100));
// expected output (0): 20
// expected output (100): 120