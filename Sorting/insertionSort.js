let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];
function insertionSort(nums) {
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    let curr = nums[i];
    let prev = i - 1;
    while (nums[prev] > curr && prev >= 0) {
      nums[prev + 1] = nums[prev];
      prev--;
    }
    nums[prev + 1] = curr;
  }
  return nums;
}
console.log(insertionSort(arr));
