/*
Write a function 'howSum(targetSum, numbers)' that takes in a targetSum 
and an array of numbers as arugments.
The function should returna an array containing any combination of elements
that add up to exactly the targetSum. If there is no combination that adds up
to the targetSum, then return null.
If there are multiple combination possible, you may return any single one.
*/

//solution1 brute force
//time o(n^m * m), where m is targetSum, n is the numbers.length
//space o(m)


//solution2 memoized
//time o(n*m^2)
//space o(m^2)
const howSum = (targetSum, numbers, memo={}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    let remainder = targetSum - num;
    let remainderResult = howSum(remainder, numbers, memo);
    // console.log(remainderResult)
    if (remainderResult !== null) {
     memo[targetSum] = [...remainderResult, num];
     return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}
console.log(howSum(7, [2,3]));
console.log(howSum(7, [5,3,4,7]));
console.log(howSum(7, [2,4]));
console.log(howSum(8, [2,3,5]));
console.log(howSum(300, [7,14]));
