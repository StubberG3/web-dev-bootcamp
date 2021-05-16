// setTimeout
// setInterval, clearInterval

// console.log('Hey!');
// setTimeout(() => {
//     console.log('...are you still there?');
// }, 3000)

const id = setInterval(() => {
    console.log(Math.random());
}, 1000);

setTimeout(() => {
    clearInterval(id);
    console.log(`Cleared setTimeout id ${id}`);
}, 5000)