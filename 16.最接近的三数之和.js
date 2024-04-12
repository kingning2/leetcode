/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const n = nums.length
  const list = []
  if (n < 3) return 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i - 1]) continue
    let left = i + 1,
        right = n - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      list.push(sum)
      if (sum > 0) right--;
      else left++;
    }
  }
  let res = target - list[0]
  list.forEach(item => {
    res = (target - item) < res ? res : item
  })
  return res;
}
threeSumClosest([-1, 2, 4, -5], 1)
// @lc code=end
