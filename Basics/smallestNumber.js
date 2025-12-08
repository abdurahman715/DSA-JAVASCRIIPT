//Write a function that returns the smallest number in an array.
function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
let arr = [-5, -670, -10, -83, -63, -69, -7];
let result = findSmallest(arr);
console.log(result);
