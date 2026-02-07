const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

//similar to array method combining objs
//op---  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = { obj1, obj2 };
//console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
//console.log(obj4);

//o/p-- { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//spread operator
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;
console.log(tinderUser); //{ id: '123abc', name: 'John', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'John', false ]

//collective key value pair using ENTRIES
console.log(Object.entries(tinderUser));
//op-- [ [ 'id', '123abc' ], [ 'name', 'John' ], [ 'isLoggedIn', false ] ]

//to check whether a method exists or not we use, *hasOwnProperty*
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("name"));
console.log(tinderUser.hasOwnProperty("age"));
