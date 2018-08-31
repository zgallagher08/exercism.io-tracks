const alphabet = 'abcdefghijklmnopqrstuvwxyz';

class Cipher {
  constructor(key = null) {
    
    if (typeof key === 'string') {
      if (key.length === 0) throw new Error('Bad key');
      for (let i = 0; i < key.length; i++) {
        let index = alphabet.indexOf(key[i]);
        if (index < 0) {
          throw new Error('Bad key')
        }
      }
      this.key = key;
    } else {
        this.key = '';
        for (let i = 1; i <= 100; i++) {
          this.key += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }
    }
  }

  encoderDecoder(s, shifter) {
    // Args:
    //  s: string
    //  encode: boolean
    //    true - encode
    //    false - decode
    let result = '';
    for (let i = 0; i < s.length; i++) {
      let index = alphabet.indexOf(s[i]);
      let keyCipherOffset = alphabet.indexOf(this.key[i%this.key.length]);
      result += alphabet[shifter(index, keyCipherOffset)];
    }
    return result;
  }

  encode(s) {

    return this.encoderDecoder(s, (index, keyCipherOffset) => {
      return (index + keyCipherOffset)%26;
    });
  }

  decode(s) {
    return this.encoderDecoder(s, (index, keyCipherOffset) => {
      index = (index - keyCipherOffset)%26;
        if (index < 0) {
          index = 26 + index;
        }
      return index;
    });
  }

}

module.exports = Cipher;