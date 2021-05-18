// spread ES6
// convert iterables into separate arguments

// const nums = [1, 2, 3, 4, 5];

// console.log(Math.max(...nums));

// console.log(nums);
// console.log(...nums);

// console.log('hello');
// console.log(...'hello'); // pass in as separate characters

// spread array(s) into another array
// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt'];

// const allPets = [...cats, ...dogs, 'Hamilton'];

// // spread iterables into an array

// console.log([..."hello"]);

// spread in object literals

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, color: 'black', ...canine };

const dataFromForm = {
    email: 'testuser@gmail.com',
    password: 'password1',
    username: 'testuser'
}

const mergedData = { ...dataFromForm, gender: 'M' };