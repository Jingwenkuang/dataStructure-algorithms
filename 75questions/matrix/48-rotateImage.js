/*
48. Rotate Image
You are given an n x n 2D matrix representing an image, 
rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to 
modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.
Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

Example 3:
Input: matrix = [[1]]
Output: [[1]]

Example 4:
Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]
*/

//time o(m) where m is the number of cells in the grid
//space 0(1)
var rotate = function(matrix) {
     
    //transpose 
    for(let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    // swap the first element at the first row with the last element on the first row
    for (let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix.length - 1 - j];
            matrix[i][matrix.length - 1 - j] = temp;
        }
    }
    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
//[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]