/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
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
    const num1 = +l1.join('')
    const num2 = +l2.join('')
    return ((num1 + num2) + '').split('').reverse()
};
const a = addTwoNumbers([9,9,9,9],[9,9,9,9,9,9,9])
console.log(a);
// @lc code=end

