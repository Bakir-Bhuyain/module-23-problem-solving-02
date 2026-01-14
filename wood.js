// total prices finding

function prices (shirt , pant, shoes){
      const shirtPrice = 500;
      const pantPrices = 300;
      const shoesPrices = 900;


      const shirtTotalPrice = shirtPrice*shirt;
      const pantTotalPrice = pantPrices*pant;
      const shoeTotalPrice = shoesPrices*shoes;

      const totalPrices = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

      return totalPrices;
}

const clothes = prices(2, 3, 2);
console.log(clothes);