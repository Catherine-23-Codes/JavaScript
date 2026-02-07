const temperature = 23;
if (temperature > 30) {
  console.log("its too hot!");
} else {
  console.log("its medium!");
}

// scopes
const score = 200;
if (score > 100) {
  let power = "fly";
  console.log(`user power is:${power}`);
}
// throws an error- power is not defined as power is within inner scope!
console.log(`user power is:${power}`);
