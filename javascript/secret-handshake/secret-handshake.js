class SecretHandshake {
  constructor(n) {
    if (!/^[0-9]+$/.test(n)) throw new Error('Handshake must be a number');
    this.binary = n.toString(2);
    this.actions = {
      0: 'wink',
      1: 'double blink',
      2: 'close your eyes',
      3: 'jump',
      4: 'reverse'
    };
  }

  commands() {
    let handshake = [];
    for (let i = 0; i < this.binary.length; i++) {
      if (i === 0 && this.binary[this.binary.length - 1] == 1) {
        handshake.push('wink');
      }
      if (i === 1 && this.binary[this.binary.length - 1 - i] == 1) {
        handshake.push('double blink');
      }
      if (i === 2 && this.binary[this.binary.length - 1 - i] == 1) {
        handshake.push('close your eyes');
      }
      if (i === 3 && this.binary[this.binary.length - 1 - i] == 1) {
        handshake.push('jump');
      }
      if (i === 4 && this.binary[this.binary.length - 1 - i] == 1) {
        handshake = handshake.reverse();
      }
    }
    return handshake;
  }
};

module.exports = SecretHandshake;