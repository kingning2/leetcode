/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head.length < k) return head
  const len = Math.floor(head.length / k)
  let index = 0
  for (let i = 0; i < len; i++) {
    ;[head[index], head[index + k - 1]] = [head[index + k - 1], head[index]]
    index += k
  }
  return head
}
reverseKGroup([1, 2, 3, 4, 5], 3)
// @lc code=end
