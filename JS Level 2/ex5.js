// Truthy and falsy values

/*
    Falsy values
        false
        0
        -0
        BigInt 0n
        ""
        null
        undefined
        NaN
*/

/*
 Truthy values
    true
    1
    "0" - 0 value within string is a truthy value
    'false'
    " " - anything within string is truthy value
    [] empty array
    {}- empty function
    function(){}

*/

const userEmail = "caths.gmail";
if (userEmail) {
  console.log("Got it!");
} else {
  console.log("No values!");
}

if (userEmail.length === 0) {
  console.log("Array is empty!");
}

//detect empty objects

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("The objects are empty!");
}
