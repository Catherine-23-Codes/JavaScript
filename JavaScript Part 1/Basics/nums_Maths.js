const marks = 33;
console.log(marks);

const balance = new Number(300.7838);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(3));

const newNum = 23.2548483382782;
console.log(newNum.toPrecision(6));

const hundreds = 100000;
console.log(hundreds.toLocaleString()); //USA format
console.log(hundreds.toLocaleString("en-IN")); //Indian number system format
