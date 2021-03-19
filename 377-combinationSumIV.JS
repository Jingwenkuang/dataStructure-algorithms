// 377. Combination Sum IV
// Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

// Example 1:

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.
// Example 2:

// Input: nums = [9], target = 3
// Output: 0

//time O(T*N) where T is the target value, N is the size of input array
//space O(T) where T is the target value, because of the call stack.
var combinationSum4 = function(nums, target, memo = {}) {
   if (target in memo) return memo[target];
    if (target === 0) return 1;
   
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        if (target >= num) {
        let newTarget = target - num; 
            result += combinationSum4(nums, newTarget, memo);
        }
    }
    memo[target] = result;
    return result;
};