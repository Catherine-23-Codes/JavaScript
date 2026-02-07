//Basic syntax

// //EXPLICIT RETURN - using return keyword!
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(5, 8));

/* ways to print the result
const result = addTwo(5, 9);
console.log(result);
num1,num2 parameters can also be passed! */

//IMPLICIT RETURN

const addTwoValues = (num1, num2) => num1 + num2; // no need to use return statement and {}

//console.log(addTwoValues(2, 6));
const result = addTwoValues(3, 5);
console.log("result:", result);

/* NOTES

1) whenever we use {} return statement is must! 
2) whenever we dont use {} and directly write in 1 line we just enclose parameters with ()
*/

// incase of objects also we use key value enclosed with ()

const Name = () => ({
  user_fullname: "Vinaya",
}); // incase of objects also we use key value enclosed with ()
console.log(Name());
