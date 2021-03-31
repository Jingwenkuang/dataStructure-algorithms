/* Say that you are a traveler on a 2D grid. You begin in the top-left corner
and your goal is to travel to the bottom-right corner. You may only move down or right.
In how many ways can you travel to the goal on a grid with dimenstions m*n?
Write a function 'gridTraveler(m, n)' that calculates this.
*/

//time o(2^n+m), space o(n + m)
const gridTraveler = (m, n, memo = {}) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0; 
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));
