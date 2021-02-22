// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.
// Input: text = "nlaebolko"
// Output: 1

var maxNumberOfBalloons = function(text) {
//     let count = {b:0, a:0, l:0, o:0, n:0}
    
//     for (let i = 0; i < text.length; i++) {
//         let char = text[i];
//         if (char !== undefined) {
//             count[char] ++;
//         }
//     }
    
//     count['l'] = Math.floor(count['l']/2);
//     count['o'] = Math.floor(count['o']/2);
    
    // let min = Number.MAX_VALUE; //option 1.
//     let min = Infinity;
//     for (let letter in count) {
//         if (count[letter] < min) {
//             min = count[letter];
//         }
//     }
    
//     return min;
    
// solution2.
    let count = {b:0, a:0, l:0, o:0, n:0};
    
    for (let char of text) {
        count[char] = count[char] += 1;
    }
    
    let min = Math.min(count.b, count.a, Math.floor(count.l/2), Math.floor(count.o /2), count.n)
    
    return min;
};