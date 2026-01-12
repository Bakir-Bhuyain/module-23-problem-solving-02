function maxOfThree(num1, num2, num3) {
  let largest = 0;
  if (num1 > num2 && num1 > num3) {
    largest = num1;
  } else if (num2 > num1 && num2 > num3) {
    largest = num2;
  } else {
    largest = num3;
  }
  return largest;
}
// const max = maxOfThree(43, 53, 55)
// console.log(max)

//using loop to find the max value from the numbers

// function maxOfThree (num1, num2, num3){
//       let numbers = [num1, num2, num3]
//       let biggerNumber = numbers[0];
//       for(let i = 1 ; i < numbers.length ; i++){
//             if (numbers[i] > biggerNumber) {
//               biggerNumber = numbers[i];
//             }
//       }
//       return biggerNumber;
// }
// const maxNumber = maxOfThree(25, 25, 66);
// console.log(maxNumber);

function maxOfThree(num1, num2, num3) {
  let numbers = [num1, num2, num3];
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
      largest = numbers[i];
  }
  return largest;
}
const maxNumber = maxOfThree(85,97,99);
console.log(maxNumber);