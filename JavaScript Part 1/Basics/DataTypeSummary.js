/* Primitive Datatype
String
Number
Boolean
null
undefined
Symbol
BigInt
*/

/* Reference (Non Primtive)
Arrays
Objects
Functions

*/

//JavaScript is dynamically typed.

//Numbers
const marks = 100;
const marks1 = 100.22; //there's no special category for decimal values

//Boolean
const isLoggedIn = false;

//null
const temperature = null;

//undefined
let userEmail; // optional way to declare undefined
let user2Email = undefined;

//symbol
const Id = Symbol("123");
const newId = Symbol("123");
console.log(Id == newId);

//BigInt
const bigNumber = 388329123912891249148n;

//Arrays
const MNC = ["Google", "Adobe", "LinkedIn", "Amazon", "Microsoft"];

//objects- defined within curly braces in the form of key-value pairs
let myObj = {
  name: "catherine",
  age: 21,
  gender: "female",
  fav_color: "Blue",
};

//function
const myFunction = function () {
  console.log("hello world!");
};

//To identify the datatype we use a function called "typeof"
console.log(typeof temperature);
