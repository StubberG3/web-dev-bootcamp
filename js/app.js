// default params ES6

// old way
// function rollDie (numSides) {
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

// new way
function rollDie (numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

// have default params come after non default params
function greet (person, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${person}${punc}`);
}