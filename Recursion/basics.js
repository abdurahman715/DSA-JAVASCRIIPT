function printfNums(num) {
  if (num === 0) {
    return;
  }
  console.log(num);
  num--;
  printfNums(num);
}
// printfNums(10);

let n = 10;
function print(num) {
  if (num > n) {
    return;
  }
  console.log(num);
  num++;
  print(num);
}
print(1);
