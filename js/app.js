// map
// map data into a newly-copied array
// transform all info in current array into a new array

const texts = ['rofl', 'lol', 'omg', 'ttyl'];
// const caps = texts.map(function (t) {
//     return t.toUpperCase();
// });

// texts: ["rofl", "lol", "omg", "ttyl"]
// caps: ["ROFL", "LOL", "OMG", "TTYL"]

const caps = texts.map(function (text) {
    return text.toUpperCase();
});

console.log(texts);
console.log(caps);