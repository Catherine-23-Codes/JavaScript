//function format
const myNums = [1, 2, 3];
const total = myNums.reduce(function (acc, cur_val) {
  console.log(`acc:${acc} and current value is:${cur_val}`);
  return acc + cur_val; //acc - accumulator
}, 2); //here we enter accumulator value
//console.log(total);

//arrow function format using reduce
const total1 = myNums.reduce((acc, cur_val) => acc + cur_val, 6);
console.log(total1);
