const myNewArray = [200, 300, 500, 100];
function returnSecondValue(Arrays) {
  return Arrays[8];
}
//passing values in array format
//1. Method 1
//console.log(returnSecondValue(myNewArray));

//2. Method 2
console.log(
  returnSecondValue([100, 200, 300, 400, 500, 400, 600, 200, 700, 800, 800]),
);
