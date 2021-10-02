import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  try {
    date.toTimeString();
  } catch (e) {
    throw new Error('Invalid date!');
  }

  const d = date.getMonth();
  return d === 0 || d === 1 || d === 11 ? 'winter' : d === 2 || d === 3 || d === 4 ? 'spring' : d === 5 || d === 6 || d === 7 ? 'summer' : 'autumn';
}
