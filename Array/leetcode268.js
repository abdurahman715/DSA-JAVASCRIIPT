//✅Leetcode-268 Missing number
function missingNumber(nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let partialSum = 0;
  for (let i = 0; i < n; i++) {
    partialSum += nums[i];
  }
  return totalSum - partialSum;
}
let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
let missNum = missingNumber(nums);
console.log(missNum);
