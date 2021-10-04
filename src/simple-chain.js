import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this.arr.push(`( ${value} )`);
      return this;
    }
  },
  removeLink(position) {
    if (position <= 0 || position > this.getLength() || typeof position != 'number') {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let finishArr = this.arr.join('~~');
    this.arr = [];
    return finishArr;
  },
};
