/**
 * FILTER
 * creates a new array with all elements that pass the test
 * implemented by the provided function
 * create a subset of the original array
 */

/**
 * MAP
 * The map() method creates a new array populated with the results of
 * calling a provided function on every element in the calling array.
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

const anime = [
    {
        title: 'RE: Zero',
        score: 90,
        year: 2015
    },
    {
        title: 'Evangelion',
        score: 80,
        year: 2000
    },
    {
        title: 'Cowboy Bebop',
        score: 70,
        year: 1995
    },
    {
        title: 'KON!',
        score: 60,
        year: 1980
    },
    {
        title: 'Pokemon',
        score: 50,
        year: 1970
    }
]

const goodAnime = anime.filter(a => a.score >= 80);
// const goodTitles = goodAnime.map(a => a.title);
const goodTitles = anime.filter(a => a.score >= 80)
    .map(a => a.title);
const badAnime = anime.filter(a => a.score < 80);
const recentAnime = anime.filter(a => a.year >= 1990);
console.table(anime);
// console.table(goodAnime);
// console.table(badAnime);
// console.table(recentAnime);
console.log(goodTitles);
