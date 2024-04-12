/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let f = 0
// 构建列
function buildColumn(board, index) {
  const colum = []
  ;[...board].forEach((item) => {
    colum.push(item[index])
  })
  return colum
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
  return square
}

// 判断是否正确
function isVaide(board, val, x, y) {
  const col = []
  const square = []
  for (let i = 0; i < 9; i++) {
    col.push(buildColumn(board, i))
    square.push(buildSquare(board, i))
  }
  const z = Math.floor(x / 3) * 3 + Math.floor(y / 3)
  // 判断是否合法
  if (col[y].includes(val)) return false
  if (board[x].includes(val)) return false
  if (square[z].includes(val)) return false
  return true
}

function backtracking(board) {
  // 利用递归的思维解决问题
  for (let i = 0; i < board.length; i++) {
    const item = board[i]
    for (let j = 0; j < board[i].length; j++) {
      if (item[j] !== '.') continue
      // 在这里开始遍历数字
      for (let k = 1; k <= 9; k++) {
        if (isVaide(board, k + '', i, j)) {
          board[i][j] = k + ''
          if (backtracking(board)) return true
          board[i][j] = '.'
        }
      }
      return false
    }
  }
  
  return true
}

var solveSudoku = function (board) {
  backtracking(board)
  return board
}
solveSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
])
// @lc code=end
