function printfNums(num) {
  if (num === 0) {
    return;
  }
  console.log(num);
  num--;
  printfNums(num);
}
printfNums(10);
