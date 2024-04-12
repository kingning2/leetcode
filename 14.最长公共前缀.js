/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const less = strs[0].length;
  let str = ''
  let res = "";
  for (let i = 0; i < less; i++) {
    str = strs[0].substring(0, i + 1);
    const Reg = new RegExp(`^${str}`);
    if (strs.every(item => Reg.test(item))) {
      res = str;
    } else {
      break
    }
  }
  return res
};
longestCommonPrefix(["flower","flow","flos"])
// @lc code=end

