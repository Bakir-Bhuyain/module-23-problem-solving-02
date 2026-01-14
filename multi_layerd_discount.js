/* 
first 100 --> 100
101 to 200 ---> 90
above 200 ---> 70
*/
function layeredDiscountedTotal (quantity){
      const first100Price = 100;
      const second100Price = 90;
      const above200Price = 70;
      if (quantity <= 100){
            const total = first100Price*quantity;
      } else if (quantity <= 200) {
            const remainingQuantity = quantity -100;
           
      }
}