/*
100. Same Tree
Given the roots of two binary trees p and q,
 write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally 
identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//time o(n), space(n)
var isSameTree = function(p, q) {
    if (p === null && q === null) return true; //base case
    if (p === null ||q === null) return false;
    if (p.val !== q.val) return false;
   
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

console.log(isSameTree([1,2,1], [1,1,2])); //false
console.log(isSameTree([1,2,3], [1,2,3])); //true
console.log(isSameTree([1,2], [1,null,2])); //false

