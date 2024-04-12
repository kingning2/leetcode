/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []
  let n = nums.length
  nums.sort((a, b) => a - b)
  if (nums[0] > 0) return
  let res = []
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let left = i++
    let right = n--
    while (left < right) {
      const sum = nums[left] + nums[i] + nums[right]
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])
        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return res
}
threeSum([-1, 0, 1, 2, -1, -4])
// @lc code=end
