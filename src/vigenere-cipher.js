import { NotImplementedError } from '../extensions/index.js';
export default class VigenereCipheringMachine {
  constructor(option = true) {
    this.option = option;
    this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }
  encrypt() {
    if (typeof arguments[0] !== 'string' || arguments.length < 2) throw new Error('Incorrect arguments!');

    let string = arguments[0];
    let kString = arguments[1];
    let kStringLength = kString.length;
    let nString = '';
    let cnt = 0;

    for (let i in string) {
      if (this.letters.indexOf(string[i].toLowerCase()) === -1) {
        nString += string[i];
      } else {
        let iStr = this.letters.indexOf(string[i].toLowerCase());
        let key = this.letters.indexOf(kString[cnt % kStringLength].toLowerCase());
        let result = (iStr + key) % 26;
        nString += this.letters[result].toUpperCase();
        cnt++;
      }
    }

    return this.option ? nString : nString.split('').reverse().join('');
  }

  decrypt() {
    if (arguments.length < 2 || typeof arguments[0] !== 'string') throw new Error('Incorrect arguments!');

    let string = arguments[0];
    let kString = arguments[1];
    let kStringLength = kString.length;
    let nString = '';
    let cnt = 0;

    for (let i in string) {
      if (this.letters.indexOf(string[i].toLowerCase()) === -1) {
        nString += string[i];
      } else {
        let iStr = this.letters.indexOf(string[i].toLowerCase());
        let key = this.letters.indexOf(kString[cnt % kStringLength].toLowerCase());
        let result = iStr - key;
        if (result < 0) {
          result += 26;
        }
        nString += this.letters[result].toUpperCase();
        cnt++;
      }
    }

    return this.option ? nString : nString.split('').reverse().join('');
  }
}

// encrypt(str, key) {
// if (!str || !key) throw new Error('Incorrect arguments!');

// let result = [];
// str = str.toUpperCase();
// key = key.toUpperCase();

// for (let i = 0, j = 0; i < str.length; i++) {
//   if (str[i] >= 'A' && str[i] <= 'Z') {
//     let strChar = str[i].charCodeAt(0) - 65;
//     let keyChar = key[j % key.length].charCodeAt(0) - 65;
//     let resChar = (strChar + keyChar) % 26 + 65;
//     result.push(String.fromCharCode(resChar));
//     j++;
//   } else {
//     result.push(str[i]);
//   }
// }
// return this.type ? result.join('') : result.reverse().join('');
// }
// decrypt(str, key) {
// if (!str || !key) throw new Error('Incorrect arguments!');

// let result = [];
// str = str.toUpperCase();
// key = key.toUpperCase();

// for (let i = 0, j = 0; i < str.length; i++) {
//   if (str[i] >= 'A' && str[i] <= 'Z') {
//     let strChar = str[i].charCodeAt(0) - 65;
//     let keyChar = key[j % key.length].charCodeAt(0) - 65;
//     let resChar = (strChar + (26 - keyChar)) % 26 + 65
//     result.push(String.fromCharCode(resChar));
//     j++;
//   } else {
//     result.push(str[i]);
//   }
// }
// return this.type ? result.join('') : result.reverse().join('');
// }

// constructor(option = true) {
//   this.varient = varient;
//   this.words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// }
// encrypt() {
//   if (arguments.length < 2 || typeof (arguments[0]) !== 'string') throw new Error('Incorrect arguments!');

//   let str = arguments[0];
//   let kString = arguments[1];
//   let kStringLength = keyStr.length;
//   let newStr = '';
//   let r = 0;

//   for (let i in str) {
//       if (this.words.indexOf(str[i].toLowerCase()) !== -1) {
//           let iStr = this.words.indexOf(str[i].toLowerCase());
//           let indKeyChar = this.words.indexOf(keyStr[r % keyStrLength].toLowerCase());
//           let res = (indStrChar + indKeyChar) % 26;
//           newStr += this.words[res].toUpperCase();
//           r++;

//       } else {
//           newStr += str[i];
//       }
//   }

//   return this.varient ? newStr : newStr.split('').reverse().join('')
// }

// decrypt() {
//   if (arguments.length < 2 || typeof (arguments[0]) !== 'string') throw new Error('Incorrect arguments!');

//   let str = arguments[0];
//   let keyStr = arguments[1];
//   let keyStrLength = keyStr.length;
//   let newStr = '';
//   let r = 0;

//   for (let i in str) {
//       if (this.words.indexOf(str[i].toLowerCase()) !== -1) {
//           let indStrChar = this.words.indexOf(str[i].toLowerCase());
//           let indKeyChar = this.words.indexOf(keyStr[r % keyStrLength].toLowerCase());
//           let res = (indStrChar - indKeyChar);
//           if (res < 0) {
//               res += 26;
//           }
//           newStr += this.words[res].toUpperCase();
//           r++;

//       } else {
//           newStr += str[i];
//       }
//   }

//   return this.varient ? newStr : newStr.split('').reverse().join('')
// }
