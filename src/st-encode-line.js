import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (!str) return '';
  let cnt = 1;
  let r = '';
  str = str.split('');
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      cnt++;
    } else {
      if (cnt > 1) {
        r += `${cnt}${str[i - 1]}`;
        cnt = 1;
      } else {
        r += `${str[i - 1]}`;
      }
    }
  }
  cnt > 1 ? (r += `${cnt}${str[str.length - 1]}`) : (r += `${str[str.length - 1]}`);
  return r;
}
