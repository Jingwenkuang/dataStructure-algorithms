/*
300. Longest Increasing Subsequence
Given an integer array nums, return the length of the longest strictly 
increasing subsequence.

A subsequence is a sequence that can be derived from an array by 
deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
*/

var lengthOfLIS = function(nums) {
   let longest = 0;
   let count = 1;  
   for(let i = 0; i < nums.length; i++) {
     for(let j = i + 1; j < nums.length; j++) {
        if (nums[j + 1] > nums[j] && nums[j] > nums[i]) {
          count += 1;
        } else if (count > longest) {
          longest = count;
        }
     }
   }
   return longest;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); //4
console.log(lengthOfLIS([0,1,0,3,2,3])); //4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); //1

