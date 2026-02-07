/*
1)
Global execution context using a variable - *this*

2)
Function execution context 

3) Eval execution context



{} phases 
 1) Memory creation phase/creation phase
 2) Execution phase
*/

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(4, 8);
console.log(result1);
console.log(result2);

/* Execution of the pgm code
1) Global execution using this variable

2) Memory phase
    -> val1- undefined
    -> val2-undefined
    -> addNum - definition
    -> result1 - undefined  
    ->result2 - undefined

3) Execution phase
 val1- 10          // this function gets deleted after execution
 val2-5
 addNum function creates a NEW VARIABLE ENVIRONMENT + EXECUTION THREAD

 ***Memory phase*** 
    val1-undefined    
    val2-undefined
    total-undefined

***Execution phase***
num1-10
num2-5
total-15 -> this gets returned to the GLOBAL FUNCTION
*/
