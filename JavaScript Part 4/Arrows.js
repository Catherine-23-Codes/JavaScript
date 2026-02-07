const user = {
  username: "catherine",
  price: 399,

  welcomeMessage: function () {
    //console.log(`${username}, welcome to our website!`); //we dont get op as username if outside the scope!
    console.log(`${this.username}, welcome to our website!`);
    console.log(this);
  },
};

//user.welcomeMessage();

//change of values
//user.username = "john doe";
//user.welcomeMessage();

console.log(this); //op {} no context in global so gives empty

//Interview POV -- object inside browser is called as Window object
