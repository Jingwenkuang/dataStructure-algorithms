/*Minimum characters For Words
input: words = ["this", "that", "did", "deed", "them!", "a"]
output: ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
*/

//time o(n*l) where n is the number of words, l is the length of the longest word
//space o(c) where c is the number of unique characters across all words
function minimumCharactersForWords(words) {
  // Write your code here.
  let maxCharFreq = {};
	for(let i = 0; i < words.length; i++){
		let word = countCharFrequences(words[i]);
		updateMaxFreq(word, maxCharFreq)
	}
	return makeArrayFromFreq(maxCharFreq)
}

function countCharFrequences(string) {
	const charFreq = {};
	for(const char of string){
		if (! (char in charFreq)) {
			charFreq[char] = 0;
		}
		charFreq[char] += 1;
	}
	return charFreq;
}

function updateMaxFreq(frequencies, maxFreq){
	for (const char in frequencies){
		const freq = frequencies[char];
		if (char in maxFreq){
			maxFreq[char] = Math.max(freq, maxFreq[char]);
		} else {
			maxFreq[char] = freq;
		}
	}
}

function makeArrayFromFreq(charFreq){
	const characters = [];
	for (const char in charFreq){
		const freq = charFreq[char];
		
		for (let i = 0; i < freq; i++) {
			characters.push(char);
		}
	}
	return characters;
}