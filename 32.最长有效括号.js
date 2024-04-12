/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (s.length <= 1) return 0
  const statk = []
  let prev = ''
  let num = 0
  let max = []
  let str = s.substring(s.indexOf('('))
  while(str.length) {
    if(str[0] === '(' && statk.length === 0) {
      prev = str[0]
      statk.push(str[0])
      num++
    } else {
      if (prev !== '(' && statk.length === 0) {
        if(!(max.includes(num))) {
          max.push(num)
        }
        num = 0
      }
      statk.pop()
      prev = str[0]
    }
    str = str.substring(1)
  }
  max.push(num)
  num = Math.max(...max)*2
  return num
};
longestValidParentheses(')()())')
// @lc code=end

