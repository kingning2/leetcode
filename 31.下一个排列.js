/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const res = []
  let isExits = []
  const length = nums.length
  const s = [...nums].sort((a, b) => a - b)
  const SortNums = (index, nums, str = '') => {
    if (index === length) {
      // 从大到小排序
      if (isExits.includes(str)) return
      isExits.push(str)
      res.push(str.slice(0, -1).split(',').map(Number))
      return
    }
    nums.forEach((item, t) => {
      SortNums(
        index + 1,
        nums.filter((_, s) => s !== t),
        str + `${item},`
      )
    })
  }
  SortNums(0, s, '')
  isExits = null
  const index = res.findIndex((item) => item.toString() === nums.toString())
  return index === res.length - 1 ? res[0] : res[index + 1]
}
const a = nextPermutation([1,5,1])
console.log(a)
// @lc code=end
