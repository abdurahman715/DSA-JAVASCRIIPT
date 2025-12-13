//✅Leetcode-485 Max consicutive ones
function maxConsecutiveOnes(nums) {
  let currCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currCount++;
    } else {
      maxCount = Math.max(currCount, maxCount);
      currCount = 0;
    }
  }
  return Math.max(maxCount, currCount);
}
let nums = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1];
let result = maxConsecutiveOnes(nums);
console.log(result);
