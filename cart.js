const products = [
      {name: 'shirt', price: 800, quantity: 3},
      {name: 'pent', price: 1200, quantity: 2},
      {name: 'watch', price: 2400, quantity: 2},
      {name: 'shoes', price: 3200, quantity: 1},
]
function cart (products){
      let total = 0;
      for ( const product of products){
            let totalQuantity = product.price *product.quantity;
            total = total+totalQuantity;
      }
      return total;
}
const total = cart(products);
console.log(total);