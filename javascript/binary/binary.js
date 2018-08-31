class Binary {
  constructor(input) {
    this.input = input;
  }

  toDecimal() {
    if (!/^[0-1]+$/.test(this.input)) return 0;
    let exponent = 0;
    return this.input.split('').reduceRight((result, bit) => {
      if (bit) {
        result += bit*(2**exponent);
      }
      exponent++;
      return result;
    }, 0);
  }
}

module.exports = Binary;