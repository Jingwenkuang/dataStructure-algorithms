/*53. Maximum Subarray
Given an integer array nums, find the contiguous subarray 
(containing at least one number) 
which has the largest sum and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
*/


//kanada algo
//time o(n), space o(1)
var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let maxEndHere = nums[0];
    for (let i = 1; i < nums.length; i++) {
      maxEndHere = Math.max(nums[i], maxEndHere + nums[i]);
      maxSoFar = Math.max(maxSoFar, maxEndHere)
    }
    return maxSoFar;
};

let nums = [-2, 1,-3 , 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums))