//while loop synatx
// while (condition) {}

let index = 0; //const means: This variable’s value can never change after it’s created.
//so we use let
while (index <= 10) {
  console.log(`value of index is:${index}`);
  //index = index + 2; //even numbers
  index++; //all numbers
  index = index + 5;
}

//example using arrays
let myArray = ["C", "Java", "Python", "C++", "PHP"];
let arr = 0;
while (arr < myArray.length) {
  console.log(`value is:${myArray[arr]}`);
  arr++; // arr=arr+1;
}
