//finding the minimum value

const min = [12, 52, 65, 88, 5, 45, 3];
function minimum(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (min > num) {
      min = num;
    }
  }
  return min;
}
const minValue = minimum(min);
console.log(minValue);
