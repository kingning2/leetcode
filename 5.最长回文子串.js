/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let statk = s.split('');
  const statklength = statk.length
  let previous = '';
  let result = [];
  let maxLength = 0;
  for(let i = 0; i < statklength; i++){
    let res = statk.shift();
    const index = statk.indexOf(res)
    if (index !== -1) {
      for (let j = 0; j <= index; j++) {
        res += statk[j]
      }
      if (res.length >= previous.length && res === res.split('').reverse().join('')) {
        previous = res
        result.push(res)
      }
    }
  }
  result.forEach(item => {
    if (item.length > maxLength) {
      maxLength = item.length
    }
  })
  result = result.filter(item => item.length === maxLength)
  return result
};
console.log(longestPalindrome("cbbd"));
// @lc code=end

