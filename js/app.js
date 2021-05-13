const cat = {
    name: 'Kasha',
    color: 'tortoise',
    breed: 'devil',
    meow () {
        console.log("THIS IS ", this);
        console.log(`${this.name} says MEOWWWW`);
    }
}

// cat.meow();

const meow2 = cat.meow;
// window.name = 'Neko';
meow2();

function scream () {
    console.log('AHHHHHHHHHH');
}

scream();