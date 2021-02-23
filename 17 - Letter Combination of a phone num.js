// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

//backTracking problem
var letterCombinations = function(digits) {
  if (!digits.length) return [];
  const map = {
    2: 'abc', 
    3: 'def',
    4: 'ghi',
    5: 'jkl', 
    6: 'mno',
    7: 'pqrs', 
    8: 'tuv', 
    9: 'wxyz',
  }

  let output = [];
  function backTrack(combination, nextDigits) {
    if (!nextDigits.length) {
      output.push(combination)
    } else {
      let current = nextDigits.slice(0, 1);
      for (let i = 0; i < map[current].length; i++) {
        let comb = map[current][i];
        backTrack(combination + comb, nextDigits.slice(1))
      }
    }
  }
  backTrack('', digits);
  return output;
}

let digits = '23';
console.log(letterCombinations(digits))