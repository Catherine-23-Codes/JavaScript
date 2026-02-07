//Destructuring of objects

const course = {
  name: "JS with Love",
  price: "2000",
  instructor: "Akash Pandey",
  duration: "20hours",
};
//Method 1 -- accessing obj elems common method
console.log(course.name);
console.log(course.duration);

//Method 2 -- accessing obj elems -- DESTRUCTURING OF OBJECTS
const { instructor: teacher } = course;
console.log(teacher);

/*Refernce API

1. Randomuser me api:    https://randomuser.me/
2. JSON formatter online :  https://jsonformatter.org/

*/
