class Triangle {
  constructor(depth) {
    this.rows = [[1]];
    for (let i = 1; i < depth; i++) {
      const newRow = [1];
      for (let j = 0; j < this.rows[i - 1].length - 1; j++) {
        newRow.push(this.rows[i - 1][j] + this.rows[i - 1][j + 1]);
      }
      newRow.push(1);
      this.rows.push(newRow);
    }
    this.lastRow = this.rows[this.rows.length - 1];
  }
};

module.exports = Triangle;