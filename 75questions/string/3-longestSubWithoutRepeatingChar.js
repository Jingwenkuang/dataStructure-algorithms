/*3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest 
substring without repeating characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
*/

//solution 1, time: o(n^2), space o(n)
// var lengthOfLongestSubstring = function(s) {
//   let count = 0; 

//   for (let i = 0; i < s.length; i++) {
//     // let char = s[i];
//     let set = new Set();
    
//     for(let j = i; j < s.length; j++) {
//       let char = s[j]
//       if (set.has(char)){
//         break;
//       } else {
//         set.add(char);
//       }
//     count = Math.max(count, set.size)
//     }

//   }
//   return count;
// };

//solution 2 - sliding window
//time o(n)
var lengthOfLongestSubstring = function(s) {
  let count = 0;
  let i = 0; 
  let j = 0; 
  let set = new Set();

  while(i < s.length && j < s.length) {
    let char = s[j];
    if (!set.has(char)) {
      set.add(char);
      j++;
      count = Math.max(count, j - i);
    } else {
      set.delete(s[i]);
      i++;
    }
  }
  return count;
}


console.log(lengthOfLongestSubstring("abcabcbb"))