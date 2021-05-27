/* find the longest path, 0 means can traverse, '#' means block.
example 1: 
input: [[0,0],[0,0]]
output: 4

example 2: 
input: [[0.0.#],
        [0,#,0],
        [0,0,0]]
output: 6
*/

function longestPath(matrix) {
  let max = -1;
  for(let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      dfs(0, i, 1)
    }
  }

  function dfs(x, y, length, visited = new Set() ) {
  
    if (visited.has(`${x}: ${y}`)) return; 
    let nextVisted = new Set(visited);
    nextVisted.add(`${x} : ${y}`)

    let bottom = matrix.length -1;
    if (x === bottom) {
      max = Math.max(max, length)
    }
    let left = y - 1;
    let right = y + 1; 
    let up = x - 1; 
    let down = x + 1;

    if (matrix[x] && matrix[x][left] === 0) dfs(x, left, length + 1, nextVisted);
    if (matrix[x] && matrix[x][right] === 0) dfs(x, right, length + 1, nextVisted);
    if (matrix[x] && matrix[up][y] === 0) dfs(up, y, length + 1, nextVisted);
    if (matrix[x] && matrix[down][y] === 0) dfs(down, y, length + 1, nextVisted);
  }
  return max;
 }

 console.log(longestPath([[0,0,'#'],[0,'#',0],[0,0,0]]))