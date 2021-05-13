// methods are functions that have been added/defined as properties on an object

const math = {
    PI: 3.14159,
    multiply: function (x, y) { // method
        return x * y;
    },
    divide: function (x, y) { // method
        return x / y;
    },
    square: function (x) { // method
        return x * x;
    },
    cube: function (x, y) { // method
        return x ** 3;
    },
    add (x, y) { // method - shorthand
        return x + y;
    },
    subtract (x, y) { // method - shorthand
        return x - y;
    }
}

console.log(math.PI);
console.log(math.multiply(10, 2));
console.log(math.divide(10, 2));
console.log(math.square(10));
console.log(math.add(10, 2));
console.log(math.subtract(10, 2));