/*424. Longest Repeating Character Replacement
You are given a string s and an integer k. You can choose any character of
 the string and change it to any other uppercase English character. 
 You can perform this operation at most k times.

Return the length of the longest substring containing the same 
letter you can get after performing the above operations.
Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

*/
var characterReplacement = function(s, k) {
    let maxCount = 0;
    let left = 0; 
    let right = 0; 
    let visited = {};

    while(left < s.length && right < s.length) {
      let char = s[right];
      if (visited[char]) {
        visited[char] += 1
      } else {
        visited[char] = 1;
      }
      console.log(visited)
      maxCount = Math.max(visited[char], maxCount);
      console.log(maxCount)
      if (right - left + 1 - maxCount > k) {
        visited[s[left]] --;
        left ++;
      }
      right ++;
    }
    return right - left;
};

console.log(characterReplacement('AABABBA', 1)) //4
// console.log(characterReplacement('ABAB', 2)) //4
