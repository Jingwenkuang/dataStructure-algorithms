// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

 

// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:


// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.

var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    let midIdx = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[midIdx])
    
     
    root.left = sortedArrayToBST(nums.slice(0, midIdx));
    root.right = sortedArrayToBST(nums.slice(midIdx + 1))

    return root;
};