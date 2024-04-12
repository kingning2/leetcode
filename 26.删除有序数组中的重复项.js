/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const setArr = [...new Set(nums)].length
  return setArr
};
removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// @lc code=end

