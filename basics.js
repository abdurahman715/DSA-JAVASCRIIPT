//Search an element that is presented or not in an array.
function searchElement(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return i;
    }
  }
  return -1;
}
let array = [4, 2, 4, 10, 8, 30];
let key = 4;
let result = searchElement(array, key);
if (result == -1) {
  console.log("Not found");
} else {
  console.log(`Element found at Index:${result}`);
}
