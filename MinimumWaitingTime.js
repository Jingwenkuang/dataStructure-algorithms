// Given a non-empty array of positive integers 
// input queries = [3,2,1,2,6]
// output 17;

//solution1
function minimumWaitingTime(queries) {
  // Write your code here.
	queries.sort((a, b) => a - b);
	
	let total = 0;  
	let numAtIdxWaitTime = 0;
	for (let i = 0; i < queries.length; i++) {
		if (i === 0) {
			total += 0;
		} else {
			numAtIdxWaitTime += queries[i - 1];
			total += numAtIdxWaitTime;
		}
	}
	return total;
}

//solution2
function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => a -b);
	let totalWaitTime = 0; 
	
	for (let i = 0; i < queries.length; i++) {
		let duration = queries[i];
		let queriesLeft = (queries.length - 1) - i;
			totalWaitTime += duration * queriesLeft;
	}
	return totalWaitTime;
}