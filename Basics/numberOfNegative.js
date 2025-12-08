//Write a function that returns the number of negative numbers in an array.
function countNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let array = [1, -3, 6, 2, 8, -30, -11, -98, -5, 3];
let totalNumbers = countNegative(array);
console.log(totalNumbers);
