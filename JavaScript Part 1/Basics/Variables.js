// To declare a CONSTANT
const accountId = 16382872;

//To declare a VARIABLE
let accountEmail = "catherine@google.com";
var accountPassowrd = "1264873";

// can declare a var like this but not preferred
accountCity = "Bangalore";

//a var without value gives o/p as "UNDEFINED"
let accountState;

//accountId = 8; //not allowed
accountEmail = "catherine@yahoo.com";
accountPassword = "378373";
accountCity = "San Diego";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/* 1. CONSTANTS
To declare Constant we shd use "const" keyword

2. VARIABLES
To declare variables there are 2 ways, "let" & "var"

NOTE-- Prefer not to use "var" as it has issue of block scope and functional scope

Prefer using "const" and "let"

*/
