/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const str = s.trim()
  const Reg_title = /^[+-\d]/
  const Reg_hasWord = /[\D ]/
  if (Reg_title.test(str) && !Reg_hasWord.test(str)) return +str
  let res = ''
  for(let i = 0; i < str.length; i++) {
    if (Reg_title.test(str[i])) {
      res += str[i]
    }else {
      return +res
    }
  }
};
console.log(myAtoi('-4193 with words'));
// @lc code=end

