/*125. Valid Palindrome
Given a string s, determine if it is a 
palindrome, considering only alphanumeric characters and ignoring cases.
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

//time o(n), space o(1)
var isPalindrome = function(s) {
  s = s.toLowerCase();
  // console.log(s)
  let left = 0; 
  let right = s.length -1; 
  while (left <= right) {
    while (!isValidChar(s[left])) left++;
    while (!isValidChar(s[right])) right--;
    if (s[left] !== s[right]) return false;
    left++;
    right--;
    }

  return true;
}

function isValidChar(char) {
  let validChar = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return validChar.indexOf(char.toLowerCase()) > -1;
}
console.log(isPalindrome('A man, a plan, a canal: Panama')); //true
console.log(isPalindrome("race a car")); //false
