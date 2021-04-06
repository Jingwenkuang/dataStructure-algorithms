/*15. 3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
*/

//twoPointer 
//time o(n^2), space o(n)
var threeSum = function(nums) {
  if (nums.length === 0 || nums.length === 1) return [];
  let result = [];
  nums = nums.sort((a, b) => a - b);  //sort time o(nlog(n))

  for (let i = 0; i < nums.length; i++) { //for loop + while loop time o(n^2)
    let num = nums[i];
    let left = i + 1; 
    let right = nums.length -1;

    while (left < right) {
      let sum = num + left + right; 
      if (sum === 0) {
        result.push([num, nums[left], nums[right]]);
        while (nums[left + 1] === nums[left]) left ++;
      } else if (sum > 0) {
        right --;
      } else if (sum < 0) {
        left ++;
      }
      while (nums[i + 1] === nums[i]) i++;
    }
    return result;
  }


  
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums))