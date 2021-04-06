/* 11. Container With Most Water
Given n non-negative integers a1, a2, ..., an , where each represents a 
point at coordinate (i, ai). n vertical lines are drawn such that the 
two endpoints of the line i is at (i, ai) and (i, 0). 
Find two lines, which, together with the x-axis forms a container, 
such that the container contains the most water.

Notice that you may not slant the container.
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array 
[1,8,6,2,5,4,8,3,7]. In this case, 
the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2
*/

//solution 1, brute force, time o(n^2) space o(1)
var maxArea = function(height) {
    let maxArea = 0 ;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let current = (Math.min(height[i], height[j]))*(j - i);
            maxArea = Math.max(current, maxArea);
        }
    }
    return maxArea;
};

//solution2 twoPointer
//time o(n), space o(1)
var maxArea = function(height) {
    let maxArea= 0; 
    let left = 0; 
    let right = height.length -1;
    
    while(left < right) {
        let current = Math.min(height[left], height[right])*(right - left);
        maxArea = Math.max(current, maxArea);
        
        if (height[left] < height[right]) {
            left ++;
        } else {
            right --;
        }
    }
    return maxArea;
}