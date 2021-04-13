/*
Write a function 'allConstruct(target, wordBank)' that accepts a target string
and an array of strings.
The function should return a 2d array containing all of the ways that the 'target'
can be constructed by concatenating elements of the 'wordBank' array. Each element of 
the 2d array should represent one combination that constructs the 'target'.
You may reuse elements of 'wordBank' as many times as needed. 
*/

//time o(n^m) exponential complexity
//space o(n^m) 

function allConstruct(target, wordBank) {
  const table = new Array(target.length + 1)
                .fill()
                .map(() => []);
    table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const combination = table[i].map(sub => [...sub, word]);
        console.log('combo', combination, 'table', table)
        table[i + word.length].push(...combination);
        console.log('afterTable', table)
      }
    }
  }
  return table[target.length];
}
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); 
//[['purp','le'], ['p', 'ur', 'p','le']]
// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); 
// //[['ab,'cd','ef'],['ab','c','def'],['abc', 'def'], ['abcd', 'ef']]
// console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));//[]
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));//[]
