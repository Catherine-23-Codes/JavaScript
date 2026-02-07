// useful when we have only 1 paramter
function calculateCartPrice(num1) {
  return num1;
}
console.log(calculateCartPrice(2));

//incase of multiple parameters, we use REST(dot)operator ...
function calculateCartPrice1(...num1) {
  return num1;
}
console.log(calculateCartPrice1(200, 300, 400, 100));

//op Collects values into an array -> [ 200, 300, 400, 100 ]
