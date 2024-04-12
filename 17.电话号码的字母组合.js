/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  let map = new Map()
  map.set('2', ['a', 'b', 'c'])
  map.set('3', ['d', 'e', 'f'])
  map.set('4', ['g', 'h', 'i'])
  map.set('5', ['j', 'k', 'l'])
  map.set('6', ['m', 'n', 'o'])
  map.set('7', ['p', 'q', 'r', 's'])
  map.set('8', ['t', 'u', 'v'])
  map.set('9', ['w', 'x', 'y', 'z'])
  if (digits.length === 1) return map.get(digits)

  
  const res = []
  const getTlement = (index, digits, str = '') => {
    if (index === digits.length) {
      res.push(str)
      return
    }
    const digitsArr = [...digits]
    const list = map.get(digitsArr[index])
    list.forEach((item) => {
      getTlement(index + 1, digitsArr, str + item)
    })
  }
  getTlement(0, digits, '')
  // console.log(res)
  return res
}
letterCombinations('273')
// @lc code=end
