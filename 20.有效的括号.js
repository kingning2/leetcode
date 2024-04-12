/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const statk = []
  for (let i = 0; i < s.length; i++) {
    // 进栈
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      statk.push(s[i]);
    }
    // 出栈
    else {
      const left = statk.pop()
      if (left === '(' && s[i] !== ')') return false
      if (left === '[' && s[i] !== ']') return false
      if (left === '{' && s[i] !== '}') return false
      return true
    }
  }

};
console.log(isValid("()[]{}"));
// @lc code=end

