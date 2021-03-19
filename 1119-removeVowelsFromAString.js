// 1119. Remove Vowels from a String

// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

// Example 1:

// Input: s = "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"
// Example 2:

// Input: s = "aeiou"
// Output: ""


//time o(n) because of filter method
//solution1
var removeVowels = function(s) {
    const vowels = 'aeiou'.split('');
    // console.log(vowels)
    return s.split('').filter((char) => !vowels.includes(char)).join('')
};


//solution2
var removeVowels = function(s) {
    const vowels = 'aeiou';
    let newStr = '';
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!vowels.includes(char)) {
            newStr += char;
        }
    }
    return newStr;
};
let s = "leetcodeisacommunityforcoders";
console.log(removeVowels(s))