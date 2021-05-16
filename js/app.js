// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// });

// for (let el of numbers) {
//     console.log(el);
// }

const testScores = [
    {
        name: 'Gregg',
        score: 90
    },
    {
        name: 'Angela',
        score: 95
    },
    {
        name: 'Stephen',
        score: 100,
    }
]

// Gregg - 90/100

testScores.forEach(function (person) {
    console.log(`${person.name} - ${person.score}/100`);
});