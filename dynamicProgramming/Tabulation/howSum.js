/*
Write a function 'howSum(targetSum, numbers)' that takes in a targetSum 
and an array of numbers as arugments.
The function should return an array containing any combination of elements
that add up to exactly the targetSum. If there is no combination that adds up
to the targetSum, then return null.
If there are multiple combination possible, you may return any single one.
*/

//time o(m^2*n) where m is the targetSum, n is the numbers of length;
//space o(m^2)

function howSum(targetSum, numbers){
  const table = new Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for(let num of numbers) {
        table[i + num] = [...table[i], num]; //time o(m) because of copy over
        //  console.log('i', i, table);
      }
    }
  }
  return table[targetSum];
}
console.log(howSum(7, [2,3])); //[3,2,2]
console.log(howSum(7, [5,3,4,7]));//[4,3]
console.log(howSum(7, [2,4]));//null
console.log(howSum(8, [2,3,5]));//[2,2,2,2]
console.log(howSum(300, [7,14]));//null