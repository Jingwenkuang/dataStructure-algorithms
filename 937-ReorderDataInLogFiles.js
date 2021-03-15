You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

There are two types of logs:

Letter-logs: All words (except the identifier) consist of lowercase English letters.
Digit-logs: All words (except the identifier) consist of digits.
Reorder these logs so that:

The letter-logs come before all digit-logs.
The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
The digit-logs maintain their relative ordering.
Return the final order of the logs.

 

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
Explanation:
The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".
Example 2:

Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]


var reorderLogFiles = function(logs) {
  // Init letters as empty array
  let letters = [];
  // Init digits as empty array
  let digits = [];

  // Iterate through logs
  for (let log of logs) {
    // Split curr log by spaces and save as currLog
    const currLog = log.split(" ");
    // If currLog[1] is type number
    if (!isNaN(parseInt(currLog[1]))) {
      // Push curr log to digits
      digits.push(log);
    } else { // Else
      // Push curr log to letters
      letters.push(log);
    }
  }
  
  // Sort letterLogs
  letters.sort(sortLog);
  // Return letters concat digits
  return letters.concat(digits);
};


var sortLog = (a, b, i = 1) => {
  const arrA = a.split(" ");
  const arrB = b.split(" ");
  // If we reach the end of both logs
  if (i === arrA.length && i === arrB.length) {
    // Need to compare the identifiers
    return arrA[0] < arrB[0] ? -1 : arrA[0] > arrB[0] ? 1 : 0;
  }
      
  if (arrA[i] < arrB[i]) {
    return -1;
  } else if (arrA[i] > arrB[i]) {
    return 1;
  } else if (arrA[i] === arrB[i]) {
    return sortLog(a, b, i + 1);
  }

  return 0;
}