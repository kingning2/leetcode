/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findIndex(str, words) {
  let subStr = str
  let indexs = []
  let isDone = false
  const strlength = str.length
  words.forEach((item) => {
    isDone = false
    while (!isDone) {
      const index = subStr.indexOf(item)
      if (index === -1) {
        isDone = true
        subStr = str
      } else {
        const len = index + item.length
        subStr = subStr.substring(len)
        indexs.push(strlength - subStr.length - item.length)
      }
    }
  })
  return indexs
}

var findSubstring = function (s, words) {
  if (words.length === 0) return []
  if (words.length === 1) {
    return findIndex(s, words)
  }

  const res = []
  const constituteWord = (index, words, str = '') => {
    if (index === words.length) {
      res.push(str)
      return
    }
    words.forEach(item => {
      if (str.indexOf(item) !== -1) return
      constituteWord(index + 1, words, str + item)
    })
  }
  constituteWord(0, words, '')
  return findIndex(s, res)
}
findSubstring('barfoofoobarthefoobarman', ["bar","foo","the"])
// @lc code=end
