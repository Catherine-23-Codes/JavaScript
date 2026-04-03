//constructor function - 'new' keyword
// new keyword is used to create new context

//const promiseOne = new Promise();
//const date = new Date();

function userDetails(username, isLoggedIn, userType) {
  ((this.username = username),
    (this.isLoggedIn = isLoggedIn),
    (this.userType = userType));

  // return this; w / w/o return this itll give the op
}
//w/o new keyword may lead to overriding
const userOne = userDetails("catherine", true, "permanent");
//using new keyword
const userOne1 = new userDetails("catherine", true, "temporary");
const userTwo = new userDetails("vinaya", false, "temporaray");
console.log(userOne);

//step1: as soon as we use **new** keyword, an empty obj called instance gets created!
//step2: constructor function gets called coz of new keyword
//step3: arguments gets injected thru new keyword
