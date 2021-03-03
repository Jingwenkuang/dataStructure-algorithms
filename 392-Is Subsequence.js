// Given two strings s and t, check if s is a subsequence of t.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

//solution1 
var isSubsequence = function(s, t) {

  let currIdx = 0; 
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (char === s[i]) {
      currIdx ++;
    }
  }
  if (s.length = currIdx) return true;
  return false;
} 


//solution2
var isSubsequence = function(s, t) {
  if (s.length === 0) return true;

  if (s[0] === t[0]) return isSubsequence(s.slice(1), t.slice(1));
  if (s.length > 0 && t.length <= 0) return false;
  
  return isSubsequence(s, t.slice(1))
} 

let s = "abc", t = "ahbgdc";
console.log(isSubsequence(s, t))