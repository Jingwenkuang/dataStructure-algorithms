/*1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// solution1, time: o(n^2)
var twoSum = function(nums, target) {
    let sumArray = [];
    
    for (let i = 0; i < nums.length; i++) {
        let firstNum = nums[i];
        
        for (let j = i + 1; j < nums.length; j++) {
             let secNum = nums[j];
        
            if ((firstNum + secNum) === target) {
            sumArray.push(i, j)
            } 
        }
    }
    return sumArray;
};


//time o(n)
var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)     // Map(4) {2 => 0, 7 => 1, 11 => 2, 15 => 3}
    }
    
    for (let i = 0; i < nums.length; i++) {
        let potentialNum = target - nums[i];
        
        if (map.has(potentialNum) && map.get(potentialNum) !== i) {
            return [i, map.get(potentialNum)];
        }
    }
}

let nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target))