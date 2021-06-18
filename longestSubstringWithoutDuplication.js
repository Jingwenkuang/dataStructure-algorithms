/*Longest Substring without Duplication
Write a function that takes in a string and returns its longest substring without 
duplicate characters. 
You can assume that there will only be one longest substring without duplicaton.

input: string = 'clementisacap'
output: 'mentisac'
*/

function longestSubstringWithoutDuplication(string){
  const lastSeen = {};
  let longest = [0, 1];
  let startIdx = 0; 
  
  for (let i = 0; i < string.length; i++){
    const char = string[i];
   
    if (char in lastSeen){
      startIdx = Math.max(startIdx, lastSeen[char] + 1)
    }

    // console.log(startIdx)
    if (longest[1] - longest[0] < i + 1 - startIdx){
      longest = [startIdx, i + 1]
      // console.log(longest)
    }
    lastSeen[char] = i; 
    
  }
  return string.slice(longest[0], longest[1])
}

console.log(longestSubstringWithoutDuplication('clementisacap'))