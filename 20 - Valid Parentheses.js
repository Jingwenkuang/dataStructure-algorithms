// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// 1.Open brackets must be closed by the same type of brackets.
// 2.Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true

var exist = (board, word) => {
  const row = board.length,
        col = board[0].length;
     
  const dfs = (r, c, idx) => {
    if (idx === word.length) return true; // We are done
    if (r >= row || r < 0 || c >= col || c < 0) return false; // Out of bounds

    let char = board[r][c]; // Store char in temp var
    if (char !== word[idx]) return false; // No match
    board[r][c] = '#'; // Mark as visited

    if (
      dfs(r + 1, c, idx + 1) ||
      dfs(r - 1, c, idx + 1) ||
      dfs(r, c + 1, idx + 1) ||
      dfs(r, c - 1, idx + 1)
    )
      return true; // Keep checking

    board[r][c] = char; // Done visiting, set element back to char
  };

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (dfs(r, c, 0)) return true; // Start dfs from each element
    }
  }

  return false;
};

let s = '({])';
console.log(isValid(s))