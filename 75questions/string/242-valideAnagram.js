/*242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

var isAnagram = function(s, t) {
  let countObj = {};
  let sArr = s.split(''); //[ 'a', 'n', 'a', 'g', 'r', 'a', 'm' ]
  let tArr = t.split(''); //[ 'n', 'a', 'g', 'a', 'r', 'a', 'm' ]

  for (let i = 0; i < sArr.length; i++) {
    if (countObj[sArr[i]]) {
      countObj[sArr[i]] += 1;
    } else {
      countObj[sArr[i]] = 1;
    }

    if (countObj[tArr[i]]) {
      countObj[tArr[i]] -= 1;
    } else {
      countObj[tArr[i]] = -1;
    }
  }

  for (let key in countObj) {
    if (countObj[key] !== 0) return false;
  }
  return true;
}

console.log(isAnagram('anagram', 'nagaram'))