/*
Say that you are a travler on a 2D grid. You begin in the top-left corner
and your goal is to travel to the bottom-right corner. You may only move down 
or right.
In how many ways can you travel to the goal on the grid with a dimensions
m*n?
Write a function `gridTraveler(m, n)` that calculates this.
*/

//time o(m*n), space o(m*n)
const gridTraveler = (m, n) => {
  let table = new Array(m + 1)
    .fill()
    .map(() => new Array(n + 1).fill(0))

    table[1][1] = 1;
    // console.log(table)
    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        let current = table[i][j];
        if (j + 1 <= n) table[i][j + 1] += current;
        if (i + 1 <= m) table[i + 1][j] += current;
      }
    }
    return table[m][n];
}
console.log(gridTraveler(1, 1)); //1
console.log(gridTraveler(2, 3));//3
console.log(gridTraveler(3, 2));//3
console.log(gridTraveler(3, 3));//6
console.log(gridTraveler(18, 18));//2333606220