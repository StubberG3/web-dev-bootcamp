// DESTRUCTURING

const scores = [50, 60, 70, 80, 90, 95, 99, 100];

// old
const highScore = scores[0];
const secondHighestScore = scores[1];

// new
const [gold, silver, bronze, ...everyElse] = scores;