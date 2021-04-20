/*
Write a function 'countConstruct(target, wordBank)' that accepts a target string
and an array of strings.
The function should return the number of ways that the 'target' can be constructedd 
by concatenating elements of the 'wordBank' array.
You may reuse elements of 'wordBank' as many times as needed.
*/


//brute force, time o(n^m * m) where m is target, n is the wordBank.
//space o(m^2) refer to the call stack(the height of the tree which is m(target))

//memoized --prefered.
//time o(n*m^2) the second m is from the slice method
//space o(m^2)
const countConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let count = 0; 
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      let numberOfCount = countConstruct(suffix, wordBank, memo)
        count += numberOfCount;
    }
  }
  memo[target] = count;
  return count;
}
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));//0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));//4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));//0
