// Given a string s and an array of integers cost where cost[i] is the cost of deleting the ith character in s.
// Return the minimum cost of deletions such that there are no two identical letters next to each other.
// Notice that you will delete the chosen characters at the same time, in other words, after deleting a character, the costs of deleting other characters will not change.
// Input: s = "abaac", cost = [1,2,3,4,5]
// Output: 3
// Explanation: Delete the letter "a" with cost 3 to get "abac" (String without two identical letters next to each other).


var minCost = function(s, cost) {
    
//     let result = 0; 
//     for (let i = 0; i < s.length; i++) {
//         let sum = cost[i];
//         let currMax = cost[i];
        
//         while (s[i] === s[i + 1]) {
//             currMax = Math.max(currMax, cost[i + 1]);
//             sum += cost[i + 1];
//             i++;
//         }
//         result += sum - currMax;
//     }
//     return result;
    
    let total = 0; 
    
    for (let i = 0; i < cost.length -1; i++) {
        if (s[i] === s[i + 1]) {
            if (cost[i] < cost[i + 1]) {
                total += cost[i]
            } else {
                total += cost[i + 1];
                [cost[i + 1], cost[i]] = [cost[i], cost[i + 1]];
            }
        }
    }
    return total;
};