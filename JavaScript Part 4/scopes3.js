//Method 1 declaring function- general way
console.log(addOne(7));
function addOne(num) {
  return num + 1;
}

//Method 2 declaring function- using a new variable const
const addTwo = function (num1) {
  return num1 + 3;
};
console.log(addTwo(9));
