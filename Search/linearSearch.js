let arr = [1, 3, 5, 7, 8];
function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
let target = 5;
let result = linearSearch(arr, target);
if (result == -1) {
  console.log(`${target} not found in the array.`);
} else {
  console.log(`${target} found at Position ${result + 1}`);
}
