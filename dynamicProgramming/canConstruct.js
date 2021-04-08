/*
Write a function 'canConstruct(target, wordBank)' that accepts a target
string and an array of strings.
The function should return a boolean indicating whethere or not the 'target'
can be constructed by concatenating elements of the 'wordBank' array.
You may reuse elements of 'wordBank' as many times as needed.
*/


//brute force, time o(n^m * m) where m is target, n is the wordBank.
//space o(m^2) refer to the call stack(the height of the tree which is m(target))

//memoized --prefered.
//time o(n*m^2) the second m is from the slice method
//space o(m^2)
const canConstruct = (target, wordBank, memo={})=> {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for(let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length); //.slice is o(m), copy over the target string.
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));//false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));//true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));//false
