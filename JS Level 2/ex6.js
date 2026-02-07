//Nullish coalescing operator (??) : null undefined

let val1;
val1 = 3 ?? 8;
val2 = null ?? 10;
val3 = 100 ?? null;

console.log(val1);
console.log(val2);
console.log(val3);

val4 = undefined ?? 46;
console.log(val4);

val5 = undefined ?? "";
console.log(val5);

val6 = null ?? "";
console.log(val6);

val7 = null ?? {};
console.log(val7);

val8 = null ?? [];
console.log(val8);

val9 = null ?? 10 ?? 30;
console.log(val9);

val10 = undefined ?? 70 ?? 30;
console.log(val10);

//Ternary operator

//condition ? true:false;

const coffee = 100;
coffee <= 80 ? console.log("less than 80") : console.log("more than 80");
