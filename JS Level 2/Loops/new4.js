//shooping cart example

const shoppingCart = [
  //to copy paste this use alt+shift+down arrow key
  {
    item_name: "clothes",
    price: 500,
  },
  {
    item_name: "bag",
    price: 200,
  },
  {
    item_name: "cosmetics",
    price: 1500,
  },
];

const price = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(price);
