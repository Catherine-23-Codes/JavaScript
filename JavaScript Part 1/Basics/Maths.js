console.log(Math);
// o/p - Object [Math] {}

// try the below one in console too - we'll find alot of diff methods
console.log(Math);

//used to change the sign of the numbers
console.log(Math.abs(-288383));

//used to round off to nearest number - doesn't depend on sign
console.log(Math.round(28.9388382189));

//ceil- used to round off to upper digit
console.log(Math.ceil(93.1883));

//floor- used to round off to lower digit
console.log(Math.floor(24.9938));

//min
console.log(Math.min(2, 4, 5, -6, 1, 0, 2));
//max
console.log(Math.max(2, 4, 5, -6, 1, 0, 2));

// always random gives values b/w-> 0 & 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.random() * 10 + 1); // to get values shifted to left
console.log(Math.floor(Math.random() * 10 + 1)); // to get values b/w 1-9

const min = 10;
const max = 29;

//formula- to get range of numbers
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
