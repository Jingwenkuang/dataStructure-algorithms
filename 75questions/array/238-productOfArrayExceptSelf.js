/*238. Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

//time o(n), space o(n)
//array, based on the current index, figure out product of left, right
var productExceptSelf = function(nums) {
    let product = [];
    let left = 1; 
    let right = 1; 
    
    for (let i = 0; i < nums.length; i++) {
        product[i] = left;
        left *= nums[i];
    }
    
    for (let j = nums.length - 1; j >= 0; j--) {
        product[j] *= right;
        right *= nums[j];
    }
    return product;
};