/*Longest Substring without Duplication
Write a function that takes in a string and returns its longest substring without 
duplicate characters. 
You can assume that there will only be one longest substring without duplicaton.

input: string = 'clementisacap'
output: 'mentisac'
*/

function longestSubstringWithoutDuplication(string){
  const longestSubstring = '';
  const current = '';
  let start = 0; 
  
  for (let i = start; i < string.length; i++){
    const char = string[i];
   
    if (! (char in current)){
      current += char;
    }
  }
}

console.log(longestSubstringWithoutDuplication('clementisacap'))