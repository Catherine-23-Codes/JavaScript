//Singleton object declaration
const tinderUser = new Object();
//console.log(tinderUser);

//Non-singleton object
const tinderUser2 = {};
//console.log(tinderUser2);

tinderUser.id = "123abc";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

//o/p-- { id: '123abc', name: 'John', isLoggedIn: false }

const WtspUser = {
  name: "sandy",
  email: "unknown123@gmail.com",
  fullname: {
    userfullname: {
      firstname: "John",
      lastname: "Doe",
    },
  },
};
//accessing obj elems using NESTING
console.log(WtspUser.fullname);
console.log(WtspUser.fullname.userfullname.lastname);
