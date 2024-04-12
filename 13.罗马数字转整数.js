/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let index = 0
  let result = 0
  let len = s.length
  while (index < len) {
    let current = map[s[index]]
    result += current
    if (index > 0) {
      let before = map[s[index - 1]]
      if ((current === 5 || current === 10) && before === 1) {
        result -= 2
      }
      if ((current === 50 || current === 100) && before === 10) {
        result -= 20
      }
      if ((current === 500 || current === 1000) && before === 100) {
        result -= 200
      }
    }
    index++
  }
  return result
}
romanToInt('MCMXCIV')
// @lc code=end
