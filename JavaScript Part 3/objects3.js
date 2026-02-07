// College Student Object
const student = {
  name: "Catherine",
  usn: "1IS23AI045",
  branch: "AI & ML",
  year: 2,
  cgpa: 8.7,
  isHosteller: true,

  // Method (function inside object)
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

// Accessing values
console.log(student.name); // Catherine
console.log(student.cgpa); // 8.7

// Calling method
student.greet();
