class DnaTranscriber {

  constructor() {
    this.mapToRna = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    };
  }

  toRna(dna) {
    let result = '';
    for (let i = 0; i < dna.length; i++) {
      if (!this.mapToRna[dna[i]]) {
        throw new Error('Invalid input');
      } else {
        result += this.mapToRna[dna[i]];
      }
    }
    return result;
  }
}

module.exports = DnaTranscriber;