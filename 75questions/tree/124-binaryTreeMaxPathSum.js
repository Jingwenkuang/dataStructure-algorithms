/*124. Binary Tree Maximum Path Sum
A path in a binary tree is a sequence of nodes 
where each pair of adjacent nodes in the sequence has an edge 
connecting them. A node can only appear in the sequence at most once. 
Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.

Example 1:
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Example 2:
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
*/

var maxPathSum = function(root) {
  var max = -Infinity // Initialize to a very small number to handle a path of negative values
  getMaxSum(root) // Call our recursive fn to start the program
  
  return max // Once we have popped out of our recursive calls, `max` contains our maximum path sum
  
  function getMaxSum(tree) {
    if (tree == null) { return 0 } // Termination condition
    
    const leftBranch = Math.max(0, getMaxSum(tree.left)) // calculate the root to leaf sum where root is the left node
    const rightBranch = Math.max(0, getMaxSum(tree.right)) // calculate the root to leaf sum where root is the right node
    const currentPath = leftBranch + tree.val + rightBranch  // Sum the path: left -> root -> right (leaf to leaf)
    
    max = Math.max(max, currentPath) // if the current path is greater than the previous value of `max`, update `max` to the current path sum
    return tree.val + Math.max(leftBranch, rightBranch)
  }    
};