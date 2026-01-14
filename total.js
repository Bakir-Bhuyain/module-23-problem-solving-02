const products = [
  { name: "shirt", price: 400 },
  { name: "pant", price: 500 },
  { name: "shampoo", price: 400 },
];
function sumOfTotal(products) {
  let total = 0;
  for (const product of products) {
    total = total + product.price;
  }
  return total;
}

const totalPrice = sumOfTotal(products);
console.log(totalPrice);
