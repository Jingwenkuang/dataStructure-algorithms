/*
Write a function 'bestSum(targerSum, numbers)' that takes in a 
targetSum and an array of numbers as arguments.
The function should return an array containing the shortest combination
of numbers that add up to exactly the targetSum.
If there is a tie for the shortest combination, you may return any one
of the shortest.
*/

//solution1 brute force
//time o(n^m * m), where m is targetSum, n is the numbers.length
//space o(m^2)


//solution2 memoized --preferred 
//time o(n*m^2)
//space o(m^2)
const bestSum = (targetSum, numbers, memo={}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestComb = null;

  for (let num of numbers) {
    let remainder = targetSum - num; 
    let remainderComb = bestSum(remainder, numbers, memo);
 
    if (remainderComb !== null) {
      let combination = [...remainderComb, num];
      if (shortestComb === null || shortestComb.length > combination.length) {
        shortestComb = combination;
      }
    }
  }
  memo[targetSum] = shortestComb;
  return shortestComb;
}
console.log(bestSum(7, [2,3]));
console.log(bestSum(7, [5,3,4,7]));
console.log(bestSum(7, [2,4]));
console.log(bestSum(8, [2,3,5]));
console.log(bestSum(300, [7,14]));