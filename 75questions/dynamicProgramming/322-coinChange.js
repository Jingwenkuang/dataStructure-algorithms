/*
322. Coin Change
You are given an integer array coins representing coins of different denominations 
and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that 
amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
Example 4:

Input: coins = [1], amount = 1
Output: 1
Example 5:

Input: coins = [1], amount = 2
Output: 2
*/

//tabulation-bottom up solution
//time O(A*C) where A is the amount and C is the coins.length
//space O(A) because of the call stack
var coinChange = (coins, amount) => {
  let table = new Array(amount + 1).fill(amount + 1);
  table[0] = 0;

  for (let i = 1; i < table.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) { // if the coin value is less than or equal to the amount.
        table[i] = Math.min(table[i], table[i - coins[j]] + 1)
        console.log(table)
      }
    }
  }
  return table[amount] > amount ? -1 : table[amount];
}

//No passing all the test cases
// var coinChange = (coins, amount, memo={}) => {
//   if (amount in memo) return memo[amount];
//   if (amount === 0 ) return 0; 
//   if (amount < 0) return -1;

//   let numCoins = [];
//   for (let i = 0; i < coins.length; i++) {
//     let remainder = amount - coins[i];

//     if (coins[i] <= amount) {
//       numCoins.push(coinChange(coins, remainder, memo) + 1);
//       console.log(numCoins)
//     }
//   }
//   memo[amount] = Math.min(...numCoins);
//   return memo[amount];
// }

// console.log(coinChange([1,2,5], 11)) //3
console.log(coinChange([2], 3)) //-1
// console.log(coinChange([1], 0)) //0
