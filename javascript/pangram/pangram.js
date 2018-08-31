const alphabet = 'abcdefghijklmnopqrstuvwxyz';

class Pangram {
  constructor(s) {
    if (typeof s !== 'string' || s.length === 0) {
      this.notPangram = true;
      return;
    }
    // Remove spaces, underscores, numbers, and punctuation
    this.s = s.replace(/\s/g, '')
         .replace(/_/g, '')
         .replace(/\d+/g, '')
         .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
         .toLowerCase();
    this.letterCount = {};
    for (let i = 0; i < alphabet.length; i++) {
      this.letterCount[alphabet[i]] = 0;
    }
  }

  isPangram() {
    if (this.notPangram) return false;
    for (let i = 0; i < this.s.length; i++) {
      let n = this.letterCount[this.s[i]]++;
    }
    for (let c in this.letterCount) {
      if (this.letterCount[c] === 0) {
        return false;
      }
    }
    return true;
  }
};

module.exports = Pangram;