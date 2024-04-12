/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = []
  const previous = (left,right,str = '') => {
    if (left > right) return;
    // 如果没有了就结束
    if(left === 0 && right === 0){
      result.push(str)
    } else {
      if (right > 0)
        previous(left,right - 1,str + ')')
      if (left > 0) 
        previous(left - 1,right,str + '(')
    }
  }
  previous(n,n)
  console.log(result);
};
generateParenthesis(3)
// @lc code=end

