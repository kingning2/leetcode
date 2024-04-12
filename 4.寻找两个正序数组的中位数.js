/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const arr = [...new Set([...nums1,...nums2])].sort((a,b)=>a-b)
  const left = arr[Math.floor((arr.length-1)/2)]
  const right = arr[Math.ceil((arr.length-1)/2)]
  return ((left+right)/2).toFixed(5)
};
console.log(findMedianSortedArrays([1,3],[2,4,5]));
// @lc code=end

