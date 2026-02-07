//simple conversions
console.log(2 > 1);
console.log(2 == 9);
console.log(2 >= 7);
console.log(4 <= 1);
console.log(3 != 5);

//complex conversions -- WE NEED TO TRYING AVOIDING THEM TO PREVENT CONFUSIONS
//when we are trying to compare 2 diff datatypes

console.log("2" > 1);
console.log("02" < 9);
console.log("002" < 0);

console.log(null > 0); //false
console.log(null < 0); //false
console.log(null == 0); //false

// Comparisons convert null to a number treating it as 0, so o/p is true
console.log(null >= 0); //true
console.log(null <= 0); //true

console.log(undefined == 0);
console.log(undefined < null);
console.log(undefined > 100);
console.log(undefined < 30);
console.log(undefined > null);
console.log(undefined == null);

// ===
console.log("4" === 6);
console.log("4" === 4);

//==
console.log("5" == 5);
console.log("5" == 9);
