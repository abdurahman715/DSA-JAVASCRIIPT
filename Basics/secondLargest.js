//Find Second Largest number in an array.
function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
let arr = [4, -9, 0, 2, 8, 7, 1];
let result = secondLargest(arr);
console.log(result);
