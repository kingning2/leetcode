/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const Reg = new RegExp(`^${p}$`)
  return Reg.test(s)
};
console.log(isMatch("aba","a*"));
// @lc code=end

