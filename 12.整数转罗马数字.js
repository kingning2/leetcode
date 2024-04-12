/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
let map = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}
var intToRoman = function (num) {
  let signal = 1
  let res = ''
  while (num > 0) {
    const cus = num % 10
    if (cus < 4) {
      res = Array(cus).fill(map[signal]).join('') + res
    } else if (cus === 4) {
      res = map[signal] + map[signal * 5] + res
    } else if (cus > 4 && cus < 9) {
      res = map[signal * 5] + Array(cus - 5).fill(map[signal]).join('') + res
    } else {
      res = map[signal] + map[signal * 10] + res
    }
    num = Math.floor(num / 10)
    signal *= 10
  }
  console.log(res);
}
intToRoman(412)
// @lc code=end
