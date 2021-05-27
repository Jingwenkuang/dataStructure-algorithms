/*Run-Length Encoding
sample input: string = "AAAAAAAAAAAABBCCCCDD"
ouput: '9A4A2B4C2D'
*/

function runLengthEncoding(string) {
  // Write your code here.
	let count = 0; 
	let newStr = "";
	
	for (let i = 1; i < string.length; i++) {
		let current = string[i];
		let next = string[i - 1];
		if (current === next){
			count += 1;
			if (count >= 9) {
				newStr += (count + current);
				count = 1;
				console.log(newStr)
			}
		}
	}
	return newStr;
}