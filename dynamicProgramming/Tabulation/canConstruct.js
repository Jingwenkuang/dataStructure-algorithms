/*
Write a function 'canConstruct(target, wordBank)' that accepts a target
string and an array of strings.
The function should return a boolean indicating whethere or not the 'target'
can be constructed by concatenating elements of the 'wordBank' array.
You may reuse elements of 'wordBank' as many times as needed.
*/

//time o(m^2*n) slice count as o(m)
//space o(m)
function canConstruct(target, wordBank) {
  const table = new Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        // console.log('table', table)
        //  console.log('choice', target.slice(i, i + word.length))
        if (target.slice(i, i + word.length) === word) {
          // console.log('match', target.slice(i, i + word.length))
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length]
}
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));//false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));//true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));//false
