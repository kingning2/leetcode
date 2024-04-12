/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const arr = []
  for (let i = 0; i < numRows; i++) arr.push([])
  let index = 0;
  let row = 0;
  let flag = false;
  while (index < s.length) {
    arr[row].push(s[index]);
    index++
    if (row === numRows - 1) flag = true;
    if (row === 0) flag = false;
    if (!flag) {
      row ++;
    }else {
      row --;
    }
  }
  return arr.flat(Infinity).join('')
};

// @lc code=end

