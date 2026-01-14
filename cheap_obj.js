// finding the cheapest rate phone from a object;

// const prices = [12000, 32000, 45000, 11000, 9000, 7000];
// function getMin (phones){
//       let min = phones[0];
//       for(amount of phones){
//             if(amount < min){
//                   min = amount;
//             }
//       }
//       return min;
// }
// const minPrice = getMin(prices);
// console.log(minPrice);
const mobile = [
  { name: "samsung", price: 17000, camera: "12mp", color: "black" },
  { name: "oppo", price: 210000, camera: "12mp", color: "black" },
  { name: "walton", price: 21000, camera: "12mp", color: "black" },
  { name: "xiomi", price: 22000, camera: "12mp", color: "black" },
  { name: "HTC", price: 220000, camera: "12mp", color: "black" },
  { name: " iphone", price: 120000, camera: "12mp", color: "black" },
];
function devices(mobile) {
  let min = mobile[0];
  for (const prices of mobile) {
    if (prices.price < min.price) {
      min = prices;
    }
  }
  return min;
}
const lowestPrices = devices(mobile);
console.log(lowestPrices);
