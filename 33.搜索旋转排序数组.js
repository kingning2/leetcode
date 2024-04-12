/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (nums[middle] == target) return middle
    if (nums[left] <= nums[middle]) {
      if (target < nums[left] || target > nums[middle]) left = middle + 1
      else right = middle - 1
    } else {
      if (target < nums[middle] || target > nums[right]) right = middle - 1
      else left = middle + 1
    }
  }
  return -1
}
console.log(search([4, 3, 0, 7, 6, 1, 2], 3))
// @lc code=end
