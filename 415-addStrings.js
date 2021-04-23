/*415. Add Strings
Given two non-negative integers, 
num1 and num2 represented as string, return the sum of num1 and num2 as a string.
Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
*/

//time o(n) where n is the Math.max(num1.length, num2.length)
//space o(n)
function addString(num1, num2) {
  let length1 = num1.length;
  let length2 = num2.length;
  let remainder = 0; 
  let sumStr = '';

  if (length1 > length2) {
    for (let i = 0; i < length1 - length2; i++) {
      num2 = '0' + num2;
      // console.log(num2)
    }
  }
    if (length2 > length1) {
    for (let i = 0; i < length2 - length1; i++) {
      num1 = '0' + num1;
      // console.log(num1)
    }
  }
//'011' , '129'
  for (let i = num1.length -1; i >= 0; i-- ){
    let n1 = num1[i];
    let n2 = num2[i];
    let sum = Number(n1) + Number(n2) + remainder;
    // console.log(n1, n2, sum)
    if (sum >= 10) {
      sumStr = (sum % 10) + sumStr;
      remainder = Math.floor(sum / 10);
      // console.log(sumStr)
      // console.log(remainder)
    } else {
      sumStr = sum + sumStr;
      remainder = 0; 
    }
  }
  return remainder ? '1' + sumStr : sumStr;
}

// console.log(addString('456', '77')) //'533'
console.log(addString('11', '129')) //140