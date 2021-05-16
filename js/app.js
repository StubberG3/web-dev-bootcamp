/**
 * FILTER
 * creates a new array with all elements that pass the test
 * implemented by the provided function
 */

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
/**
 * our callback returns true or false
 * if true, add n to the filtered array
 * @returns {Boolean}
 */
const odds = nums.filter(n => {
    return n % 2 === 1; // [9, 7, 5, 3, 1]
})

const smallNums = nums.filter(n => n < 5); // [4, 3, 2, 1]