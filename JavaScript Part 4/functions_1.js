//function definition

function myName() {
  console.log("C");
  console.log("A");
  console.log("T");
  console.log("H");
  console.log("E");
  console.log("R");
  console.log("I");
  console.log("N");
  console.log("E");
}
myName();

//length of name
function myName2() {
  let name = "CATHERINE";
  console.log(name.length);
}
myName2();

// sum of 2 nos
//here-  number1 & number2 are parameters
function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}
addTwoNumber(3, 8); // we need to pass arguments so that the function works well
addTwoNumber(3, "8"); //JS will think both as strings and combine them
addTwoNumber(3, "c");
addTwoNumber(3, null);
