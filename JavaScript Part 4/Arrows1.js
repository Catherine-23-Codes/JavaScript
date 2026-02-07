/* FUNCTION  1
function coffee() {
  console.log(this);
}
coffee();
*/

/* FUNCTION  2
function coffee1() {
  let username = "Sunrise";
  console.log(this.username);  //op undefined
}
coffee1();

*/

/* FUNCTION  3 using a variable
 
const chai = function () {
  let username = "sunrise";
  console.log(this.username);
};
chai();
*/

/* Arrow function
 */
const coffee = () => {
  let username = "Taj";
  console.log(this.username);
};
coffee();
