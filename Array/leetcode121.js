//Leetcode-121.Best time to buy sell stock
function maxProfit(prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  console.log(min);
  return maxProfit;
}
let arr = [7, 1, 5, 3, 6, 4];
let result = maxProfit(arr);
console.log(result);
