const JSUser = {
  name: "Catherine",
  age: 21,
  gender: "female",
  fav_color: "blue",
  isLoggedIn: false,
  LastLoggedIn: ["Monday", "Wednesday", "Sunday"],
};

JSUser.greeting = function () {
  console.log("Hello, world!");
};

// console.log(JSUser.greeting); ---> gives o/p-- [Function (anonymous)]
console.log(JSUser.greeting());

JSUser.greetingTwo = function () {
  console.log(`Hello, world!, ${this.name}`);
};
console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());
