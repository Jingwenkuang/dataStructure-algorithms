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

var partitionLabels = function(S) {
	
	let result = [];


	let start = 0;


	let indexTarget = 0;


	for (let i = 0; i < S.length; i++) {

		let indexLast = S.lastIndexOf(S[i]);

		indexTarget = Math.max(indexTarget, indexLast);

		if (i == indexTarget) {
			result.push(indexTarget - start + 1);
			start = i + 1;
		}
	}

	return result;
};``