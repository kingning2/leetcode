/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0, 
      right = nums.length - 1;
  while(left <= right) {
    if (nums[right] < target) return right + 1;
    if (nums[left] > target) return left;
    let mid = (left + right) >> 1
    if (nums[mid] >= target) {
      right = mid - 1;
      if (nums[right] < target) {
        return mid;
      }
    } else {
      left = mid + 1;
      if (nums[left] > target) {
        return mid
      }
    }
  }
};
console.log(searchInsert([1,3,5,5,5,6], 6));
// @lc code=end

