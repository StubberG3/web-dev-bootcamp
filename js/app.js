// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR!!!!!");
// }

// console.log('After?');

function yell (msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.warn('Please pass a string next time!');
    }
}

yell(true);