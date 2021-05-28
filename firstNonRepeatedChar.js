/*First non repeated character
input: string = 'abcdcaf';
output: 1;
*/

//time o(n)
//space 0(1) because the max char is 26 characters.
function firstNonRepeatedCharacter(string) {
  let charFrequency = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (charFrequency[char]){
      charFrequency[char] += 1;
    } else {
      charFrequency[char] = 1;
    }
  }

  for (let i = 0; i < string.length; i ++) {
    if (charFrequency[string[i]] === 1) return i; 
  }
  return -1; 
}


console.log(firstNonRepeatedCharacter('abcdcaf')); //1