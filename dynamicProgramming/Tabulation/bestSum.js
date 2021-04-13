/*
Write a function 'bestSum(targerSum, numbers)' that takes in a 
targetSum and an array of numbers as arguments.
The function should return an array containing the shortest combination
of numbers that add up to exactly the targetSum.
If there is a tie for the shortest combination, you may return any one
of the shortest.
*/

//time o(m^2*n)
//space o(m^2)
function bestSum(targerSum, numbers) {
  const table = new Array(targerSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targerSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        let combination = [...table[i], num];
        if (!table[i + num] || combination.length < table[i + num].length) {
          table[i + num] = combination; 
          // console.log('comb', combination, table)
        }
      }
    }
  }
  return table[targerSum];
}
console.log(bestSum(7, [2,3])); //[2,2,3]
console.log(bestSum(7, [5,3,4,7]));//[7]
console.log(bestSum(7, [2,4]));//null
console.log(bestSum(8, [2,3,5])); //[3,5]
console.log(bestSum(300, [7,14]));//null
