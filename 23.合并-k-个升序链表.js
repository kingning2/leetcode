/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const arr = lists.flat(Infinity)
  if (arr.length === 0) return []
  return arr.sort((a, b) => a - b)
};
mergeKLists([[1,4,5],[1,3,4],[2,6]])
// @lc code=end

