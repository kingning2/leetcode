/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxChild = '';
  let now = '';
  let prev = '';
  let i = 0;
  while (i < s.length) {
    now = s[i];
    if (prev.indexOf(now) !== -1) {
      if (maxChild.length < prev.length) {
        maxChild = prev
      }
      prev = now
    } else {
      prev += now;
    }
    i++;
  }
  return maxChild.length
};
lengthOfLongestSubstring("asdfjksjvsdga")
// @lc code=end

