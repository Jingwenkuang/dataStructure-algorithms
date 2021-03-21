/*
763. Partition Labels
A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.
Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
*/

//greedy
//time O(n^2) because of the lastIndexOf method inside of for loop;
//space o(1) no more than 26 char
//solution1
var partitionLabels = function(S) {  //S = "ababcbacadefegdehijhklij"
	
	let result = [];
	let start = 0;
	let indexTarget = 0;


	for (let i = 0; i < S.length; i++) { //i =0,1...6
		let indexLast = S.lastIndexOf(S[i]); //6,5,6

		indexTarget = Math.max(indexTarget, indexLast); //6

		if (i == indexTarget) { //i=6
			result.push(indexTarget - start + 1);
			start = i + 1; //7
		}
	}

	return result;
};

//solution2 using Map
//time: o(n)
var partitionLabels = function(S) {
    
    let map = new Map();
    
    for(let i = 0; i < S.length; i++) {
        map.set(S[i], i); //set key and value pairs
    }
    /*Map {
  'a' => 8,
  'b' => 5,
  'c' => 7,
  'd' => 14,
  'e' => 15,
  'f' => 11,
  'g' => 13,
  'h' => 19,
  'i' => 22,
  'j' => 23,
  'k' => 20,
  'l' => 21 }
  */
    
    let start = 0, indexTarget = 0, res = [];
    for(let i = 0; i < S.length; i++) {
        let cur = S[i];
        indexTarget = Math.max(indexTarget, map.get(cur));
       
        if(indexTarget == i) {
            res.push(i - start + 1);
            start = i + 1;
        }
    }
    return res;
};

let S = "ababcbacadefegdehijhklij";
console.log(partitionLabels(S))