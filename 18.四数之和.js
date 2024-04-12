/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []
  const res = []
  nums.sort((a, b) => a - b)
  if (nums[0] >= target) return []
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let a = nums[i + 1]
    let b = nums[i + 2]
    let left = i;
    let right = nums.length - 1;
    while (left < right) {
      if(i === left) {
        left++
        continue
      }
      if(i === right) {
        right--
        continue
      }
      const sum = a + b + nums[left] + nums[right]
      if (sum === target) {
        res.push([a, b, nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++;
        right--;
      } else if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      }
    }
  }
  return res
};
fourSum([2,2,2,2,2],0)
// @lc code=end

