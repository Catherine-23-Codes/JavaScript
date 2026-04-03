// object literal

const user = {
  username: "catherine",
  LoggedIn: "true",
  UserType: "Permanent",
};

//accessing of obj literals
console.log(user.username); //dot notation
console.log(user["UserType"]); //bracket notation

const user2 = {
  username: "vinaya",
  LoggedIn: "false",
  UserType: "temporary",

  getUserDetails: function () {
    console.log(`this.${this.username}`);
  },
};
console.log(user2.username);
console.log(user2["UserType"]);
