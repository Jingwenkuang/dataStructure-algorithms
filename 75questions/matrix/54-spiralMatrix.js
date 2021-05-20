/*54. Spiral Matrix
Given an m x n matrix, return all elements of the matrix in spiral order.
Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

//layer by layer
//time o(n), space o(n)

var spiralOrder = function(matrix) {
  let rowBegin = 0;
  let colBegin = 0; 
  let rowEnd = matrix.length - 1;
  let colEnd = matrix[0].length - 1; 
  let result = [];

  while (rowBegin <= rowEnd && colBegin <= colEnd ) {
    //move to right
    for (let i = colBegin; i <= colEnd; i++) {
      result.push(matrix[rowBegin][i])
    }
    rowBegin++;

    //move to bottom 
    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd])
    }
    colEnd--;

    if (colBegin > colEnd || rowBegin > rowEnd) break;

    //move to left
    for (let i = colEnd; i >= colBegin; i--) {
      result.push(matrix[rowEnd][i]);
    }
    rowEnd--;

    //move to top
    for (let i = rowEnd; i >= rowBegin; i--){
      result.push(matrix[i][colBegin]);
    }
    colBegin++;
  }
  return result;
}

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])) 
//[1,2,3,4,8,12,11,10,9,5,6,7]