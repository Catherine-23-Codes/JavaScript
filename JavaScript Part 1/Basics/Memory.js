//Memory
//stack , heap

/*
Stack - Primitive
Heap - Non primitive
*/

//STACK- PRIMITIVE
let name = "CatherineInfanta";
let newName = name;
newName = "InfantaCatherine";
console.log(name);
console.log(newName);

// HEAP- NON PRIMITIVE

let studentOne = {
  name: "Catherine",
  age: 21,
  email: "cat123@gmail.com",
  college: "VTU",
};

let studentTwo = studentOne;
studentTwo.email = "catherine@google.com";
//whatever we give reference in heap we get pointed to same value!
console.log(studentOne.email);
console.log(studentTwo.email);
