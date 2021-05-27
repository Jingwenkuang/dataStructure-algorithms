/*Run-Length Encoding
sample input: string = "AAAAAAAAAAAABBCCCCDD"
ouput: '9A4A2B4C2D'
*/

function runLengthEncoding(string) {
  // Write your code here.
	let count = 1; 
	let newStr = [];

  for(let i = 1; i < string.length; i++){
    let current = string[i];
    let previous = string[i - 1];

    if (current !== previous || count === 9) {
      newStr.push(count.toString());
      newStr.push(current);
      count = 0; 
    }
    count += 1;
  }
  newStr.push(count.toString());
  newStr.push(string[string.length - 1]);
 	return newStr.join('');
}

console.log(runLengthEncoding("AAAAAAAAAAAABBCCCCDD"));//9A3B2C4D2D