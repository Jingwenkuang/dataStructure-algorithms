// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// Notice that the solution set must not contain duplicate triplets.
// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

var threeSum = function(nums) {
  let array = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let num1 = nums[i];
    let left = i + 1; 
    let right = nums.length -1; 

    while (left < right) {
      let sum = num1 + nums[left] + nums[right];
      if (sum === 0) {
        array.push([num1, nums[left], nums[right]]);
        while (nums[left + 1] === nums[left]) left++;
        while (nums[right - 1] === nums[right]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
    while(nums[i + 1] === nums[i]) i++;
  }
  return array;
}

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums))