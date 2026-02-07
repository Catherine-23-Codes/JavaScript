//singleton -- Object.create

//object literals -- in the form of KEY:VALUE pair

const mySymb = Symbol("key1");
const JSUser = {
  name: "Catherine",
  age: 21,
  "full name": "catherine infanta",
  [mySymb]: "myKey1", //interview pov
  gender: "female",
  fav_color: "blue",
  isLoggedIn: false,
  LastLoggedIn: ["Monday", "Wednesday", "Sunday"],
};

//ways to access the obj elem

//1. usual way of obj_name.parameter

console.log(JSUser.age);
console.log(JSUser.name);
console.log(JSUser.isLoggedIn);
console.log(JSUser.LastLoggedIn);

//2. accessing through sqaure brackets as string format

console.log(JSUser["name"]);
console.log(JSUser["LastLoggedIn"]);
console.log(JSUser["full name"]);
console.log(JSUser[mySymb]); //interview pov

//to modify/change values
JSUser.fav_color = "Lavender";
console.log(JSUser);

//freeze obj to not reflect changes
Object.freeze(JSUser);
JSUser.age = 23; //age remains 21 itself no changes
console.log(JSUser);
