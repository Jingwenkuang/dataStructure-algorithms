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

//SOLUTION 1 
function setZeroes(matrix) {
  let track = []; //[[0,0],[0,3]]

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++){
      if (matrix[i][j] === 0) {
        track.push([i, j])
        // console.log(track)
      }
    }
  }

  for (let i = 0; i < track.length; i++) {
    let [x, y] = track[i];

    for(let j = 0; j < matrix[0].length; j++) {
      matrix[x][j] = 0;
    }

    for (let k = 0; k < matrix.length; k++) {
      matrix[k][y] = 0; 
    }
  }
 return matrix;
}

//SOLUTION 2
//time o(m * n), space o(m + n)
function setZeroes(matrix) {
  let row = matrix.length;
  let col = matrix[0].length; 
  let rows = new Set();
  let columns = new Set();

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        columns.add(j);
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (rows.has(i) || columns.has(j)){
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}


//solution 3

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])); //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]