/*76. Minimum Window Substring
Given two strings s and t, return the minimum w
in s which will contain all the characters in t. If 
there is no such window in s that covers all characters in t, 
return the empty string "".

Note that If there is such a window, it is guaranteed that there 
will always be only one unique minimum window in s.
Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Example 2:

Input: s = "a", t = "a"
Output: "a"
*/

var minWindow = function(s, t) {
    let left = 0; 
    let right = 0; 
    let min = 0; 
    let obj = {};
    
    while(right < s.length) {
        let char = s[char];
        if(t.includes(char) && )
        right++;
    }
};

console.log(minWindow('ADOBECODEBANC', 'ABC')) //'BANC'
console.log(minWindow('a', 'a')) //'a'