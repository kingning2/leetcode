/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return 0
  if (x > 0) return +(x + '').split('').reverse().join('')
  return -(-x + '').split('').reverse().join('')
}
console.log(reverse(230));
// @lc code=end
