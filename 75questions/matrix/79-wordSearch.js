/*79. Word Search
Given an m x n grid of characters board and a string word, return true if 
word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, 
where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once.
Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
word = "ABCB"
Output: false
*/

var exist = function(board, word) {

  function dfs(board, word, i, j, idx) {
    if(word.length === idx) return true; 
    if(i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== word[idx]) return false;
    board[i][i] = '#';

    if ((board, word, i + 1, j, idx + 1) ||
        (board, word, i, j + 1, idx + 1) ||
        (board, word, i - 1, j, idx + 1) ||
        (board, word, i, j - 1, idx + 1)
    ) return true;
    board[i][j] = word[idx]; 
  }

  for (let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      if(dfs(board, word, i, j, 0)) return true;
    }
  }
  return false;
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE"))