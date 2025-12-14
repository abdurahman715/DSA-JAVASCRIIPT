//✅Leetcode-136 Single number
function singleNumber(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}
let numss = [4, 1, 2, 1, 2];
let singleNum = singleNumber(numss);
console.log(singleNum);
