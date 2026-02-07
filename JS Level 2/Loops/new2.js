//Map

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const newNums = myNum.map((num) => num + 10);
//console.log(newNums);

/* op 
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

//chaining
const nums = myNum
  .map((num) => num * 10)
  .map((num) => num + 3)
  .filter((num) => num >= 30); //this is referred to as CHAINING
console.log(nums);

/* op 1
[
  10, 20, 30, 40,  50,
  60, 70, 80, 90, 100
]

op2
[
  13, 23, 33, 43,  53,
  63, 73, 83, 93, 103
]

op3
[
  33, 43, 53,  63,
  73, 83, 93, 103
]
*/
