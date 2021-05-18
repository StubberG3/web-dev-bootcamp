// DESTRUCTURING

const scores = [50, 60, 70, 80, 90, 95, 99, 100];

// old
const highScore = scores[0];
const secondHighestScore = scores[1];

// new
const [gold, silver, bronze, ...everyElse] = scores;

// OBJECT DESTRUCTURING

const user = {
    email: 'testuser@gmail.com',
    password: 'Password1!',
    firstName: 'Test',
    lastName: 'User',
    birthDate: '5/18/2021',
    born: 1980,
    died: 2021,
    city: 'Philly',
    state: 'PA'
}

const user2 = {
    email: 'testuser2@gmail.com',
    password: 'Password2!',
    firstName: 'Test',
    lastName: 'User2',
    birthDate: '5/18/2022',
    born: undefined,
    city: 'Maple Shade',
    state: 'NJ'
}

// old
// const email = user.email;

// new
// const { email, password, firstName, born: birthYear, died: deathYear } = user;

// add default value
const { city, state, born: bornDate = 'N/A' } = user2;

// PARAM DESTRUCTURING

// function fullName (user) {
//     return `${user.firstName} ${user.lastName}`;
// }

// function fullName (user) {
//     const { firstName = 'First', lastName = 'Last' } = user;

//     return `${firstName} ${lastName}`;
// }

function fullName ({ firstName = 'First', lastName = 'Last' }) {
    return `${firstName} ${lastName}`;
}