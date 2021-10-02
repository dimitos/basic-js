import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let res = [];
  arr.map((el, i) => {
    if (el === '--discard-prev') {
      if (i !== 0) {
        res[i] = '';
        res[i - 1] = '';
      } else {
        res[i] = '';
      }
    } else if (el === '--discard-next') {
      if (i !== arr.length - 1) {
        res[i] = '';
        res[i + 1] = '';
      } else {
        res[i] = '';
      }
    } else if (el === '--double-next') {
      res[i] = i !== arr.length - 1 ? arr[i + 1] : '';
    } else if (el === '--double-prev') {
      res[i] = res[i - 1] !== '' ? (res[i] = i !== 0 ? arr[i - 1] : '') : '';
    } else {
      res[i] = res[i] == '' ? '' : el;
    }
  });
  return res.filter((el) => el !== '');
}
