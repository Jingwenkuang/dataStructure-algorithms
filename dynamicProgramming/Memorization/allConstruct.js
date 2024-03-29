/*
Write a function 'allConstruct(target, wordBank)' that accepts a target string
and an array of strings.
The function should return a 2d array containing all of the ways that the 'target'
can be constructed by concatenating elements of the 'wordBank' array. Each element of 
the 2d array should represent one combination that constructs the 'target'.
You may reuse elements of 'wordBank' as many times as needed. 
*/


//m is target.length; n is wordBank.length
//time o(n^m), space o(m)
const allConstruct = (target, wordBank, memo ={}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];
  
  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      // console.log('Ways', suffixWays) suffixWays [ [ 'ur', 'p', 'le' ] ]
      const targetWays = suffixWays.map(way => [word, ...way]);
      // console.log('targetWasy', targetWays)
      result.push(...targetWays)
    }
  }
  memo[target] = result;
  return result;
}
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); 
//[['purp','le'], ['p', 'ur', 'p','le']]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); 
//[['ab,'cd','ef'],['ab','c','def'],['abc', 'def'], ['abcd', 'ef']]
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));//[]
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));//[]
