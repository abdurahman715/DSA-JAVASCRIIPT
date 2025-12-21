//✅Leetcode-01 Two sum
function twoSum(nums, target) {
  //Bruteforce approach
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] == target) {
  //         return [i, j];
  //       }
  //     }
  //   }
  let numberToIndex = {};
  for (let i = 0; i < nums.length; i++) {
    const numberNeeded = target - nums[i];
    if (numberToIndex[numberNeeded] !== undefined) {
      return [i, numberToIndex[numberNeeded]];
    }
    numberToIndex[nums[i]] = i;
    console.log(numberToIndex);
  }
}
let nums = [2, 7, 11, 15];
let result = twoSum(nums, 7);
console.log(result);
