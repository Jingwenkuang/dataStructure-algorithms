/*
73. Set Matrix Zeroes
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/
var setZeroes = function(matrix) {
     let col0 = 1, row = matrix.length, col = matrix[0].length;
    
    for(let i = 0; i < row; i++) {
        if(matrix[i][0] === 0) col0 = 0;
        for(let j = 1; j < col; j++) {
            if(matrix[i][j] === 0) {
                matrix[i][0] =  matrix[0][j] = 0;
            }
        }
    }
    
    for(let i = row-1; i >= 0; i--) {
        for(let j = col-1; j > 0; j--) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
        }
        if(col0 === 0) matrix[i][0] = 0;
    }   
};