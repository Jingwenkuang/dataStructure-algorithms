/*238. Product of Array Except Self
Given an integer array nums, return an array answer such 
that answer[i] is equal to the product of all the elements 
of nums except nums[i].

The product of any prefix or suffix of 
nums is guaranteed to fit in a 32-bit integer.
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

//time o(n), space o(n)
var productExceptSelf = function(nums) {
  let leftPro = 1;
  let left = [1]
  for(let i = 1; i < nums.length; i++) {
    leftPro *= nums[i - 1];
    left.push(leftPro);
    // console.log(left)
    //[ 1, 1, 2, 6 ]
  }

  let rightPro = 1;
  let right = [1];
  for (let j = nums.length - 2; j >= 0; j--) {
    rightPro *= nums[j + 1];
    right.unshift(rightPro);
    console.log(right) 
    //[ 24, 12, 4, 1 ]
  }

  let product = []
  for (let k = 0; k < left.length; k++) {
    let leftNum = left[k];
    product.push(leftNum * right[k])
  }

  return product;
}
// console.log(productExceptSelf([1,2,3,4])) //[24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) //[0,0,9,0,0]