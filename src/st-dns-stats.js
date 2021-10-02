import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(d) {
  const r = {},
    arr = d.map((el) => el.split('.').reverse());
  arr.map((el) => {
    let i = '';
    el.map((el) => {
      i += `.${el}`;
      r[i] = i in r ? r[i] + 1 : 1;
    });
    i = '';
  });
  return r;
}
