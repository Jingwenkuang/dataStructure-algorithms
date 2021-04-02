/*You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var sum=0;
    var carry = 0;
    var result=new ListNode();
    var head = result;

    while(sum > 0 || l1 !== null || l2 !== null)
    {
        if(l1!==null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum += l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }
    return result.next
};

let l1 = [2,4,3], l2 = [5,6,4];
//return [7,0,8]
console.log(addTwoNumbers(l1, l2))
