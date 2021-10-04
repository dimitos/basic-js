import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let data = {},
    r = '';
  data.str = `${str}`;
  data.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  data.separator = options.separator ? options.separator : '+';
  data.additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  data.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  if (options.addition !== undefined) data.addition = `${options.addition}`;

  for (let i = 0; i < data.repeatTimes; i++) {
    let tmp = data.str;
    if (data.addition) {
      for (let k = 0; k < data.additionRepeatTimes; k++) {
        if (k !== data.additionRepeatTimes - 1) {
          tmp += data.addition;
          if (data.additionSeparator) tmp += data.additionSeparator;
        } else tmp += data.addition;
      }
    }
    if (i !== data.repeatTimes - 1) {
      r += tmp;
      if (data.separator) r += data.separator;
    } else r += tmp;
  }

  return r;
}
