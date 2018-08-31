class Gigasecond {
  constructor(date) {
    this.start = date;
  }

  date() {
    let copiedDate = new Date(this.start.getTime());
    return new Date(copiedDate.setUTCSeconds(this.start.getUTCSeconds() + 1E9));
  }
}

module.exports = Gigasecond;