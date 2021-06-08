/*
input: 
'string': 'AlgoExpert is the best!'
output: 
'best! the is AlgoExpert'
*/
function reverseWordsInString(string) {
  const words = [];
  let startOfWord = 0; 

  for (let i = 0; i < string.length; i++){
    let char = string[i];
    if(char === " ") {
      words.push(string.slice(startOfWord, i));
      startOfWord = i;
    } else if (string[startOfWord] === " "){
      words.push(" ");
      startOfWord = i; 
    }
  }
  words.push(string.slice(startOfWord));
  reverseWords(words);
  return words.join('');
 
}

function reverseWords(string){
  let start = 0;
  let end = string.length - 1;
  while(start < end){
    let temp = string[start];
    string[start] = string[end];
    string[end] = temp;
    start ++;
    end --;
  }
}

console.log(reverseWordsInString("..H,, hello 678"));
console.log(reverseWordsInString("AlgoExpert is the best!"));

