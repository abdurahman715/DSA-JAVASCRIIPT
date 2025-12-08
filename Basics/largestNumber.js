//Write a function that returns the largest number in an array.
function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
let arr = [-5, -670, -10, -83, -63, -69, -7];
let result = findLargest(arr);
console.log(result);
