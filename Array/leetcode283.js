//✅Leetcode-283Move zeros to the end.
function moveZeros(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  //Fill remaining elements to zero
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}
let nums = [7, 0, 0, 3, 12];
let result = moveZeros(nums);
console.log(result);
