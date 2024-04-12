/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  return dividend >= 0 && divisor >= 0 ? Math.floor(dividend / divisor) : Math.ceil(dividend / divisor)
};
console.log(divide(10,-3));
// @lc code=end

