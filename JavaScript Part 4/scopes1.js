let a = 10;
const b = 20;
var c = 30;

//console.log(a);
//console.log(b);
//console.log(c);

// { } curly braces denotes SCOPE

let z = 50; //everything outside if is GLOBAL SCOPE
if (true) {
  //everything inside if is BLOCK SCOPE
  let a1 = 10;
  const b1 = 20;
  var c1 = 30; //avoid var as much as possible
}
//console.log(a1); //throws an error
//console.log(b1); //throws an error
console.log(c1); // gives op- 30

let y = 50; //everything outside if is GLOBAL SCOPE
if (true) {
  //everything inside if is BLOCK SCOPE
  let a1 = 10;
  const b1 = 20;
  let y = 60;
  console.log("Inner 'y' value", y);
}
console.log("Outer 'y' value is:", y);
