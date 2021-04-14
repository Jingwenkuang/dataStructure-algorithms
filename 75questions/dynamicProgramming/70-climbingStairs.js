/*
70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

//fibonacci problem, use tabulation, bottom up
//time o(n), space o(n) where n is the length of table
var climbStairs = function(n) {
    let table = new Array(n + 1).fill(0);
    table[0] = 1; //1 way to make 0 step, because we are doing nothing.
    table[1] = 1;
    
    for (let i = 2; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2]
    }
//     return table[n]
}

//memorization
//time o(n) size of recursion tree can go upto n.
//space o(n) where n is the depth of the recursion 
var climbStairs = function(n, memo={}) {
    if (n in memo) return memo[n];
    if (n === 0 || n === 1) return 1;
    
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
}