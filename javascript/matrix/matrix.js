class Matrix {
  constructor(elements) {
    this.rows = elements.split('\n').map(row => {
      return row.split(' ').map(element => {
        return Number(element);
      });
    });
    this.columns = this.rows[0].map((col, i) => this.rows.map(row => row[i]));
  }
}

module.exports = Matrix;