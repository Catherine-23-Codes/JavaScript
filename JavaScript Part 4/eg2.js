//TYPE 1
function loginUserMessage(username) {
  return `${username} just logged in`;
}
//console.log(loginUserMessage("Catherine"));

//when we dont pass any parameters, we get UNDEFINED not null!
console.log(loginUserMessage()); //undefined just logged in

//TYPE 2
function loginUserMessage1(username) {
  if (username === undefined) {
    // Did the user NOT type a username?
    // === checks value + type.
    console.log("Please enter a valid username!");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("Catherine"));

//TYPE 3
function loginUserMessage1(username) {
  if (!username) {
    console.log("Please enter a valid username!");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("Catherine"));

//TYPE 4
//defining a default value
function loginUserMessage2(username2 = "Esther") {
  if (!username2) {
    console.log("Please enter a valid username!");
    return;
  }
  return `${username2} just logged in`;
}
console.log(loginUserMessage("Catherine")); // value gets overrided..
