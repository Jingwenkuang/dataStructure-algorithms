// Given two integer arrays preorder and inorder where preorder 
// is the preorder traversal of a binary tree and inorder is the 
// inorder traversal of the same tree, 
// construct and return the binary tree.

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 && inorder.length === 0) return null;
    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);
    
    let midIdx = inorder.indexOf(rootVal);
    let leftInorder = inorder.slice(0, midIdx);
    let rightInorder = inorder.slice(midIdx + 1);
    
    let leftPreorder = preorder.filter((val) => leftInorder.includes(val));
    let rightPreorder = preorder.filter((val) => rightInorder.includes(val));
    
    let leftTree = buildTree(leftPreorder, leftInorder);
    let rightTree = buildTree(rightPreorder, rightInorder);
    
    root.left = leftTree;
    root.right = rightTree;
    
    return root;
};