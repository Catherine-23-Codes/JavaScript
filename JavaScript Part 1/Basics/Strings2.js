//Ways to declare a string

const name = "catherine";
const jobTitle = new String("SDE Intern at Google");

//accessing key value pairs
console.log(jobTitle[0]);

//general syntax
console.log(jobTitle.__proto__);

//examples of some common methods
console.log(jobTitle.length);
console.log(jobTitle.toLowerCase());
console.log(jobTitle.toUpperCase());
console.log(name.charAt(7));
console.log(name.indexOf("h"));

//we cant use -ve index values for substring
const newName = name.substring(0, 5);
console.log(newName);

//only under slice, -ve index values can be used
const newName2 = name.slice(-7, 5);
console.log(newName2);

const newName3 = "      catherine   infanta";
console.log(newName3);
console.log(newName3.trim());

const url = "https://abdc.com/abdc%37opi";
console.log(url.replace("%37", "-"));
// inludes returns boolean values
console.log(url.includes("abdc"));
console.log(url.includes("mnop"));

//Refer these docx
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Useful_string_methods
