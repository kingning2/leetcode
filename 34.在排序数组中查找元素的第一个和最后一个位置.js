/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const res = [];
  for(let i = 0;i < nums.length;i++) {
    if (nums[i] === target) {
      res.push(i);
    }
  }
  if (res.length === 0) return [-1, -1];
  if (res.length === 1) return [res[0], res[0]]
  return [res[0], res[res.length - 1]];
};
// @lc code=end

