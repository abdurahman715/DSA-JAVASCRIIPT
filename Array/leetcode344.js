//Leetcode-344 Reverse String
function reverseString(arr) {
  let len = arr.length;
  let halfLen = Math.floor(len / 2);
  for (let i = 0; i < halfLen; i++) {
    //Swapping
    let temp = arr[i];
    arr[i] = arr[len - i - 1];
    arr[len - i - 1] = temp;
  }
  console.log(arr);
}
let arr = ["h", "e", "l", "l", "o"];
reverseString(arr);
