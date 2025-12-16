let arr = [-19, -5, -2, 0, 3, 8, 11, 15, 19];
let target = 8;
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
let result = binarySearch(arr, target);
console.log(result);
