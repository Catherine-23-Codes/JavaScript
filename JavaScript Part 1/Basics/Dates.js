//Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());

//HW
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

//Interview pov
console.log(typeof myDate); // as new Date()--> creates an object

// month in js starts from 0, like 0-> Jan, 1->Feb...
let myCreatedDate = new Date(2026, 4, 23);
let myCreatedDate2 = new Date(2026, 4, 23, 7, 2);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toLocaleString());

//To get in dd-mm-yyyy format
let newDate = new Date("2026-05-23");
console.log(newDate.toLocaleString());

// mm-dd-yyyy format
let newDate2 = new Date("05-23-2026");
console.log(newDate2.toLocaleString());

//TIMESTAMPS

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(newDate2.getTime());

//Interview POV
console.log(Date.now() / 1000); // we get decimal values

//modified method
console.log(Math.floor(Date.now() / 1000));

let Date3 = new Date();
console.log(Date3);
console.log(Date3.getMonth()); // starts from Jan(0),Fmeb(1),Mar(2)...
console.log(Date3.getDay()); //starts from Mon(1),tue(2),wed(3)....
