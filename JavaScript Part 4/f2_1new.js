const user = {
  username: "catherine",
  price: 333,
};
function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`,
  );
}
//handleObject(user);

handleObject({
  username: "vinaya",
  price: 599,
});
