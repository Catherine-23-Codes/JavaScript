//IIFE- Immediately invoked function expressions

//Nomral method
function WaterBottle() {
  console.log("Brand:Bisleri");
}
WaterBottle();

/* IIFE Method ()()
1()- first () indicates function definition /declaration
2()- second () indicates function call/ execution 
*/

(function TeaBrand() {
  //this is Named IIFE
  console.log("3 Roses");
})();

/*
(function TeaBrand() {
  console.log("3 Roses");
}) first ()- indicating function definition/declaration

()- second() indicating function call/execution


This is done to prevent the pollution in global scope
*/

/*An IIFE is a function expression that is defined and executed immediately 
after it is created, and it is used to create a private scope 
to avoid polluting the global namespace.
*/

//using ARROW FUNCTIONS

((name) => {
  //this is Simple IIFE / Unnamed IIFE
  console.log(`hello im ${name}, learning JS`);
})("Catherine");
