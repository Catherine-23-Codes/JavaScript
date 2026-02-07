/*If statements
if (condition) {
  //condition must be true only then code gets executed
}

if (true) {
  // condition gets executed
}

if (false) {
  // condition doesn't gets executed
}
*/
const userLoggedIn = true;
if (userLoggedIn) {
  console.log("Hello user!");
}

/*
<,>,=,<=,>=,==,!=, ===, !==
*/
if (2 == "2") {
  //Checks only if they are same or not, type doesnt matter!
  console.log("executed code!");
}

if (2 === "2") {
  // checks for datatype too! STRICT EQUAL
  console.log("new code!");
}

if (2 != 3) {
  console.log("Statement is true");
}

if (2 !== 3) {
  console.log("checks for negative too");
}
