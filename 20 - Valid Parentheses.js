// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// 1.Open brackets must be closed by the same type of brackets.
// 2.Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true

var isValid = function(s) {
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (pairs[char]) {
            stack.push(char)
        }
        if (char === ')' || char === '}' || char === ']') {
            while(pairs[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
};

let s = '({])';
console.log(isValid(s))