// for of

// array with strings=> ["","","",""];
// array with objects=> [{},{},{},{}]

const arr = [1, 2, 3, 4, 5, 6];
for (const val of arr) {
  console.log(val);
}

const greetings = "Hello   world!!";
for (const greet of greetings) {
  console.log(`each char is:${greet}`);
}

//objects-forin loop
//arrays- forof loop
