/*5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.
Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
*/

//time o(n^2), space o(n) because of the slice.
var longestPalindrome = function(s) {
    let currentLongest = [0, 1];
    for (let i = 1; i < s.length; i++){
      let odd = getLongestPalindrome(s, i -1, i+1);
      let even = getLongestPalindrome(s, i-1, i);
      let longest = odd[1] - odd[0] > even[1] - even[0]? odd : even;
      currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0]? currentLongest: longest;
    } 
    return s.slice(currentLongest[0], currentLongest[1])
};
function getLongestPalindrome(s, leftIdx, rightIdx) {
  while(leftIdx >= 0 && rightIdx < s.length) {
    if (s[leftIdx]!== s[rightIdx])break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("xaabacxcabaaxcabaax"))