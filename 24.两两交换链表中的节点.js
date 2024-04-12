/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!(head instanceof Array)) return
  if (head.length <= 1) return head
  const arrLen = Math.floor(head.length / 2)
  let index = 0
  for (let i = 0; i < arrLen; i++) {
    [head[index], head[index + 1]] = [head[index + 1], head[index]]
    index += 2
  }
  return head
};
swapPairs([1,2,3,4,5,7])
// @lc code=end

