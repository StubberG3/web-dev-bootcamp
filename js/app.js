// arrow function practice

const square = (x) => {
    return x ** 2; // x * x
}

const add = (x, y) => { return x + y };

// console.log(add(1, 1));
// console.log(square(4, 4));

const rollDie = () => { return Math.floor(Math.random() * 6 + 1) };

console.log(rollDie());

const sayCheese = name => { return console.log(`Say cheese, ${name}!`) };

sayCheese('Gregg');