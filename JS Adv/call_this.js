function setuserName(username) {
  //complex DB Calls
  this.username = "cathyyy";
}
function createUser(username, email, password) {
  setuserName(username);
  this.email = email;
  this.password = password;
}

const catherine = new createUser("catherine", "cats123@gmail.com", "329829");
console.log(catherine);
