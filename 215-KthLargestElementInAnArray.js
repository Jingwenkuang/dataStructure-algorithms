// 215. Kth Largest Element in an Array
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

//solution1 time: o(nlog(n)) becasue of sort method.
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    
    return nums[k - 1];
    
};

//solution2 time: O(n)
class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }
    
    siftUp(idx) {
        if (idx === 1) return;
        
        let parentIdx = this.getParent(idx);

        if (this.array[parentIdx] < this.array[idx]) {
            [ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ];
            this.siftUp(parentIdx);
        }
    }

    deleteMax() {
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length === 1) return null;

        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }

    siftDown(idx) {
        let ary = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx); 
        let leftVal = ary[leftIdx];
        let rightVal = ary[rightIdx];

        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;
    
        if (ary[idx] > leftVal && ary[idx] > rightVal) return;
    
        if (leftVal < rightVal) {
          var swapIdx = rightIdx;
        } else {
          var swapIdx = leftIdx;
        }
    
        [ ary[idx], ary[swapIdx] ] = [ ary[swapIdx], ary[idx] ];
        this.siftDown(swapIdx);
    }
}

    var findKthLargest = function(nums, k) {
        let heap = new MaxHeap();
        nums.forEach(num => heap.insert(num));
        for (let i = 1; i < k; i++) {
            heap.deleteMax();
        }
        return heap.deleteMax();
    }