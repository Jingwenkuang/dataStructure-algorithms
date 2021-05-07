/*647. Palindromic Substrings
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.
Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Si
*/

var countSubstrings = function(s) {
    const n = s.length;
    let total = 0;
    for(let i = 0; i < n; i++) {
        expand(i, i);
        expand(i, i+1);
    }
    return total;
    
    function expand(left, right) {
        while(left >= 0 && right < n && s[left] === s[right]) {
          total++;
          left--;
          right++;
        }
    }
};
console.log(countSubstrings("abc")); //3
console.log(countSubstrings("aaa")) //6