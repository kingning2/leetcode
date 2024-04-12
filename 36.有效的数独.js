/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 判断是否有重复
function isReplace(rows) {
  const rouArr = []
  rows.forEach((item) => {
    if (item === '.') return
    rouArr.push(+item)
  })
  const oldlen = rouArr.length
  const newlen = Array.from(new Set(rouArr)).length
  return oldlen === newlen
}

// 构建列
function buildColumn(board, index) {
  const colum = []
  board.forEach((item) => {
    colum.push(item[index])
  })
  return {
    isTrues: isReplace(colum),
    col: colum,
  }
}

// 构建九宫格
function buildSquare(board, index) {
  // 双指针用法
  let x = Math.floor(index / 3) * 3
  let y = (index % 3) * 3
  const square = []
  for (let i = 0; i < 9; i++) {
    square.push(board[x][y])
    if (x % 3 === 2) {
      y++
      x -= 2
    } else {
      x++
    }
  }
  return isReplace(square)
}

var isValidSudoku = function (board) {
  let isVaid = false
  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    // 行处理
    if (!isReplace(row)) return (isVaid = false)
    // 列处理
    const { isTrues } = buildColumn(board, i)
    if (!isTrues) return (isVaid = false)
    // 九宫格处理
    if (!buildSquare(board, i)) return (isVaid = false)
    isVaid = true
  }
  return isVaid
}
const a = isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '6', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
])
console.log(a);
// @lc code=end
