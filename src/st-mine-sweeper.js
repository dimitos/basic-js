import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let arr = [];
  let cnt = 0;
  matrix.map((row, x) => {
    arr[x] = [];
    row.map((el, y) => {
      if (
        (x > 0 && y > 0 && matrix[x - 1][y - 1] === true) ||
        (x < matrix.length - 1 && y < row.length - 1 && matrix[x + 1][y + 1] === true) ||
        (x > 0 && y < row.length - 1 && matrix[x - 1][y + 1] === true) ||
        (x < matrix.length - 1 && y > 0 && matrix[x + 1][y - 1] === true) ||
        (x > 0 && matrix[x - 1][y] === true) ||
        (y > 0 && matrix[x][y - 1] === true)
      )
        cnt++;
      if (y < row.length - 1 && matrix[x][y + 1] === true) cnt++;
      if (x < matrix.length - 1 && matrix[x + 1][y] === true) cnt++;
      arr[x][y] = cnt;
      cnt = 0;
    });
  });
  return arr;
}
