const user2 = {
  username: "vinaya",
  LoggedIn: "false",
  UserType: "temporary",

  getUserDetails: function () {
    //console.log(`username: ${this.username}`);
    console.log(this); //current context gets printed
  },
};
//console.log(user2.username);
//console.log(user2["UserType"]);
console.log(user2.getUserDetails());
console.log(this); //global context op-- {}
