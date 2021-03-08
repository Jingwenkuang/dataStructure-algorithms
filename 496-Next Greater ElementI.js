// You are given two integer arrays nums1 and nums2 both of unique elements, where nums1 is a subset of nums2.

// Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

// The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, return -1 for this number.

 

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation:
// For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
// For number 1 in the first array, the next greater number for it in the second array is 3.
// For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation:
// For number 2 in the first array, the next greater number for it in the second array is 3.
// For number 4 in the first array, there is no next greater number for it in the second array, so output -1.

var nextGreaterElement = function (nums1, nums2) {

  for (let i = 0; i < nums1.length; i++) {
    for (let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {

      if (nums2[j] > nums1[i]){
        nums1[i] = nums2[j];
        break;
      } else if (j === nums2.length - 1) {
        nums1[i] = -1;
      }
    }
  }
  return nums1;
}

let nums1 = [4,1,2];
let nums2 = [1,3,4,2];
console.log(nextGreaterElement(nums1, nums2))