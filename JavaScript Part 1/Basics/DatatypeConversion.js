// number
let score = 23;
console.log(typeof score); //number

//string
let score1 = "33";
console.log(typeof score1); //string
let valueInNumber = Number(score1);
console.log(typeof valueInNumber); //number

//string with numbers
let score2 = "12345yxc";
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); //NaN- not a number

//null values
let temp = null;
console.log(typeof temp);
console.log(temp);
let valueIntNumber3 = Number(temp);
console.log(typeof valueIntNumber3);
console.log(valueIntNumber3);

//undefined
let marks = undefined;
console.log(typeof marks);
console.log(marks);
let valueIntNumber4 = Number(marks);
console.log(valueIntNumber4);

//boolean
let marks2 = true;
console.log(marks2);
console.log(typeof marks2);
let valueIntNumber5 = Number(marks2);
console.log(valueIntNumber5);

//string name
let name = "Catherine";
console.log(name);
console.log(typeof name);
let valueIntNumber = Number(name);
console.log(valueIntNumber);

//boolean
// 1- true 0- false
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// empty string -> gives o/p as false
let test1 = "";
let booleanIsTest = Boolean(test1);
console.log(booleanIsTest);

//string with value -> true
let test2 = "Catherine Infanta loves JS";
let booleanIsTest2 = Boolean(test2);
console.log(booleanIsTest2);

//number as string -> string
let num = 23;
let stringNumber = String(num);
console.log(stringNumber);
console.log(typeof stringNumber);
