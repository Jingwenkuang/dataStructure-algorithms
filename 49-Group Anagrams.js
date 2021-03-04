// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function(strs) {
    if (!strs.length) return [strs];

    let hash = {};
    
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let orderStr = str.split('').sort().join('');
        
        if (!hash[orderStr]) {
           hash[orderStr] = [str]
        } else {
            hash[orderStr].push(str)
        }
    }
    
    return Object.values(hash);
};

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs))