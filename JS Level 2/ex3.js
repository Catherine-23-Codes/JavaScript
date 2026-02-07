const balance = 10000;
if (balance > 500) console.log("This is Implicit scope!");

// if else if else

const amt = 1000;
if (amt < 500) {
  console.log("very less");
} else if (amt < 750) {
  console.log("still less!");
} else if (amt < 900) {
  console.log("closer to 1k");
} else {
  console.log("equal to 1k");
}

//multiple conditions- shopping app

const debitCard = true;
const creditCard = true;

const loggedInGoogle = true;
const loggedInEmail = false;

if (debitCard && creditCard) {
  console.log("User is allowed to purchase!");
}

if (loggedInEmail || loggedInGoogle) {
  console.log("User is granted access!");
}
