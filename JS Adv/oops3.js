function usersss(username, isLoggedIn, userType) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  this.userType = userType;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };
}

const userOne = new usersss("catherine", true, "permanent");
userOne.greeting();
