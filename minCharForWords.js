/*Minimum characters For Words
input: words = ["this", "that", "did", "deed", "them!", "a"]
output: ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
*/

//time o(n*l) where n is the number of words, l is the length of the longest word
//space o(c) where c is the number of unique characters across all words
function minimumCharactersForWords(words) {
  // Write your code here.
  const maxCharactersFreq = {};
  for (const word of words) {
    const charactersCount = countCharacterFrequencies(word);
    // console.log(charactersCount)
    updateMaxCharFreq (charactersCount, maxCharactersFreq)
  }
  return makeArrayFromCharacterFreq(maxCharactersFreq);
}

function countCharacterFrequencies(string){
 const characterFreq = {};

 for (const char of string) {
   if (! (char in characterFreq)){
     characterFreq[char] = 0; 
   }
   characterFreq[char] += 1;
 }
 return characterFreq;
}

function updateMaxCharFreq(freq, maxFreq){

  for(const char in freq){
    const frequency = freq[char];

    if (char in maxFreq){
      maxFreq[char] = Math.max(frequency, maxFreq[char])
    } else {
      maxFreq[char] = frequency;
    }
  }
}

function makeArrayFromCharacterFreq(maxFreq) {
  const characters = [];

  for (const char in maxFreq){
    const freq = maxFreq[char];

    for (let i = 0; i < freq; i++) {
      characters.push(char)
    }
  }
  return characters;
}
console.log(minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]));
//[ 't', 't', 'h', 'i', 's', 'a', 'd', 'd', 'e', 'e', 'm', '!' ]