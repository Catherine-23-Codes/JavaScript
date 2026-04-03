# Q. Do JS really have classes?

Yes — JavaScript does have classes, but there’s an important nuance.

In JavaScript, classes were introduced in ECMAScript 2015 (ES6). However, they are not the same as classes in languages like Java or C++.

The key idea:

JavaScript is fundamentally a **Prototype-based language**, not a class-based one.

👉 So when you write a class in JavaScript, it's actually:

1. Syntactic sugar (a cleaner syntax)
2. Built on top of prototypes and inheritance

class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

greet() {
console.log(`Hi, I'm ${this.name}`);
}
}

# OOPS and why OOPS?

# Object - collection of properties and methods

# parts of OOP- Object literal

- constructor function
- prototypes
- classes
- instances(new, this)

# 4 pillars of OOPS

- inheritance
- abstraction
- encapsulation
- polymorphism
