function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}
const result = addTwoNumber(2, 2);
console.log(result); //gives op- undefined

// ways to return result
//1.creating a new var and storing result, then returning result
function addTwoNumber(number1, number2) {
  let result1 = number1 + number2;
  return result1; //anything after return statement nothing gets printed!
}
const result1 = addTwoNumber(2, 9);
console.log("Result1 is:", result1);

//2. using return as only the way to give op
function addTwoNumber2(number1, number2) {
  return number1 + number2;
}
const result2 = addTwoNumber2(3, 1);
console.log("result2:", result);
