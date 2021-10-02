import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = n.toString().split('').slice();
  let i = n.toString().split('').indexOf(arr.sort()[0]);
  n = n.toString().split('');
  n.splice(i, 1);
  return +n.join('');
}
